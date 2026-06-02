import { Button } from 'lib/components'
import { usePlaygroundStore } from 'client/store'

export const SwitchPropViewButton = () => {
  const components = usePlaygroundStore(state => state.components)
  const activeComponent = usePlaygroundStore(state => state.activeComponent)
  const setPropField = usePlaygroundStore(state => state.setPropField)

  const { activeProp } = components[activeComponent]
  if (!activeProp) return null

  const { isResponsive, value } = components[activeComponent].props[activeProp]
  if (!isResponsive) return null

  return (
    <Button
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
