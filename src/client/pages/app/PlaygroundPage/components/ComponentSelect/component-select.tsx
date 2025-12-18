import { Select, Spacer, Text } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const ComponentSelect = () => {
  const { components, activeComponent, setActiveComponent } = usePlaygroundStore()

  return (
    <>
      <Text bold>Component</Text>
      <Spacer blockSize="5px" />
      <Select
        value={activeComponent}
        onChange={setActiveComponent}
        scrollAlign="center"
        visibleItemsCount={7}
        intent={{ base: 'secondary', lg: 'tertiary' }}
        itemBorderIntent={{ base: 'tertiary', lg: 'muted' }}
      >
        {Object.keys(components).map(name => (
          <Select.Option value={name}>{name}</Select.Option>
        ))}
      </Select>
    </>
  )
}
