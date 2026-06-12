import { Flex, Icon, Select, Spacer, Text, Tooltip } from 'lib/components'
import { usePlaygroundStore } from 'client/store'

export const PropSelect = () => {
  const components = usePlaygroundStore(state => state.components)
  const activeComponent = usePlaygroundStore(state => state.activeComponent)
  const setActiveProp = usePlaygroundStore(state => state.setActiveProp)

  const props = components[activeComponent].props
  const value = components[activeComponent].activeProp

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Text bold>Property</Text>
        <Tooltip
          content="The props list was also intentionally narrowed to include only those that best fit this context."
          minInlineSize={300}
          maxInlineSize={400}
          mode="click"
        >
          <Icon name="info" size="32px" color="blue" intent="primary" />
        </Tooltip>
      </Flex>
      <Spacer blockSize="4px" />
      <Select value={value} onChange={value => setActiveProp(activeComponent, value)}>
        {Object.keys(props)
          .sort()
          .map(propName => (
            <Select.Option
              value={propName}
              // iconName={props[propName].isResponsive ? 'screen-share' : undefined}
              // iconPlacement="right"
              // align="split"
            >
              {propName}
            </Select.Option>
          ))}
      </Select>
    </>
  )
}
