import { Box, Section } from 'lib/components'

import { ChatAssistant } from './ChatAssistant'

export const AssistantPage = () => {
  return (
    <Box paddingTop="16px" paddingInline={{ base: '24px', lg: '48px' }} maxInlineSize="75rem">
      <Section size="lg" heading="Assistant" iconName="sparkles">
        <ChatAssistant />
      </Section>
    </Box>
  )
}
