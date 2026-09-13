import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

import { Box, HorizontalRule, NEB_LENGTH, Spacer, Title, useSnackbar } from 'lib/components'
import { PageKey } from 'client/definitions'
import { useAppStore } from 'client/store'

import AccountDetails from './account-details'
import PaidSubscription from './paid-subscription'

export const ProfileAccountPage = () => {
  const { search } = useLocation()
  const { show } = useSnackbar()
  const user = useAppStore(state => state.user)

  useLayoutEffect(() => {
    const params = new URLSearchParams(search)
    if (params.get('checkout') === 'success') {
      show({ status: 'success', content: 'All done ! You are on a new subscription plan.' })
      window.history.replaceState({}, '', PageKey.profileAccount)
    }
  }, [search])

  if (!user) {
    return null
  }

  return (
    <Box
      paddingTop={NEB_LENGTH.px_016}
      paddingInline={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }}
      maxInlineSize="75rem"
    >
      <Title typography="h4" iconName="circle-user">
        Account
      </Title>
      <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <AccountDetails />
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <PaidSubscription enabled={user && user.plan !== 'free'} />
    </Box>
  )
}
