import { Box, NEB_LENGTH, Section, Text } from 'lib/components'
import { BoxColor } from 'lib/components/core/Box/types'

export const ListWithChips = ({
  heading,
  items,
  color = 'blue',
}: {
  heading: string
  items: string[]
  color?: BoxColor
}) => (
  <Section heading={heading} size="sm">
    <Box display="flex" flexDirection="row" flexWrap="wrap" gap={NEB_LENGTH.px_004}>
      {items.map((s, i) => (
        <Box
          key={i}
          drawable
          variant="solid"
          color={color}
          intent="tertiary"
          paddingInline={NEB_LENGTH.px_012}
          paddingBlock={NEB_LENGTH.px_004}
          borderRadius={NEB_LENGTH.px_012}
        >
          <Text>{s}</Text>
        </Box>
      ))}
    </Box>
  </Section>
)
