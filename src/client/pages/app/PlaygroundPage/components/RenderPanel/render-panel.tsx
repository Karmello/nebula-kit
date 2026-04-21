import * as LIB_COMPONENTS from 'lib/components'
import { Text, Spacer, Box } from 'lib/components'

import { COMPONENT_TEMPLATES } from './definitions'
import { usePlaygroundStore } from '../../store'

export const RenderPanel = () => {
  const { activeComponent, getPropValues } = usePlaygroundStore()

  const Component = (COMPONENT_TEMPLATES[activeComponent as never] || LIB_COMPONENTS[activeComponent as never]) as any

  return (
    <>
      <Text bold>Canvas</Text>
      <Spacer blockSize="8px" />
      <Box
        tagAttrs={{ style: { borderStyle: 'dashed' } }}
        drawable
        variant="outline"
        intent="tertiary"
        color="gray"
        padding="25px"
      >
        <Component {...getPropValues(activeComponent)} />
      </Box>
    </>
  )
}
