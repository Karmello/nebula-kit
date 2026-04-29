import { Box, Flex, Text } from 'lib/components'

type UserMessageProps = {
  content: string
}

export const UserMessage = ({ content }: UserMessageProps) => {
  return (
    <Flex.Item alignSelf="flex-end">
      <Box drawable variant="solid" intent="primary" color="blue" paddingInline="10px" paddingBlock="8px">
        <Text>{content}</Text>
      </Box>
    </Flex.Item>
  )
}
