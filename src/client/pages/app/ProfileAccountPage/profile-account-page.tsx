import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

import { PageKey } from 'client/definitions'
import { useAppStore } from 'client/store'
import { Box, Section, Spacer, useSnackbar } from 'lib/components'

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
    <Box padding={{ base: 'md', lg: 'xl' }} maxInlineSize="75rem">
      <Section heading="Account" iconName="circle-user">
        <Spacer blockSize="md" />
        <AccountDetails />
        <Spacer blockSize="lg" />
        <PaidSubscription enabled={user && user.plan !== 'free'} />
      </Section>
    </Box>
  )
}
