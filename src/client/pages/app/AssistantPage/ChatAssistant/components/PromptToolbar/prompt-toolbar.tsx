import { Box, Button, Flex, Icon, Tooltip } from 'lib/components'

type PromptToolbarProps = {
  loading: boolean
  disabled: boolean
  onClick: () => void
}

export const PromptToolbar = ({ loading, disabled, onClick }: PromptToolbarProps) => {
  return (
    <Box drawable theme="flipped" variant="solid" intent="neutral" padding="6px">
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Tooltip
          minInlineSize={300}
          maxInlineSize={300}
          content="ENTER sends | SHIFT + ENTER adds a new line | TAB returns to the prompt"
        >
          <Icon name="keyboard" size="17px" />
        </Tooltip>
        <Button
          intent="primary"
          color="blue"
          iconName="send-horizontal"
          iconPlacement="right"
          size="sm"
          loading={loading}
          disabled={disabled}
          onClick={onClick}
        >
          Send
        </Button>
      </Flex>
    </Box>
  )
}
