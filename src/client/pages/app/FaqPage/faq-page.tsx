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
        answer="NebulaKit offers only light and dark themes because these two backgrounds provide the highest clarity, contrast and accessibility across all components. Mid-tone or custom background hues tend to distort color balance, reduce readability and break intent-based coloring, which leads to inconsistent UI results. By focusing on fully light and fully black surfaces, NebulaKit guarantees predictable visuals and stable accessibility standards in every project."
      />
    </Box>
  )
}
