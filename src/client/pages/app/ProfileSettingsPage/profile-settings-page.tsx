import { useGetUser } from 'client/api'
import { Box, Loader, Section, Spacer } from 'lib/components'

import { ConnectToDiscordSection } from './ConnectToDiscordSection/connect-to-discord-section'
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
          <>
            <ConnectToDiscordSection
              userPlan={getUser.data.user.plan}
              discordUserId={getUser.data.user.discordUserId}
            />
            <Spacer blockSize={50} />
            <ConfirmCancelSection
              userEmail={getUser.data.user.email}
              userPlan={getUser.data.user.plan}
              handleCancelSuccess={() => {
                getUser.sendRequest()
              }}
            />
          </>
        )}
      </Section>
    </Box>
  )
}
