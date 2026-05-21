import { COMPONENT_TEMPLATES } from 'client/definitions'
import * as LIB_COMPONENTS from 'lib/components'
import { Text, Spacer, Box, Tooltip, Icon, WithIcon } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const RenderPanel = () => {
  const { activeComponent, getPropValues } = usePlaygroundStore()

  const Component = (COMPONENT_TEMPLATES[activeComponent as never] || LIB_COMPONENTS[activeComponent as never]) as any

  return (
    <>
      <WithIcon
        customSvgIcon={
          <Tooltip
            content='Playground state is stored locally. Components or props may change between versions. To make sure you are up to date, clear "neb.playground" from local storage and refresh.'
            minInlineSize={300}
            maxInlineSize={400}
            mode="click"
          >
            <Icon name="info" size="18px" color="blue" intent="primary" />
          </Tooltip>
        }
        iconPlacement="right"
      >
        <Text bold>Canvas</Text>
      </WithIcon>
      <Spacer blockSize="2xs" />
      <Box
        tagAttrs={{ style: { borderStyle: 'dashed' } }}
        drawable
        variant="outline"
        intent="tertiary"
        padding="25px"
        overflowX="auto"
      >
        <Component {...getPropValues(activeComponent)} />
      </Box>
    </>
  )
}
