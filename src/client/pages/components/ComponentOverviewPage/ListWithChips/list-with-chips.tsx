import { Box, Flex, Text } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'

export const ListWithChips = ({
  heading,
  items,
  intent = 'info',
}: {
  heading: string
  items: string[]
  intent?: BoxIntent
}) => (
  <Flex flexDirection="column" gap={10}>
    <Text bold>{heading}</Text>
    <Flex flexDirection="row" flexWrap="wrap" gap={6}>
      {items.map((s, i) => (
        <Box key={i} variant="outline" intent={intent} paddingInline={10} paddingBlock={6} borderRadius={10}>
          {s}
        </Box>
      ))}
    </Flex>
  </Flex>
)
