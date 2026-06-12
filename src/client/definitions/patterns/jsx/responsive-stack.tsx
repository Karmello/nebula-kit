import { Box, Flex } from '@nebula-kit/core'

export const ResponsiveStack = () => {
  return (
    <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems="stretch" gap="8px">
      <Box drawable color="green" variant="outline" intent="primary" padding="48px">
        Box 1
      </Box>
      <Box drawable color="green" variant="outline" intent="primary" padding="48px">
        Box 2
      </Box>
    </Flex>
  )
}
