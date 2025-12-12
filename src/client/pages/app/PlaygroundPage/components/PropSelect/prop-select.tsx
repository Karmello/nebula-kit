import { Select, Spacer, Text } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const PropSelect = () => {
  const { components, activeComponent, getActiveSlot, setActiveProp } = usePlaygroundStore()
  if (!activeComponent) return null

  const activeSlot = getActiveSlot()

  const isSlot = activeSlot && activeSlot !== 'root'
  const props = isSlot ? components[activeSlot].props : components[activeComponent].props
  const value = isSlot ? components[activeSlot].activeProp : components[activeComponent].activeProp

  return (
    <>
      <Text bold>Property</Text>
      <Spacer blockSize="3px" />
      <Select
        value={value}
        onChange={value => setActiveProp(isSlot ? activeSlot : activeComponent, value)}
        inlineSize={{ base: '100%', md: '300px' }}
        scrollAlign="center"
        visibleItemsCount={7}
      >
        {Object.keys(props).map(propName => (
          <Select.Option
            value={propName}
            iconName={props[propName].isResponsive ? 'screen-share' : undefined}
            iconPosition="right"
            justifyContent="space-between"
          >
            {propName}
          </Select.Option>
        ))}
      </Select>
    </>
  )
}
