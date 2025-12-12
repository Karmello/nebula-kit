import { Table, Text } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const PropsViewer = () => {
  const { components, activeComponent } = usePlaygroundStore()
  if (!activeComponent) return null

  const { props } = components[activeComponent]

  return (
    <Table layout="fixed" paddingBlock="5px" paddingInline="10px">
      <Table.Caption>
        <Text bold>{activeComponent} props</Text>
      </Table.Caption>
      <Table.Body>
        {Object.keys(props).map(propName => {
          let propValue = '-'

          console.log(props[propName].value)

          if (props[propName].value !== undefined && JSON.stringify(props[propName].value) != '{}') {
            propValue = JSON.stringify(props[propName].value)
          }

          return (
            <Table.Row>
              <Table.Cell>
                <Text bold>{propName}</Text>
              </Table.Cell>
              <Table.Cell>{propValue}</Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table>
  )
}
