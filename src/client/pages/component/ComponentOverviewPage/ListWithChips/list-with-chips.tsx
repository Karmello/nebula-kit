import { Box, HorizontalRule, NEB_LENGTH, Spacer, Text, Title } from 'lib/components'
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
  <Box overflowX="auto" overflowY="hidden" maxInlineSize="100%">
    <Title typography="h6">{heading}</Title>
    <HorizontalRule marginTop={NEB_LENGTH.px_004} />
    <Spacer blockSize={NEB_LENGTH.px_004} />
    <Box display="flex" flexDirection="row" flexWrap="wrap" gap={NEB_LENGTH.px_006}>
      {items.map((s, i) => (
        <Box
          key={i}
          drawable
          bgMode="filled"
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
  </Box>
)
