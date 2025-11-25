import { useAppStore } from 'client/store'
import { fetchUser } from 'client/api'
import { Box, Button, Loader, MarkerList, Section, Spacer, Text } from 'lib/components'

export const ProfileSettingsPage = () => {
  const { token } = useAppStore()
  const { user, isFetching } = fetchUser({ doMakeRequest: !!token, minLoadingTime: 250 })

  const makeUnsubscribeRequest = async () => {
    await fetch(`${process.env.API_URL}/payment/cancel`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    })
  }

  return (
    <Box padding={{ base: 20, lg: 50 }} maxInlineSize="85rem">
      <Section heading="Settings" iconName="settings">
        {isFetching ? (
          <Box position="relative" blockSize={160}>
            <Loader centered size="lg" color="blue" />
          </Box>
        ) : (
          <>
            {token ? (
              <>
                <Spacer blockSize={25} />
                <Section
                  heading="Cancel paid subscription"
                  variant="soft-outline"
                  intent="primary"
                  color="red"
                  borderIntent="muted"
                >
                  <Text bold intent="neutral">
                    What happens when you cancel
                  </Text>
                  <Spacer blockSize={15} />
                  <MarkerList intent="neutral">
                    <MarkerList.Item>
                      <Text>your license key is immediately revoked</Text>
                    </MarkerList.Item>
                    <MarkerList.Item>
                      <Text>you lose access to the Pro components bundle</Text>
                    </MarkerList.Item>
                    <MarkerList.Item>
                      <Text>your account switches back to the free plan</Text>
                    </MarkerList.Item>
                    <MarkerList.Item>
                      <Text>unused time in your billing period is not refunded</Text>
                    </MarkerList.Item>
                  </MarkerList>
                  <Spacer blockSize={15} />
                  <Text intent="neutral">
                    If you change your mind later, you can start a new subscription at any time and a fresh
                    license key will be issued automatically.
                  </Text>
                  <Spacer blockSize={40} />
                  <Button
                    tagAttrs={{
                      onClick: () => {
                        makeUnsubscribeRequest()
                      },
                    }}
                    size="sm"
                    intent={user.plan === 'free' ? 'tertiary' : 'primary'}
                    color="red"
                    disabled={user.plan === 'free'}
                  >
                    Cancel
                  </Button>
                  <Spacer blockSize={10} />
                </Section>
              </>
            ) : null}
          </>
        )}
      </Section>
    </Box>
  )
}
