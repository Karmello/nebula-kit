import { Select, Spacer, Text } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const PropSelect = () => {
  const { components, activeComponent, setActiveProp } = usePlaygroundStore()

  const props = components[activeComponent].props
  const value = components[activeComponent].activeProp

  return (
    <>
      <Text bold>Property</Text>
      <Spacer blockSize="5px" />
      <Select
        value={value}
        onChange={value => setActiveProp(activeComponent, value)}
        scrollAlign="center"
        visibleItemsCount={7}
        intent={{ base: 'secondary', lg: 'tertiary' }}
        itemBorderIntent={{ base: 'tertiary', lg: 'muted' }}
      >
        {Object.keys(props)
          .sort()
          .map(propName => (
            <Select.Option
              value={propName}
              iconName={props[propName].isResponsive ? 'screen-share' : undefined}
              iconPlacement="right"
              justifyContent="space-between"
            >
              {propName}
            </Select.Option>
          ))}
      </Select>
    </>
  )
}
