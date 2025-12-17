import { Button } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const ResetPropsButton = () => {
  const { components, activeComponent, getActiveSlot, setPropField } = usePlaygroundStore()

  if (!activeComponent) return null

  const activeSlot = getActiveSlot()

  const isSlot = activeSlot && activeSlot !== 'root'
  const props = isSlot ? components[activeSlot].props : components[activeComponent].props

  return (
    <Button
      size="xs"
      color="red"
      intent="tertiary"
      tagAttrs={{
        onClick: () => {
          const propNames = Object.keys(props)
          propNames.forEach(propName => {
            setPropField(
              isSlot ? activeSlot : activeComponent,
              propName,
              'value',
              props[propName].defaultValue
            )
          })
        },
      }}
    >
      Reset all props
    </Button>
  )
}
