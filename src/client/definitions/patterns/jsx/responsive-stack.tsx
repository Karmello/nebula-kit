import { Box, Flex } from 'lib/components'

export const ResponsiveStack = () => {
  return (
    <Flex flexDirection={{ base: 'column', md: 'row' }} alignItems="stretch" gap="xs">
      <Box drawable color="green" variant="outline" intent="primary" padding="lg">
        Box 1
      </Box>
      <Box drawable color="green" variant="outline" intent="primary" padding="lg">
        Box 2
      </Box>
    </Flex>
  )
}
