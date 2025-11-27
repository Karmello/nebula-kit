import { useGetUser } from 'client/api'
import { Box, Loader, Section, Spacer } from 'lib/components'

import { ConfirmCancelSection } from './ConfirmCancelSection/confirm-cancel-section'

export const ProfileSettingsPage = () => {
  const getUser = useGetUser()

  return (
    <Box padding={{ base: 20, lg: 50 }} maxInlineSize="75rem">
      <Section heading="Settings" iconName="settings">
        <Spacer blockSize={25} />
        {!getUser.data || getUser.isMakingRequest ? (
          <Box position="relative" blockSize={160}>
            <Loader centered size="lg" color="blue" />
          </Box>
        ) : (
          <ConfirmCancelSection
            userEmail={getUser.data.data.email}
            userPlan={getUser.data.data.plan}
            handleCancelSuccess={() => {
              getUser.sendRequest()
            }}
          />
        )}
      </Section>
    </Box>
  )
}
