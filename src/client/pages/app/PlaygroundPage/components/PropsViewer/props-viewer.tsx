import { Spacer, Table, Text } from 'lib/components'
import { Color } from 'lib/definitions'

import { usePlaygroundStore } from '../../store'

const VALUE_TYPE_COLOR_MAP: Record<string, Color> = {
  string: 'red',
  boolean: 'blue',
  object: 'gray',
}

export const PropsViewer = () => {
  const { components, activeComponent, getActiveSlot } = usePlaygroundStore()
  if (!activeComponent) return null

  const activeSlot = getActiveSlot()

  const isSlot = activeSlot && activeSlot !== 'root'
  const props = isSlot ? components[activeSlot].props : components[activeComponent].props

  return (
    <>
      <Text bold>{isSlot ? activeSlot : activeComponent}</Text>
      <Spacer blockSize="3px" />
      <Table layout="fixed" paddingBlock="5px" paddingInline="10px">
        <Table.Body>
          {Object.keys(props).map(propName => {
            let propValue = '-'
            const valueType = typeof props[propName].value

            if (props[propName].value !== undefined && JSON.stringify(props[propName].value) != '{}') {
              propValue =
                valueType === 'object'
                  ? JSON.stringify(props[propName].value)
                  : valueType === 'string'
                    ? `"${props[propName].value}"`
                    : String(props[propName].value)
            }

            return (
              <Table.Row>
                <Table.Cell>
                  <Text
                    bold
                    iconName={props[propName].isResponsive ? 'screen-share' : undefined}
                    iconPosition="right"
                  >
                    {propName}
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text intent="primary" color={VALUE_TYPE_COLOR_MAP[valueType]}>
                    {propValue}
                  </Text>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </>
  )
}
