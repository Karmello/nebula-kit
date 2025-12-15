import * as LIB_COMPONENTS from 'lib/components'
import { Text, Spacer } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const RenderPanel = () => {
  const { activeComponent, getPropValues, getActiveSlot, getActiveComponentSlotNames } = usePlaygroundStore()
  if (!activeComponent) return null

  const activeSlot = getActiveSlot()

  let Component
  const Root = LIB_COMPONENTS[activeComponent as never] as any

  if (!activeSlot) {
    Component = <Root {...getPropValues(activeComponent)} />
  } else {
    Component = (
      <Root {...getPropValues(activeComponent)}>
        {getActiveComponentSlotNames().map(slotName => {
          const Slot = Root[slotName.split('.')[1]]
          const slotProps = getPropValues(slotName)
          return <Slot {...slotProps} />
        })}
      </Root>
    )
  }

  return (
    <>
      <Text bold>{activeComponent}</Text>
      <Spacer blockSize="5px" />
      {Component}
    </>
  )
}
