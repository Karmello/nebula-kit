import { Button, Dialog, Text, Title, useSnackbar } from 'lib/components'
import { useCancelPaidPlan } from 'client/api'

export const PaymentCancelDialog = ({
  open,
  userEmail,
  handleClose,
  handleCancelSuccess,
}: {
  open: boolean
  userEmail: string
  handleClose: () => void
  handleCancelSuccess: () => void
}) => {
  const cancelPaidPlan = useCancelPaidPlan()
  const { show } = useSnackbar()

  return (
    <Dialog open={open}>
      <Dialog.Header>
        <Title typography="h6" iconName="triangle-alert" color="red" intent="primary">
          Cancel subscription
        </Title>
      </Dialog.Header>
      <Dialog.Content>
        Are you sure you want to cancel the subscription for
        <Text tag="span" bold space="both">
          {userEmail}
        </Text>
        ? This action takes effect immediately.
      </Dialog.Content>
      <Dialog.Footer>
        <Button
          tagAttrs={{
            onClick: async () => {
              const res = await cancelPaidPlan.sendRequest()
              handleClose()
              if (res.ok) {
                show({ status: 'success', content: res.data.message })
                handleCancelSuccess()
              } else {
                show({ status: 'warning', content: res.error.message })
              }
            },
          }}
          scale="sm"
          intent="primary"
          color="red"
          loading={cancelPaidPlan.isMakingRequest}
        >
          Cancel now
        </Button>
        <Button
          scale="sm"
          tagAttrs={{ onClick: handleClose }}
          disabled={cancelPaidPlan.isMakingRequest}
        >
          Keep plan
        </Button>
      </Dialog.Footer>
    </Dialog>
  )
}
