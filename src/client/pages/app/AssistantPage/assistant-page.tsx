import { Box, Section } from 'lib/components'

import { ChatAssistant } from './ChatAssistant'

export const AssistantPage = () => {
  return (
    <Box paddingTop="sm" paddingInline={{ base: 'md', lg: 'xl' }} maxInlineSize="75rem">
      <Section size="lg" heading="Assistant" iconName="sparkles">
        <ChatAssistant />
      </Section>
    </Box>
  )
}
