import { Select, Spacer, Text } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const PropSelect = () => {
  const { components, activeComponent, setActiveProp } = usePlaygroundStore()

  if (!activeComponent) return null

  const componentProps = Object.keys(components[activeComponent].props)

  return (
    <>
      <Text bold>Property</Text>
      <Spacer blockSize="3px" />
      <Select
        value={components[activeComponent].activeProp}
        onChange={setActiveProp}
        inlineSize={{ base: '100%', md: '300px' }}
        scrollAlign="center"
        visibleItemsCount={7}
      >
        {componentProps.map(name => (
          <Select.Option value={name}>{name}</Select.Option>
        ))}
      </Select>
    </>
  )
}
