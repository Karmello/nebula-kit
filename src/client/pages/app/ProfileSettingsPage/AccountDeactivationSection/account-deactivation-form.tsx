import { useEffect, useState } from 'react'

import { Box, Button, Flex, Input, Resize, Text } from 'lib/components'

import { AccountDeactivationDialog } from './account-deactivation-dialog'

export const AccountDeactivationForm = ({
  userEmail,
  userPlan,
  handleDeactivateSuccess,
}: {
  userEmail: string
  userPlan: string
  handleDeactivateSuccess: () => void
}) => {
  const [enableInput, setEnableInput] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')

  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const deactivateSectionEnabled = userPlan === 'free'

  useEffect(() => {
    setInputValue('')
  }, [enableInput])

  return (
    <>
      <AccountDeactivationDialog
        open={openDialog}
        userEmail={userEmail}
        handleClose={() => {
          setOpenDialog(false)
          setEnableInput(false)
        }}
        handleDeactivateSuccess={handleDeactivateSuccess}
      />
      <Flex flexDirection="column" rowGap="7px">
        {!deactivateSectionEnabled ? (
          <Text intent="secondary" italic>
            * You need to unsubscribe from your paid plan first
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
              size="sm"
              intent="tertiary"
              color="red"
              disabled={!deactivateSectionEnabled || enableInput}
            >
              Proceed to deactivation
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
                  variant="solid"
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
