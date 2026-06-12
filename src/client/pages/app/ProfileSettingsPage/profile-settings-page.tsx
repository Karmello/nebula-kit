import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

import { Box, Loader, Section, Spacer, useSnackbar } from 'lib/components'
import { useGetUser } from 'client/api'
import { PageKey } from 'client/definitions'
import { useAppStore } from 'client/store'

import { AccountDeactivationSection } from './AccountDeactivationSection'
import { ConnectToDiscordSection } from './ConnectToDiscordSection'
import { ConnectToGithubSection } from './ConnectToGithubSection'
import { PaymentCancelSection } from './PaymentCancelSection'
import { UpdateEmailSection } from './UpdateEmailSection'
import { UpdatePasswordSection } from './UpdatePasswordSection'

export const ProfileSettingsPage = () => {
  const { search } = useLocation()
  const { show } = useSnackbar()

  const user = useAppStore(state => state.user)
  const getUser = useGetUser()

  useLayoutEffect(() => {
    if (user && !getUser.data) {
      getUser.sendRequest()
    }
  }, [user])

  useLayoutEffect(() => {
    const params = new URLSearchParams(search)
    if (params.get('discord') === 'connected') {
      show({ status: 'success', content: 'You successfully connected your Discord account.' })
      window.history.replaceState({}, '', PageKey.profileSettings)
    } else if (params.get('github') === 'connected') {
      show({ status: 'success', content: 'You successfully connected your GitHub account.' })
      window.history.replaceState({}, '', PageKey.profileSettings)
    }
  }, [search])

  return (
    <Box paddingTop="16px" paddingInline={{ base: '24px', lg: '48px' }} maxInlineSize="75rem">
      <Section size="lg" heading="Settings" iconName="settings">
        <Spacer blockSize="24px" />
        {!getUser.data || getUser.isMakingRequest ? (
          <Box position="relative" blockSize="160px">
            <Loader centered size="lg" color="blue" />
          </Box>
        ) : (
          <>
            <UpdatePasswordSection />
            <Spacer blockSize="48px" />
            <UpdateEmailSection />
            <Spacer blockSize="48px" />
            <ConnectToDiscordSection userPlan={getUser.data.user.plan} discordUserId={getUser.data.user.discordUserId} />
            <Spacer blockSize="48px" />
            <ConnectToGithubSection userPlan={getUser.data.user.plan} githubUsername={getUser.data.user.githubUsername} />
            <Spacer blockSize="48px" />
            <PaymentCancelSection
              userEmail={getUser.data.user.email}
              userPlan={getUser.data.user.plan}
              handleCancelSuccess={() => {
                window.scrollTo(0, 0)
                getUser.sendRequest()
              }}
            />
            <Spacer blockSize="48px" />
            <AccountDeactivationSection
              userEmail={getUser.data.user.email}
              userPlan={getUser.data.user.plan}
              handleDeactivateSuccess={() => {
                window.scrollTo(0, 0)
                getUser.sendRequest()
              }}
            />
          </>
        )}
      </Section>
    </Box>
  )
}
