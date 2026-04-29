import { Button, ButtonProps } from 'lib/components'

export const SendButton = (props: ButtonProps) => {
  return (
    <Button intent="primary" color="blue" iconName="send-horizontal" iconPlacement="right" size="md" fullWidth {...props}>
      Send
    </Button>
  )
}
