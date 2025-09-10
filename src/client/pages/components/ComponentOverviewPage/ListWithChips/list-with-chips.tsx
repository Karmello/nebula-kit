import { Box, Flex, Text } from 'lib/components'

export const ListWithChips = ({ heading, items }: { heading: string; items: readonly string[] }) => (
  <Flex flexDirection="column" gap={5}>
    <Text bold>{heading}</Text>
    <Flex flexDirection="row" flexWrap="wrap" gap={5}>
      {items.map((s, i) => (
        <Box key={i} variant="solid" intent="secondary" paddingInline={5} paddingBlock={3}>
          {s}
        </Box>
      ))}
    </Flex>
  </Flex>
)
