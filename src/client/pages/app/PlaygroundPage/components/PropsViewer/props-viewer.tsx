import { Spacer, Table, Text } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const PropsViewer = () => {
  const { components, activeComponent, getActiveSlot } = usePlaygroundStore()
  if (!activeComponent) return null

  const activeSlot = getActiveSlot()

  const isSlot = activeSlot && activeSlot !== 'root'
  const props = isSlot ? components[activeSlot].props : components[activeComponent].props

  return (
    <>
      <Text bold>{isSlot ? activeSlot : activeComponent}</Text>
      <Spacer blockSize="5px" />
      <Table layout="fixed" paddingBlock="5px" paddingInline="10px">
        <Table.Body>
          {Object.keys(props).map(propName => {
            let propValue = '-'
            const valueType = typeof props[propName].value

            if (props[propName].value !== undefined && JSON.stringify(props[propName].value) != '{}') {
              propValue =
                valueType === 'object'
                  ? JSON.stringify(props[propName].value).replaceAll('"', '')
                  : String(props[propName].value)
            }

            return (
              <Table.Row>
                <Table.Cell>
                  <Text
                    tagAttrs={{ style: { wordBreak: 'break-all' } }}
                    bold
                    iconName={props[propName].isResponsive ? 'screen-share' : undefined}
                    iconPosition="right"
                  >
                    {propName}
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text tagAttrs={{ style: { wordBreak: 'break-all' } }} intent="primary" color="blue">
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
