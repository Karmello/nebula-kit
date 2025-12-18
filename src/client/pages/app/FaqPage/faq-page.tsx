import { Box, Flex, Reveal, Section, Text } from 'lib/components'

const Question = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <Reveal label={question}>
      <Box padding="10px">
        <Text>{answer}</Text>
      </Box>
    </Reveal>
  )
}

export const FaqPage = () => {
  return (
    <Box paddingTop="15px" paddingInline={{ base: '20px', lg: '50px' }} maxInlineSize="75rem">
      <Section heading="Frequently asked questions" iconName="message-circle-question-mark">
        <Flex flexDirection="column" rowGap="15px">
          <Question
            question="Why NebulaKit offers only two themes ?"
            answer="NebulaKit provides only light and dark themes because these backgrounds deliver the most reliable contrast, readability and accessibility across all components. Mid-tone or custom backgrounds can disrupt color balance and intent-based styling, leading to inconsistent visual results. By focusing on absolute light and dark surfaces, NebulaKit ensures predictable visuals and stable accessibility in every project."
          />
          <Question
            question="Why setting color alone does not work ?"
            answer="In NebulaKit, color selects a palette, but intent defines how that color is applied. Without intent, components remain neutral. This avoids hidden semantic defaults and keeps visual emphasis explicit and predictable."
          />
        </Flex>
      </Section>
    </Box>
  )
}
