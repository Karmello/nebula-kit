import { FC } from 'react'

import * as components from 'lib/components'
import { Box } from 'lib/components'

import { usePlaygroundStore } from '../../use-playground-store'

export const RenderPanel = () => {
  const { componentName, propsEditorValues } = usePlaygroundStore()

  if (!componentName) return null

  const Component = components[componentName as never] as FC

  return (
    <Box
      tagAttrs={{ style: { borderStyle: 'dashed' } }}
      variant="outline"
      intent="secondary"
      color="blue"
      padding="25px"
    >
      {<Component {...propsEditorValues} />}
    </Box>
  )
}
