import { useState } from 'react'

import { useAppStore } from 'client/store'
import { useGetUser } from 'client/api'
import { useCancelPaidPlan } from 'client/api'
import { Box, Button, Input, Loader, MarkerList, Resize, Section, Spacer, Text } from 'lib/components'

export const ProfileSettingsPage = () => {
  const [displayCancelForm, setDisplayCancelForm] = useState<boolean>(false)
  const [emailInputValue, setEmailInputValue] = useState<string>('')

  const { token } = useAppStore()

  const { data: getUserData, isMakingRequest } = useGetUser()
  const { sendRequest: sendCancelPaidPlanRequest } = useCancelPaidPlan()

  const enableCancelSection = getUserData?.data?.plan !== 'free'

  return (
    <Box padding={{ base: 20, lg: 50 }} maxInlineSize="75rem">
      <Section heading="Settings" iconName="settings">
        {!getUserData || isMakingRequest ? (
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
                  intent={enableCancelSection ? 'primary' : 'tertiary'}
                  color="red"
                  borderIntent="muted"
                >
                  <Text bold intent={enableCancelSection ? 'neutral' : 'tertiary'} color="gray">
                    What happens when you cancel
                  </Text>
                  <Spacer blockSize={15} />
                  <MarkerList intent={enableCancelSection ? 'neutral' : 'tertiary'} color="gray">
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
                  <Text intent={enableCancelSection ? 'neutral' : 'tertiary'} color="gray">
                    If you change your mind later, you can start a new subscription at any time and a fresh
                    license key will be issued automatically.
                  </Text>
                  <Spacer blockSize={30} />
                  <Box position="relative" blockSize={45}>
                    <Box position="absolute">
                      <Button
                        tagAttrs={{
                          onClick: () => {
                            setDisplayCancelForm(true)
                          },
                        }}
                        size="sm"
                        intent={enableCancelSection ? 'tertiary' : 'muted'}
                        color="red"
                        disabled={!enableCancelSection || displayCancelForm}
                      >
                        Cancel
                      </Button>
                    </Box>
                    <Box position="absolute">
                      <Resize property="inlineSize" visible={displayCancelForm}>
                        <Box inlineSize="300px">
                          <Input
                            tagAttrs={{
                              placeholder: 'Enter your email',
                              autoComplete: 'off',
                            }}
                            value={emailInputValue}
                            onChange={setEmailInputValue}
                            size="sm"
                            variant="outline"
                            intent="tertiary"
                            color="red"
                            startSlot={
                              <Button
                                tagAttrs={{
                                  onClick: () => {
                                    setDisplayCancelForm(false)
                                    setEmailInputValue('')
                                  },
                                }}
                                iconName="close"
                                intent="tertiary"
                                color="red"
                              />
                            }
                            endSlot={
                              <Button
                                tagAttrs={{
                                  onClick: () => {
                                    sendCancelPaidPlanRequest()
                                  },
                                }}
                                intent="tertiary"
                                color="red"
                                disabled={emailInputValue !== getUserData.data.email}
                              >
                                Confirm
                              </Button>
                            }
                          />
                        </Box>
                      </Resize>
                    </Box>
                  </Box>
                </Section>
              </>
            ) : null}
          </>
        )}
      </Section>
    </Box>
  )
}
