import { Box, Section } from 'lib/components'

import { ChatAssistant } from './ChatAssistant'

export const AssistantPage = () => {
  return (
    <Box paddingTop="15px" paddingInline={{ base: '20px', lg: '50px' }} maxInlineSize="75rem">
      <Section heading="Assistant" iconName="sparkles">
        <ChatAssistant />
      </Section>
    </Box>
  )
}
