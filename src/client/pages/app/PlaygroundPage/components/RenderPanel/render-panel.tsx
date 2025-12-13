import * as LIB_COMPONENTS from 'lib/components'
import { Box, Text, Spacer } from 'lib/components'

import { usePlaygroundStore } from '../../store'
import { RENDER_TEMPLATES } from './render-templates'

export const RenderPanel = () => {
  const { activeComponent, getPropValues } = usePlaygroundStore()

  if (!activeComponent) return null

  const Component = RENDER_TEMPLATES[activeComponent]
    ? RENDER_TEMPLATES[activeComponent]
    : (LIB_COMPONENTS[activeComponent as never] as any)

  return (
    <>
      <Text bold>{activeComponent}</Text>
      <Spacer blockSize="5px" />
      <Box
        tagAttrs={{ style: { borderStyle: 'dashed' } }}
        variant="outline"
        intent="secondary"
        color="blue"
        padding="25px"
      >
        {RENDER_TEMPLATES[activeComponent] ? (
          <Component />
        ) : (
          <Component {...getPropValues(activeComponent)} />
        )}
      </Box>
    </>
  )
}
