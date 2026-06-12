import * as LIB_COMPONENTS from 'lib/components'
import { Box, Icon, Spacer, Text, Title, Tooltip } from 'lib/components'
import { COMPONENT_TEMPLATES } from 'client/definitions'
import { usePlaygroundStore } from 'client/store'

export const RenderPanel = () => {
  const { activeComponent, getPropValues } = usePlaygroundStore()

  const Component = (COMPONENT_TEMPLATES[activeComponent as never] || LIB_COMPONENTS[activeComponent as never]) as any

  return (
    <>
      <Title
        customSvgIcon={
          <Tooltip
            content='Playground state is stored locally. Components or props may change between versions. To make sure you are up to date, clear "neb.playground" from local storage and refresh.'
            minInlineSize={300}
            maxInlineSize={400}
            mode="click"
          >
            <Icon name="info" size="24px" color="blue" intent="primary" />
          </Tooltip>
        }
        iconPlacement="right"
      >
        <Text bold>Canvas</Text>
      </Title>
      <Spacer blockSize="4px" />
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
