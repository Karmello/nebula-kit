import { Box, Flex, Spacer, Text } from 'lib/components'
import { COLORS } from 'lib/definitions'

export default () => {
  const arr = Array.from({ length: 21 }, (v, k) => k)

  return (
    <Box>
      <Text>Color calibration.</Text>
      <Spacer blockSize="50px" />
      {COLORS.map(color => (
        <Flex flexDirection="row" alignItems="stretch">
          {arr.map(n => {
            return (
              <Flex.Item key={n} flexGrow="1">
                <Box
                  tagAttrs={{ style: { backgroundColor: `hsl(var(--neb-${color}-${n}))` } }}
                  blockSize="50px"
                  borderRadius="0px"
                />
              </Flex.Item>
            )
          })}
        </Flex>
      ))}
      <Spacer blockSize="15px" />
    </Box>
  )
}
