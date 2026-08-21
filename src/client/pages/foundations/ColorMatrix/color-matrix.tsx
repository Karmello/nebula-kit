import { Box, NEB_LENGTH, Spacer, Text } from 'lib/components'
import { BOX_COLORS } from 'lib/components/core/Box/constants'

export default () => {
  const arr = Array.from({ length: 26 }, (v, k) => k)

  return (
    <Box>
      <Text>Color calibration.</Text>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      {BOX_COLORS.map(color => (
        <Box key={color} display="flex" flexDirection="row" alignItems="stretch">
          {arr.map(n => {
            return (
              <Box key={n} flexGrow="1">
                <Box
                  tagAttrs={{ style: { backgroundColor: `hsl(var(--h) var(--s) var(--l-${n}))` } }}
                  blockSize={NEB_LENGTH.px_048}
                  borderRadius={NEB_LENGTH.px_000}
                  color={color}
                />
              </Box>
            )
          })}
        </Box>
      ))}
      <Spacer blockSize={NEB_LENGTH.px_016} />
    </Box>
  )
}
