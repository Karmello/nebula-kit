import { Select, Spacer, Text } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const ComponentSelect = () => {
  const { components, getNoSlotComponentNames, activeComponent, setActiveComponent } = usePlaygroundStore()

  return (
    <>
      <Text bold>Component</Text>
      <Spacer blockSize="3px" />
      <Select
        value={activeComponent}
        onChange={setActiveComponent}
        inlineSize={{ base: '100%', md: '300px' }}
        scrollAlign="center"
        visibleItemsCount={7}
      >
        {getNoSlotComponentNames().map(name => (
          <Select.Option
            value={name}
            iconName={components[name].activeSlot !== undefined ? 'boxes' : undefined}
            iconPosition="right"
            justifyContent="space-between"
          >
            {name}
          </Select.Option>
        ))}
      </Select>
    </>
  )
}
