import { Box, Flex, Text } from 'lib/components'
import { BoxColor } from 'lib/components/core/base/Box'

export const ListWithChips = ({ items, color = 'blue' }: { items: string[]; color?: BoxColor }) => (
  <Flex flexDirection="row" flexWrap="wrap" gap="7px">
    {items.map((s, i) => (
      <Box
        key={i}
        drawable
        variant="solid"
        color={color}
        intent="tertiary"
        paddingInline="10px"
        paddingBlock="4px"
        borderRadius="10px"
      >
        <Text>{s}</Text>
      </Box>
    ))}
  </Flex>
)
