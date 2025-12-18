import { Button } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const ResetPropsButton = () => {
  const { components, activeComponent, setPropField } = usePlaygroundStore()

  if (!activeComponent) return null

  const props = components[activeComponent].props

  return (
    <Button
      size="xs"
      color="red"
      intent="tertiary"
      tagAttrs={{
        onClick: () => {
          const propNames = Object.keys(props)
          propNames.forEach(propName => {
            setPropField(activeComponent, propName, 'value', props[propName].defaultValue)
          })
        },
      }}
    >
      Reset all props
    </Button>
  )
}
