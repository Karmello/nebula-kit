import { Box, Flex, Spacer, Text } from 'lib/components'
import { BOX_COLORS } from 'lib/components/core/Box/constants'

export default () => {
  const arr = Array.from({ length: 26 }, (v, k) => k)

  return (
    <Box>
      <Text>Color calibration.</Text>
      <Spacer blockSize="48px" />
      {BOX_COLORS.map(color => (
        <Flex key={color} flexDirection="row" alignItems="stretch">
          {arr.map(n => {
            return (
              <Flex.Item key={n} flexGrow="1">
                <Box
                  tagAttrs={{ style: { backgroundColor: `hsl(var(--h) var(--s) var(--l-${n}))` } }}
                  blockSize="50px"
                  borderRadius="0px"
                  color={color}
                />
              </Flex.Item>
            )
          })}
        </Flex>
      ))}
      <Spacer blockSize="16px" />
    </Box>
  )
}
