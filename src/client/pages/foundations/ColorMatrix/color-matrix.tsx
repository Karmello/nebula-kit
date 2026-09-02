import { Box, NEB_LENGTH, Spacer, Text } from 'lib/components'
import { BOX_COLORS } from 'lib/components/core/Box/constants'

export default () => {
  const arr = Array.from({ length: 25 }, (v, k) => k + 1)

  return (
    <Box>
      <Text>Color calibration.</Text>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Box
        display="inline-grid"
        gridTemplateColumns={`repeat(${BOX_COLORS.length}, ${NEB_LENGTH.px_096})`}
        gap={NEB_LENGTH.px_004}
        overflowX="auto"
        maxInlineSize="100%"
        blockSize={NEB_LENGTH.px_512}
      >
        {arr.flatMap(n =>
          BOX_COLORS.map(color => (
            <Box
              key={`${n}-${color}`}
              tagAttrs={{ style: { backgroundColor: `hsl(var(--h) var(--s) var(--l-${n}))` } }}
              blockSize={NEB_LENGTH.px_096}
              inlineSize={NEB_LENGTH.px_096}
              borderRadius={NEB_LENGTH.px_000}
              color={color}
            />
          ))
        )}
      </Box>
      <Spacer blockSize={NEB_LENGTH.px_016} />
    </Box>
  )
}
