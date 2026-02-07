import { Select, Spacer, Text } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const ComponentSelect = () => {
  const components = usePlaygroundStore(state => state.components)
  const activeComponent = usePlaygroundStore(state => state.activeComponent)
  const setActiveComponent = usePlaygroundStore(state => state.setActiveComponent)

  return (
    <>
      <Text bold>Component</Text>
      <Spacer blockSize="5px" />
      <Select
        value={activeComponent}
        onChange={setActiveComponent}
        scrollAlign="center"
        visibleItemsCount={7}
      >
        {Object.keys(components).map(name => (
          <Select.Option value={name}>{name}</Select.Option>
        ))}
      </Select>
    </>
  )
}
