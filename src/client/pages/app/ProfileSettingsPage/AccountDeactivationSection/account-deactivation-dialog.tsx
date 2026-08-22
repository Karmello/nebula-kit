import { Button, Dialog, NEB_LENGTH, Text, Title, useSnackbar } from 'lib/components'
import { useRequestAccountDeactivation } from 'client/api'

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
        <Title typography="h6" iconName="triangle-alert" intent="primary" color="red">
          Account deactivation
        </Title>
      </Dialog.Header>
      <Dialog.Content>
        Are you sure you want to deactivate the account for
        <Text tag="span" bold space="both">
          {userEmail}
        </Text>
        ? Confirm in order to obtain deactivation link.
      </Dialog.Content>
      <Dialog.Footer>
        <Button
          tagAttrs={{
            style: {
              borderTopRightRadius: NEB_LENGTH.px_000,
              borderBottomRightRadius: NEB_LENGTH.px_000,
            },
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
          scale="sm"
          intent="primary"
          color="red"
          loading={requestAccountDeactivation.isMakingRequest}
        >
          Get deactivation link
        </Button>
        <Button
          scale="sm"
          tagAttrs={{
            onClick: handleClose,
            style: {
              borderTopLeftRadius: NEB_LENGTH.px_000,
              borderBottomLeftRadius: NEB_LENGTH.px_000,
            },
          }}
          disabled={requestAccountDeactivation.isMakingRequest}
        >
          Keep account
        </Button>
      </Dialog.Footer>
    </Dialog>
  )
}
