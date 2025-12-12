import * as LIB_COMPONENTS from 'lib/components'
import { Box, Text, Spacer } from 'lib/components'

import { PropValue, usePlaygroundStore } from '../../store'
import { CHILDREN } from './children'

export const RenderPanel = () => {
  const { components, activeComponent } = usePlaygroundStore()

  if (!activeComponent) return null

  const Component = LIB_COMPONENTS[activeComponent as never] as any

  const props: Record<string, PropValue> = {}

  Object.keys(components[activeComponent].props).forEach(propName => {
    const { value } = components[activeComponent].props[propName]
    if (value !== undefined && value !== '') {
      props[propName] = components[activeComponent].props[propName].value
    }
  })

  return (
    <>
      <Text bold>{activeComponent}</Text>
      <Spacer blockSize="3px" />
      <Box
        tagAttrs={{ style: { borderStyle: 'dashed' } }}
        variant="outline"
        intent="secondary"
        color="blue"
        padding="25px"
      >
        {CHILDREN[activeComponent] ? (
          <Component {...props}>{CHILDREN[activeComponent]}</Component>
        ) : (
          <Component {...props} />
        )}
      </Box>
    </>
  )
}
