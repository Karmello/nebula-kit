import { Box, Flex, NEB_LENGTH } from '@nebula-kit/core'

export const ResponsiveStack = () => {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="stretch"
      gap={NEB_LENGTH.px_008}
    >
      <Box drawable color="green" variant="outline" intent="primary" padding={NEB_LENGTH.px_048}>
        Box 1
      </Box>
      <Box drawable color="green" variant="outline" intent="primary" padding={NEB_LENGTH.px_048}>
        Box 2
      </Box>
    </Flex>
  )
}
