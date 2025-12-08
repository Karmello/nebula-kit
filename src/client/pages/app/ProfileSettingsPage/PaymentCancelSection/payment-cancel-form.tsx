import { useEffect, useState } from 'react'

import { Box, Button, Flex, Input, Resize, Text } from 'lib/components'

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
      <Flex flexDirection="column" rowGap={7}>
        {!cancelSectionEnabled ? (
          <Text intent="secondary" italic>
            * For paid users
          </Text>
        ) : null}
        <Box position="relative" blockSize={45}>
          <Box position="absolute">
            <Button
              tagAttrs={{
                onClick: () => {
                  setEnableInput(true)
                },
              }}
              size="sm"
              intent="tertiary"
              color="red"
              disabled={!cancelSectionEnabled || enableInput}
            >
              Proceed to cancellation
            </Button>
          </Box>
          <Box position="absolute">
            <Resize property="inlineSize" visible={enableInput}>
              <Box inlineSize="400px">
                <Input
                  tagAttrs={{
                    placeholder: 'Enter your email',
                    autoComplete: 'off',
                  }}
                  value={inputValue}
                  onChange={setInputValue}
                  size="sm"
                  variant="outline"
                  intent="tertiary"
                  color="red"
                  startSlot={
                    <Button
                      tagAttrs={{
                        onClick: () => {
                          setEnableInput(false)
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
                          setOpenDialog(true)
                        },
                      }}
                      intent="tertiary"
                      color="red"
                      disabled={inputValue !== userEmail}
                    >
                      Continue
                    </Button>
                  }
                />
              </Box>
            </Resize>
          </Box>
        </Box>
      </Flex>
    </>
  )
}
