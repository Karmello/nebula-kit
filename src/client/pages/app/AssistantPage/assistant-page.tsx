import { Box, NEB_LENGTH, Section } from 'lib/components'

import { ChatAssistant } from './ChatAssistant'

export const AssistantPage = () => {
  return (
    <Box paddingTop={NEB_LENGTH.px_016} paddingInline={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }} maxInlineSize="75rem">
      <Section size="lg" heading="Assistant" iconName="sparkles">
        <ChatAssistant />
      </Section>
    </Box>
  )
}
