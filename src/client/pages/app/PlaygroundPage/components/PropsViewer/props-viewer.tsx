import { Button, Spacer, Table, Text } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const PropsViewer = ({ handleSideVisibility }: { handleSideVisibility: () => void }) => {
  const components = usePlaygroundStore(state => state.components)
  const activeComponent = usePlaygroundStore(state => state.activeComponent)
  const setActiveProp = usePlaygroundStore(state => state.setActiveProp)
  const displayProps = usePlaygroundStore(state => state.displayProps)

  if (!displayProps) return null

  const props = components[activeComponent].props
  const activeProp = components[activeComponent].activeProp

  return (
    <>
      <Text bold>Props</Text>
      <Spacer blockSize="xs" />
      <Table layout="fixed" intent="neutral" paddingBlock="3xs" paddingInline="xs">
        <Table.Body intent="muted">
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
                <Table.Row key={propName} intent={propName === activeProp ? 'tertiary' : 'muted'}>
                  <Table.Cell textAlign="center">
                    <Button
                      variant="ghost"
                      intent="primary"
                      color="blue"
                      bold={components[activeComponent].activeProp === propName}
                      size="sm"
                      iconName={props[propName].isResponsive ? 'screen-share' : undefined}
                      iconPlacement="right"
                      onClick={() => {
                        setActiveProp(activeComponent, propName)
                        handleSideVisibility()
                      }}
                      fullWidth
                      ripple={false}
                    >
                      {propName}
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Text
                      tagAttrs={{ style: { wordBreak: 'break-all', textAlign: 'center' } }}
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
