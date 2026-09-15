import { Box, NEB_LENGTH, Text } from 'lib/components'

type UserMessageProps = {
  content: string
}

export const UserMessage = ({ content }: UserMessageProps) => {
  return (
    <Box alignSelf="flex-end">
      <Box
        drawable
        bgMode="filled"
        intent="primary"
        color="blue"
        paddingInline={NEB_LENGTH.px_012}
        paddingBlock={NEB_LENGTH.px_008}
      >
        <Text tagAttrs={{ style: { whiteSpace: 'pre-wrap' } }} typography="small">
          {content}
        </Text>
      </Box>
    </Box>
  )
}
