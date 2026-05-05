import { Box, Button, Flex, Icon, Loader, Text, Tooltip } from 'lib/components'

type PromptToolbarProps = {
  loading: boolean
  disabled: boolean
  lengthStatus: string
  handleSend: () => void
  handleCancel: () => void
}

export const PromptToolbar = ({ loading, disabled, lengthStatus, handleSend, handleCancel }: PromptToolbarProps) => {
  return (
    <Box drawable theme="flipped" variant="solid" intent="neutral" padding="7px" paddingLeft="17px">
      <Flex alignItems="center">
        <Flex.Item flex="1">
          <Flex alignItems="center" columnGap="sm">
            <Tooltip
              intent="primary"
              variant="outline"
              minInlineSize={300}
              maxInlineSize={300}
              content="ENTER sends | SHIFT + ENTER adds a new line | TAB returns to the prompt"
            >
              <Icon name="keyboard" size="22px" />
            </Tooltip>
            {!loading ? <Text typography="small">{lengthStatus}</Text> : null}
          </Flex>
        </Flex.Item>
        <Flex alignItems="center" columnGap="sm">
          <Loader active={loading} size="sm" />
          <Button
            intent="primary"
            color={!loading ? 'blue' : 'red'}
            iconName={!loading ? 'send-horizontal' : 'circle-x'}
            iconPlacement="right"
            size="sm"
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
