import { Box, Flex, NEB_LENGTH, Text } from 'lib/components'

type UserMessageProps = {
  content: string
}

export const UserMessage = ({ content }: UserMessageProps) => {
  return (
    <Flex.Item alignSelf="flex-end">
      <Box
        drawable
        variant="solid"
        intent="primary"
        color="blue"
        paddingInline={NEB_LENGTH.px_012}
        paddingBlock={NEB_LENGTH.px_008}
      >
        <Text tagAttrs={{ style: { whiteSpace: 'pre-wrap' } }} typography="small">
          {content}
        </Text>
      </Box>
    </Flex.Item>
  )
}
