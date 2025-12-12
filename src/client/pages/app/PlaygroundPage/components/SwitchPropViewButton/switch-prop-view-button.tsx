import { Button } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const SwitchPropViewButton = () => {
  const { components, activeComponent, setPropField } = usePlaygroundStore()
  if (!activeComponent) return null

  const { activeProp } = components[activeComponent]
  if (!activeProp) return null

  const { isResponsive, value } = components[activeComponent].props[activeProp]
  if (!isResponsive) return null

  return (
    <Button
      color="blue"
      intent="primary"
      size="sm"
      fullWidth
      iconName="screen-share"
      tagAttrs={{
        onClick: () => {
          if (typeof value !== 'object') {
            setPropField(activeComponent, activeProp, 'value', { base: value })
          } else {
            setPropField(activeComponent, activeProp, 'value', value.base)
          }
        },
      }}
    >
      {typeof value === 'object' ? 'Responsive values: ON' : 'Responsive values: OFF'}
    </Button>
  )
}
