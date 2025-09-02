import { Box, VStack } from 'lib/components'

const BoxDemoPage = () => {
  return (
    <VStack gap={20}>
      <Box variant="outline" intent="primary">
        Default Box
      </Box>
      <Box variant="outline" intent="primary" padding={10}>
        Box with padding
      </Box>
      <Box variant="outline" intent="primary" padding={10} textAlign="center">
        Box with text centered
      </Box>
    </VStack>
  )
}

export default BoxDemoPage
