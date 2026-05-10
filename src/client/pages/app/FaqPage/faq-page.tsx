import { Box, Flex, Reveal, Section, Text } from 'lib/components'

import { FAQ } from './definitions'

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
    <Box paddingTop="sm" paddingInline={{ base: 'md', lg: 'xl' }} maxInlineSize="75rem">
      <Section size="lg" heading="Frequently asked questions" iconName="message-circle-question-mark">
        <Flex flexDirection="column" rowGap="sm">
          {FAQ.map(({ question, answer }, key) => (
            <Question key={key} question={question} answer={answer} />
          ))}
        </Flex>
      </Section>
    </Box>
  )
}
