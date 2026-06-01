import { Box, Flex, Section, Text } from 'lib/components'
import { BoxColor } from 'lib/types'

export const ListWithChips = ({ heading, items, color = 'blue' }: { heading: string; items: string[]; color?: BoxColor }) => (
  <Section heading={heading} size="sm">
    <Flex flexDirection="row" flexWrap="wrap" gap="2xs">
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
  </Section>
)
