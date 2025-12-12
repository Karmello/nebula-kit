import { Button } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const ResetPropsButton = () => {
  const { components, activeComponent, setPropField } = usePlaygroundStore()

  if (!activeComponent) return null

  return (
    <Button
      size="sm"
      color="blue"
      intent="primary"
      fullWidth
      tagAttrs={{
        onClick: () => {
          const propNames = Object.keys(components[activeComponent].props)
          propNames.forEach(propName => {
            setPropField(
              activeComponent,
              propName,
              'value',
              components[activeComponent].props[propName].defaultValue
            )
          })
        },
      }}
    >
      Reset all {activeComponent} props
    </Button>
  )
}
