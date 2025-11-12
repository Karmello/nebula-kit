import { Box, Flex, Text } from 'lib/components'
import { Color } from 'lib/definitions'

export const ListWithChips = ({
  heading,
  items,
  color = 'blue',
}: {
  heading: string
  items: string[]
  color?: Color
}) => (
  <Flex flexDirection="column" gap={10}>
    <Text bold>{heading}</Text>
    <Flex flexDirection="row" flexWrap="wrap" gap={6}>
      {items.map((s, i) => (
        <Box
          key={i}
          variant="outline"
          color={color}
          intent="primary"
          paddingInline={10}
          paddingBlock={6}
          borderRadius={10}
        >
          {s}
        </Box>
      ))}
    </Flex>
  </Flex>
)
