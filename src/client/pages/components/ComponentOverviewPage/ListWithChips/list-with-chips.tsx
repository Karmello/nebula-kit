import { Box, Flex, Text } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'

export const ListWithChips = ({
  heading,
  items,
  intent = 'secondary',
}: {
  heading: string
  items: readonly string[]
  intent?: BoxIntent
}) => (
  <Flex flexDirection="column" gap={5}>
    <Text bold>{heading}</Text>
    <Flex flexDirection="row" flexWrap="wrap" gap={3}>
      {items.map((s, i) => (
        <Box key={i} variant="solid" intent={intent} paddingInline={5} paddingBlock={3}>
          {s}
        </Box>
      ))}
    </Flex>
  </Flex>
)
