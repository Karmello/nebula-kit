import { useRequestAccountDeactivation } from 'client/api'
import { Button, Dialog, Segment, Text, useSnackbar } from 'lib/components'

export const AccountDeactivationDialog = ({
  open,
  userEmail,
  handleClose,
  handleDeactivateSuccess,
}: {
  open: boolean
  userEmail: string
  handleClose: () => void
  handleDeactivateSuccess: () => void
}) => {
  const requestAccountDeactivation = useRequestAccountDeactivation()
  const { show } = useSnackbar()

  return (
    <Dialog open={open}>
      <Dialog.Header>
        <Text typography="h6" iconName="triangle-alert" intent="primary" color="red">
          Account deactivation
        </Text>
      </Dialog.Header>
      <Dialog.Content>
        Are you sure you want to deactivate the account for
        <Text tag="span" bold space="both">
          {userEmail}
        </Text>
        ? Confirm in order to obtain deactivation link.
      </Dialog.Content>
      <Dialog.Footer>
        <Segment>
          <Segment.Item>
            <Button
              tagAttrs={{
                onClick: async () => {
                  const res = await requestAccountDeactivation.sendRequest({ email: userEmail })
                  handleClose()
                  if (res.ok) {
                    show({ status: 'info', content: res.data.message })
                    handleDeactivateSuccess()
                  } else {
                    show({ status: 'warning', content: res.error.message })
                  }
                },
              }}
              size="sm"
              intent="primary"
              color="red"
              loading={requestAccountDeactivation.isMakingRequest}
            >
              Get deactivation link
            </Button>
          </Segment.Item>
          <Segment.Item>
            <Button
              size="sm"
              tagAttrs={{ onClick: handleClose }}
              disabled={requestAccountDeactivation.isMakingRequest}
            >
              Keep account
            </Button>
          </Segment.Item>
        </Segment>
      </Dialog.Footer>
    </Dialog>
  )
}
