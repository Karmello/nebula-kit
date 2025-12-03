import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

import { useGetUser } from 'client/api'
import { PageKey } from 'client/definitions'
import { useAppStore } from 'client/store'
import { Box, Loader, Section, Spacer, useSnackbar } from 'lib/components'

import { AccountDeactivationSection } from './AccountDeactivationSection'
import { UpdatePasswordSection } from './UpdatePasswordSection'
import { UpdateEmailSection } from './UpdateEmailSection'
import { ConnectToDiscordSection } from './ConnectToDiscordSection'
import { ConfirmCancelSection } from './ConfirmCancelSection'

export const ProfileSettingsPage = () => {
  const { search } = useLocation()
  const { show } = useSnackbar()
  const { user } = useAppStore()
  const getUser = useGetUser()

  useLayoutEffect(() => {
    if (user) {
      getUser.sendRequest()
    }
  }, [])

  useLayoutEffect(() => {
    const params = new URLSearchParams(search)
    if (params.get('discord') === 'connected') {
      show({ status: 'success', content: 'You successfully connected your Discord account.' })
      window.history.replaceState({}, '', PageKey.profileSettings)
    }
  }, [search])

  if (!user) {
    return null
  }

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
            <UpdatePasswordSection />
            <Spacer blockSize={50} />
            <UpdateEmailSection />
            <Spacer blockSize={50} />
            <ConnectToDiscordSection
              userPlan={getUser.data.user.plan}
              discordUserId={getUser.data.user.discordUserId}
            />
            <Spacer blockSize={50} />
            <ConfirmCancelSection
              userEmail={getUser.data.user.email}
              userPlan={getUser.data.user.plan}
              handleCancelSuccess={() => {
                window.scrollTo(0, 0)
                getUser.sendRequest()
              }}
            />
            <Spacer blockSize={50} />
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
