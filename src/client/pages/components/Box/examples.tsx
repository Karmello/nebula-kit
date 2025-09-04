import { CodeSnippet } from 'client/components'
import { Box, Divider, Flex, Spacer } from 'lib/components'
import { elemToStringService } from 'client/services'

const EXAMPLES = [
  <Box key={1} variant="outline" intent="primary">
    Default
  </Box>,
  <Box key={2} variant="outline" intent="primary" padding={10}>
    Padding
  </Box>,
  <Box key={2} variant="outline" intent="primary" padding={10} minInlineSize="200px" textAlign="center">
    Centered content
  </Box>,
]

export default () => {
  const elemToString = elemToStringService()

  return (
    <Flex flexDirection="column" gap={10}>
      {EXAMPLES.map(Example => (
        <>
          <Flex.Item alignSelf="flex-start">{Example}</Flex.Item>
          <Flex.Item alignSelf="flex-start" maxInlineSize="100%">
            <CodeSnippet code={elemToString(Example)} />
          </Flex.Item>
          <Spacer size={5} />
          <Divider />
          <Spacer size={5} />
        </>
      ))}
    </Flex>
  )
}
