import { Flex } from 'lib/components'
import { BREAKPOINTS } from 'lib/definitions'

import { usePlaygroundStore } from '../../store'
import { PropValueControl } from './components'

export const PropEditor = () => {
  const { components, activeComponent, getActiveSlot } = usePlaygroundStore()
  if (!activeComponent) return null

  const activeSlot = getActiveSlot()

  const isSlot = activeSlot && activeSlot !== 'root'

  if (isSlot && !components[activeSlot].activeProp) return null
  if (!isSlot && !components[activeComponent].activeProp) return null

  const prop = isSlot
    ? components[activeSlot].props[components[activeSlot].activeProp]
    : components[activeComponent].props[components[activeComponent].activeProp]

  return (
    <>
      {typeof prop.value !== 'object' ? (
        <PropValueControl />
      ) : (
        <Flex flexDirection="column" alignItems="stretch" rowGap="15px">
          {BREAKPOINTS.map(bp => (
            <Flex.Item key={bp}>
              <PropValueControl bp={bp} />
            </Flex.Item>
          ))}
        </Flex>
      )}
    </>
  )
}
