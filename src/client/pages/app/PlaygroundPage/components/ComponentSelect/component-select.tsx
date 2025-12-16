import { Select, Spacer, Text } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const ComponentSelect = () => {
  const { components, getNoSlotComponentNames, activeComponent, setActiveComponent, getActiveSlot } =
    usePlaygroundStore()

  const activeSlot = getActiveSlot()

  return (
    <>
      <Text bold>Component{activeSlot ? ' / Slot' : ''}</Text>
      <Spacer blockSize="5px" />
      <Select
        value={activeComponent}
        onChange={setActiveComponent}
        scrollAlign="center"
        visibleItemsCount={7}
        // intent="secondary"
        intent={{ md: 'secondary' }}
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
