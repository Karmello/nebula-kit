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
  <Flex flexDirection="column" gap="10px">
    <Text bold>{heading}</Text>
    <Flex flexDirection="row" flexWrap="wrap" gap="6px">
      {items.map((s, i) => (
        <Box
          key={i}
          drawable
          variant="outline"
          color={color}
          intent="primary"
          paddingInline="10px"
          paddingBlock="6px"
          borderRadius="10px"
        >
          {s}
        </Box>
      ))}
    </Flex>
  </Flex>
)
