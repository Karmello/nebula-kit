import { Box, HorizontalRule, NEB_LENGTH, Reveal, Text, Title } from 'lib/components'

import { FAQ } from './definitions'

const Question = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <Reveal label={question}>
      <Box padding={NEB_LENGTH.px_012}>
        <Text>{answer}</Text>
      </Box>
    </Reveal>
  )
}

export const FaqPage = () => {
  return (
    <Box
      paddingTop={NEB_LENGTH.px_016}
      paddingInline={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }}
      maxInlineSize="75rem"
    >
      <Title typography="h4" iconName="message-circle-question-mark">
        Frequently asked questions
      </Title>
      <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
      <Box display="flex" flexDirection="column" rowGap={NEB_LENGTH.px_016}>
        {FAQ.map(({ question, answer }, key) => (
          <Question key={key} question={question} answer={answer} />
        ))}
      </Box>
    </Box>
  )
}
