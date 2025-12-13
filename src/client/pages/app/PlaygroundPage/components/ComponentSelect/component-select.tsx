import { Select, Spacer, Text } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const ComponentSelect = () => {
  const { components, getNoSlotComponentNames, activeComponent, setActiveComponent } = usePlaygroundStore()

  return (
    <>
      <Text bold>Component / Slot</Text>
      <Spacer blockSize="5px" />
      <Select
        value={activeComponent}
        onChange={setActiveComponent}
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
