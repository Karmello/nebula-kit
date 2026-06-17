import { Box, Flex, FlexItemProps, Text } from '@nebula-kit/core'

export const JoinedActionGroup = () => {
  const flexItemProps: FlexItemProps<'button'> = {
    tag: 'button',
    cursor: 'pointer',
    flex: '1',
    interactive: true,
    ripple: true,
    variant: 'soft-outline',
    intent: 'primary',
    padding: '8px',
    blockSize: '40px',
  }

  return (
    <Box brand="red" overflowX="auto">
      <Flex inlineSize="300px">
        <Flex.Item
          {...flexItemProps}
          variant="solid"
          intent="secondary"
          borderTopRightRadius="0px"
          borderBottomRightRadius="0px"
          borderRightWidth="0px"
        >
          <Text textAlign="center">Box 1</Text>
        </Flex.Item>
        <Flex.Item {...flexItemProps} borderRadius="0px">
          <Text textAlign="center">Box 2</Text>
        </Flex.Item>
        <Flex.Item {...flexItemProps} borderTopLeftRadius="0px" borderBottomLeftRadius="0px" borderLeftWidth="0px">
          <Text textAlign="center">Box 3</Text>
        </Flex.Item>
      </Flex>
    </Box>
  )
}
