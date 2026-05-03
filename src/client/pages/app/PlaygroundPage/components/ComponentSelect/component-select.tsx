import { Select, Spacer, Text, Icon, Tooltip, Flex } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const ComponentSelect = () => {
  const components = usePlaygroundStore(state => state.components)
  const activeComponent = usePlaygroundStore(state => state.activeComponent)
  const setActiveComponent = usePlaygroundStore(state => state.setActiveComponent)

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Text bold>Component</Text>
        <Tooltip
          content="This list is curated for the Playground - not all components are included, only the ones that make sense here."
          minInlineSize={300}
          maxInlineSize={400}
        >
          <Icon name="info" size="18px" color="blue" intent="primary" />
        </Tooltip>
      </Flex>
      <Spacer blockSize="3xs" />
      <Select value={activeComponent} onChange={setActiveComponent} scrollAlign="center">
        {Object.keys(components).map(name => (
          <Select.Option value={name}>{name}</Select.Option>
        ))}
      </Select>
    </>
  )
}
