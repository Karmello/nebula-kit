import { Box, Reveal, Text } from 'lib/components'

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
    <Box padding={{ base: '20px', lg: '50px' }} maxInlineSize="75rem">
      <Question
        question="Why NebulaKit offers only two themes ?"
        answer="NebulaKit provides only light and dark themes because these backgrounds deliver the most reliable contrast, readability and accessibility across all components. Mid-tone or custom backgrounds can disrupt color balance and intent-based styling, leading to inconsistent visual results. By focusing on absolute light and absolute dark surfaces, NebulaKit ensures predictable visuals and stable accessibility in every project."
      />
    </Box>
  )
}
