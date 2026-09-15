import { useEffect, useState } from 'react'

import { Box, Button, IconButton, Input, NEB_LENGTH, Resize, Text } from 'lib/components'

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
      <Box display="flex" flexDirection="column" rowGap={NEB_LENGTH.px_008}>
        {!deactivateSectionEnabled ? (
          <Text intent="secondary" color="gray" italic>
            * You need to unsubscribe from your paid plan first
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
              disabled={!deactivateSectionEnabled || enableInput}
            >
              Proceed to deactivation
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
                  intent="tertiary"
                  color="red"
                  iconName="close"
                  onClick={() => {
                    setEnableInput(false)
                  }}
                />
                <Input
                  tagAttrs={{
                    autoComplete: 'off',
                    style: {
                      borderRadius: 0,
                    },
                  }}
                  placeholder="Enter your email"
                  value={inputValue}
                  onChange={setInputValue}
                  scale="sm"
                  variant="solid"
                  intent="tertiary"
                  color="red"
                />
                <Button
                  tagAttrs={{
                    onClick: () => {
                      setOpenDialog(true)
                    },
                    style: {
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    },
                  }}
                  scale="sm"
                  variant="solid"
                  intent="tertiary"
                  color="red"
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
