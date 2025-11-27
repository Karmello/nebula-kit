import { useEffect, useState } from 'react'

import { Box, Button, Input, Resize } from 'lib/components'

import { ConfirmCancelDialog } from './confirm-cancel-dialog'

export const ConfirmCancelForm = ({
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
      <ConfirmCancelDialog
        open={openDialog}
        userEmail={userEmail}
        handleClose={() => {
          setOpenDialog(false)
          setEnableInput(false)
        }}
        handleCancelSuccess={handleCancelSuccess}
      />
      <Box position="relative" blockSize={45}>
        <Box position="absolute">
          <Button
            tagAttrs={{
              onClick: () => {
                setEnableInput(true)
              },
            }}
            size="sm"
            intent={cancelSectionEnabled ? 'tertiary' : 'muted'}
            color="red"
            disabled={!cancelSectionEnabled || enableInput}
          >
            Proceed to cancellation
          </Button>
        </Box>
        <Box position="absolute">
          <Resize property="inlineSize" visible={enableInput}>
            <Box inlineSize="300px">
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
    </>
  )
}
