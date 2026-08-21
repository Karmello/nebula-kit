import { Flex, Icon, NEB_LENGTH, Select, Spacer, Text, Tooltip } from 'lib/components'
import { usePlaygroundStore } from 'client/store'

export const ComponentSelect = () => {
  const components = usePlaygroundStore(state => state.components)
  const activeComponent = usePlaygroundStore(state => state.activeComponent)
  const setActiveComponent = usePlaygroundStore(state => state.setActiveComponent)

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Text bold>Component</Text>
        <Tooltip
          content="This list does not include all components, only the ones that best fit the purpose of the Playground."
          minInlineSize={300}
          maxInlineSize={400}
          mode="click"
        >
          <Icon name="info" size={NEB_LENGTH.px_016} color="blue" intent="primary" />
        </Tooltip>
      </Flex>
      <Spacer blockSize={NEB_LENGTH.px_004} />
      <Select value={activeComponent} onChange={setActiveComponent}>
        {Object.keys(components).map(name => (
          <Select.Option value={name}>{name}</Select.Option>
        ))}
      </Select>
    </>
  )
}
