import { Select, Spacer, Text } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const SlotSelect = () => {
  const { getActiveSlot, setActiveSlot, getActiveComponentSlotNames } = usePlaygroundStore()

  const value = getActiveSlot()
  if (value === undefined) return null

  const slotNames = getActiveComponentSlotNames()

  return (
    <>
      <Text bold>Slot</Text>
      <Spacer blockSize="3px" />
      <Select
        value={value}
        onChange={setActiveSlot}
        inlineSize={{ base: '100%', md: '300px' }}
        scrollAlign="center"
        visibleItemsCount={7}
      >
        <Select.Option value="root">Root</Select.Option>
        {slotNames.map(name => (
          <Select.Option value={name}>{name}</Select.Option>
        ))}
      </Select>
    </>
  )
}
