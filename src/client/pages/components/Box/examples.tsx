import { CodeSnippet } from 'client/components'
import { Box, Stack, VStack } from 'lib/components'
import { elemToStringService } from 'client/services'

const EXAMPLES = [
  <Box key={1} variant="outline" intent="primary">
    Default Box
  </Box>,
  <Box key={2} variant="outline" intent="primary" padding={10}>
    Box with padding
  </Box>,
  <Box key={3} variant="outline" intent="primary" padding={10} textAlign="center">
    Box with centered content
  </Box>,
]

export default () => {
  const elemToString = elemToStringService()

  return (
    <VStack gap={20}>
      {EXAMPLES.map((Example, i) => (
        <Stack key={i}>
          {Example}
          <CodeSnippet code={elemToString(Example)} />
        </Stack>
      ))}
    </VStack>
  )
}
