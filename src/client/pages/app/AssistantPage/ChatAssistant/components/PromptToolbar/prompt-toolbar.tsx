import { Box, Button, Flex, Icon, Loader, NEB_LENGTH, Text, Tooltip } from 'lib/components'

type PromptToolbarProps = {
  loading: boolean
  disabled: boolean
  lengthStatus: string
  handleSend: () => void
  handleCancel: () => void
}

export const PromptToolbar = ({ loading, disabled, lengthStatus, handleSend, handleCancel }: PromptToolbarProps) => {
  return (
    <Box
      drawable
      theme="global-flipped"
      variant="solid"
      intent="neutral"
      padding={NEB_LENGTH.px_008}
      paddingLeft={NEB_LENGTH.px_016}
    >
      <Flex alignItems="center">
        <Flex.Item flex="1">
          <Flex alignItems="center" columnGap={NEB_LENGTH.px_016}>
            <Tooltip
              intent="primary"
              variant="outline"
              minInlineSize={300}
              maxInlineSize={300}
              content="ENTER sends | SHIFT + ENTER adds a new line | TAB returns to the prompt"
            >
              <Icon name="keyboard" size={NEB_LENGTH.px_024} />
            </Tooltip>
            {!loading ? <Text typography="small">{lengthStatus}</Text> : null}
          </Flex>
        </Flex.Item>
        <Flex alignItems="center" columnGap={NEB_LENGTH.px_016}>
          <Loader active={loading} size="sm" />
          <Button
            intent="primary"
            color={!loading ? 'blue' : 'red'}
            iconName={!loading ? 'send-horizontal' : 'circle-x'}
            iconPlacement="right"
            scale="sm"
            disabled={disabled}
            onClick={() => {
              if (!loading) {
                handleSend()
              } else {
                handleCancel()
              }
            }}
          >
            {!loading ? 'Send' : 'Stop'}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
