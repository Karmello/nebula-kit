import { useEffect, useState } from 'react'

import { Box, Button, IconButton, Input, NEB_LENGTH, Resize, Text } from 'lib/components'

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
      <Box display="flex" flexDirection="column" rowGap={NEB_LENGTH.px_008}>
        {!cancelSectionEnabled ? (
          <Text intent="secondary" color="gray" italic>
            * For paid users
          </Text>
        ) : null}
        <Box position="relative" blockSize={NEB_LENGTH.px_048}>
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
              <Box display="flex" inlineSize="400px" paddingRight={NEB_LENGTH.px_024}>
                <IconButton
                  tagAttrs={{
                    style: {
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    },
                  }}
                  scale="sm"
                  variant="solid"
                  intent="tertiary"
                  color="red"
                  iconName="close"
                  onClick={() => {
                    setEnableInput(false)
                  }}
                />
                <Input
                  placeholder="Enter your email"
                  tagAttrs={{
                    autoComplete: 'off',
                    style: {
                      borderRadius: 0,
                    },
                  }}
                  value={inputValue}
                  onChange={setInputValue}
                  scale="sm"
                  variant="solid"
                  intent="tertiary"
                  color="red"
                />
                <Button
                  scale="sm"
                  variant="solid"
                  intent="tertiary"
                  color="red"
                  tagAttrs={{
                    onClick: () => {
                      setOpenDialog(true)
                    },
                    style: {
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    },
                  }}
                  disabled={inputValue !== userEmail}
                >
                  Continue
                </Button>
              </Box>
            </Resize>
          </Box>
        </Box>
      </Box>
    </>
  )
}
