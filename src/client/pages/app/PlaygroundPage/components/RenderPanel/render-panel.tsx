import { FC } from 'react'

import * as components from 'lib/components'
import { Box } from 'lib/components'

import { usePlaygroundStore } from '../../use-playground-store'

export const RenderPanel = () => {
  const { componentName, propsEditorValues } = usePlaygroundStore()

  if (!componentName) return null

  const Component = components[componentName as never] as FC

  let valuesProperlyTyped: Record<string, unknown> = {}

  Object.keys(propsEditorValues).map(propName => {
    const propValue = propsEditorValues[propName as never]
    const valueAsNumber = Number(propValue)
    valuesProperlyTyped[propName as never] = Number.isNaN(valueAsNumber) ? propValue : valueAsNumber
  })

  return (
    <Box
      tagAttrs={{ style: { borderStyle: 'dashed' } }}
      variant="outline"
      intent="secondary"
      color="blue"
      padding={25}
    >
      {<Component {...valuesProperlyTyped} />}
    </Box>
  )
}
