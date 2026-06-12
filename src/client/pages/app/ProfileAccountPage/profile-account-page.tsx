import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

import { Box, Section, Spacer, useSnackbar } from 'lib/components'
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
    <Box paddingTop="16px" paddingInline={{ base: '24px', lg: '48px' }} maxInlineSize="75rem">
      <Section size="lg" heading="Account" iconName="circle-user">
        <Spacer blockSize="24px" />
        <AccountDetails />
        <Spacer blockSize="48px" />
        <PaidSubscription enabled={user && user.plan !== 'free'} />
      </Section>
    </Box>
  )
}
