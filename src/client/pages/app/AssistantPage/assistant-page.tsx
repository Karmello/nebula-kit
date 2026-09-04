import { Box, NEB_LENGTH } from 'lib/components'
import { Section } from 'client/components/reusable/Section'

import { ChatAssistant } from './ChatAssistant'

export const AssistantPage = () => {
  return (
    <Box
      paddingTop={NEB_LENGTH.px_016}
      paddingInline={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }}
      maxInlineSize="75rem"
    >
      <Section size="lg" heading="Assistant" iconName="sparkles">
        <ChatAssistant />
      </Section>
    </Box>
  )
}
