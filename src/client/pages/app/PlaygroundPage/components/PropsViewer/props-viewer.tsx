import { Spacer, Table, Text } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const PropsViewer = () => {
  const { components, activeComponent, setActiveProp, displayProps } = usePlaygroundStore()

  if (!displayProps) return null

  const props = components[activeComponent].props

  return (
    <>
      <Text bold>Props table</Text>
      <Spacer blockSize="8px" />
      <Table layout="fixed" paddingBlock="5px" paddingInline="10px" color="gray">
        <Table.Body>
          {Object.keys(props)
            .sort()
            .map(propName => {
              let propValue = '-'
              const valueType = typeof props[propName].value

              if (props[propName].value !== undefined && JSON.stringify(props[propName].value) != '{}') {
                propValue =
                  valueType === 'object'
                    ? JSON.stringify(props[propName].value)
                        .replaceAll('"', '')
                        .replaceAll(':', ': ')
                        .replaceAll(',', ', ')
                        .replaceAll('{', '{ ')
                        .replaceAll('}', ' }')
                    : String(props[propName].value)
              }

              return (
                <Table.Row>
                  <Table.Cell>
                    <Text
                      tag="span"
                      tagAttrs={{
                        style: { wordBreak: 'break-all', cursor: 'pointer' },
                        onClick: () => {
                          setActiveProp(activeComponent, propName)
                        },
                      }}
                      bold={components[activeComponent].activeProp === propName}
                      underline
                      intent="primary"
                      color="blue"
                      iconName={props[propName].isResponsive ? 'screen-share' : undefined}
                      iconPosition="right"
                    >
                      {propName}
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text
                      tagAttrs={{ style: { wordBreak: 'break-all' } }}
                      bold={components[activeComponent].activeProp === propName}
                    >
                      {propValue}
                    </Text>
                  </Table.Cell>
                </Table.Row>
              )
            })}
        </Table.Body>
      </Table>
      <Spacer />
      <Text iconName="screen-share" italic>
        = responsive prop
      </Text>
    </>
  )
}
