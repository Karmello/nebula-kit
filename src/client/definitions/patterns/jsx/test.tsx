import { Flex, FlexItemProps, Text } from 'lib/components'

export const Test = () => {
  const flexItemProps: FlexItemProps<'button'> = {
    tag: 'button',
    cursor: 'pointer',
    flex: '1',
    interactive: true,
    variant: 'solid',
    intent: 'tertiary',
    padding: 'xs',
  }

  return (
    <Flex drawable brand="blue" variant="solid" intent="tertiary" surface="dividing" inlineSize="300px" columnGap="3xs">
      <Flex.Item {...flexItemProps} borderTopRightRadius="0px" borderBottomRightRadius="0px" ripple>
        <Text textAlign="center">Box 1</Text>
      </Flex.Item>
      <Flex.Item {...flexItemProps} borderRadius="0px" ripple>
        <Text textAlign="center">Box 2</Text>
      </Flex.Item>
      <Flex.Item {...flexItemProps} borderTopLeftRadius="0px" borderBottomLeftRadius="0px" ripple>
        <Text textAlign="center">Box 3</Text>
      </Flex.Item>
    </Flex>
  )
}
