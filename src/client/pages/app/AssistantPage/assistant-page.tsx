import { Box, HorizontalRule, NEB_LENGTH, Text, Title } from 'lib/components'

import { ChatAssistant } from './ChatAssistant'

export const AssistantPage = () => {
  return (
    <Box
      paddingTop={NEB_LENGTH.px_016}
      paddingInline={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }}
      maxInlineSize="75rem"
    >
      <Title typography="h4" iconName="sparkles">
        Assistant
      </Title>
      <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
      <ChatAssistant />
    </Box>
  )
}
