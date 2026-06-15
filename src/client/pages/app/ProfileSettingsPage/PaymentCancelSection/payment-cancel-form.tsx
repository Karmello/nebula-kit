import { useEffect, useState } from 'react'

import { Box, Button, Flex, IconButton, Input, Resize, Text } from 'lib/components'

import { PaymentCancelDialog } from './payment-cancel-dialog'

export const PaymentCancelForm = ({
  userEmail,
  userPlan,
  handleCancelSuccess,
}: {
  userEmail: string
  userPlan: string
  handleCancelSuccess: () => void
}) => {
  const [enableInput, setEnableInput] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')

  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const cancelSectionEnabled = userPlan !== 'free'

  useEffect(() => {
    setInputValue('')
  }, [enableInput])

  return (
    <>
      <PaymentCancelDialog
        open={openDialog}
        userEmail={userEmail}
        handleClose={() => {
          setOpenDialog(false)
          setEnableInput(false)
        }}
        handleCancelSuccess={handleCancelSuccess}
      />
      <Flex flexDirection="column" rowGap="8px">
        {!cancelSectionEnabled ? (
          <Text intent="secondary" color="gray" italic>
            * For paid users
          </Text>
        ) : null}
        <Box position="relative" blockSize="45px">
          <Box position="absolute">
            <Button
              tagAttrs={{
                onClick: () => {
                  setEnableInput(true)
                },
              }}
              scale="sm"
              intent="tertiary"
              color="red"
              disabled={!cancelSectionEnabled || enableInput}
            >
              Proceed to cancellation
            </Button>
          </Box>
          <Box position="absolute">
            <Resize property="inlineSize" visible={enableInput}>
              <Box inlineSize="400px" paddingRight="20px">
                <Input
                  placeholder="Enter your email"
                  tagAttrs={{ autoComplete: 'off' }}
                  value={inputValue}
                  onChange={setInputValue}
                  scale="sm"
                  variant="solid"
                  intent="tertiary"
                  color="red"
                  startAffix={props => (
                    <IconButton
                      {...props}
                      iconName="close"
                      onClick={() => {
                        setEnableInput(false)
                      }}
                    />
                  )}
                  endAffix={props => (
                    <Button
                      {...props}
                      tagAttrs={{
                        onClick: () => {
                          setOpenDialog(true)
                        },
                      }}
                      disabled={inputValue !== userEmail}
                    >
                      Continue
                    </Button>
                  )}
                />
              </Box>
            </Resize>
          </Box>
        </Box>
      </Flex>
    </>
  )
}
