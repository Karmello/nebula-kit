import { Select } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const SlotSelect = () => {
  const { getActiveSlot, setActiveSlot, getActiveComponentSlotNames } = usePlaygroundStore()

  const value = getActiveSlot()
  if (value === undefined) return null

  const slotNames = getActiveComponentSlotNames()

  return (
    <Select value={value} onChange={setActiveSlot} scrollAlign="center" visibleItemsCount={7}>
      <Select.Option value="root">Root</Select.Option>
      {slotNames.map(name => (
        <Select.Option value={name}>{name}</Select.Option>
      ))}
    </Select>
  )
}
