import { Box, Text } from 'lib/index.core'

import { ActionGroup, ActionGroupProps } from '.'

export type PropsFromActionGroupKey = (typeof PROPS_FROM_ACTION_GROUP)[number]

export const PROPS_FROM_ACTION_GROUP = [
  'color',
  'direction',
  'gap',
  'intent',
  'ripple',
  'attached',
] as const satisfies readonly (keyof ActionGroupProps)[]

export const ACTION_GROUP_PRESETS = [
  {
    name: '4 items',
    props: {
      //
    } as Record<PropsFromActionGroupKey, unknown>,
  },
]

export const ActionGroupTemplate = (props: any) => (
  <ActionGroup {...props}>
    <ActionGroup.Item>
      <Box margin="sm">
        <Text textAlign="center">Item 1</Text>
      </Box>
    </ActionGroup.Item>
    <ActionGroup.Item>
      <Box margin="sm">
        <Text textAlign="center">Item 2</Text>
      </Box>
    </ActionGroup.Item>
    <ActionGroup.Item>
      <Box margin="sm">
        <Text textAlign="center">Item 3</Text>
      </Box>
    </ActionGroup.Item>
    <ActionGroup.Item>
      <Box margin="sm">
        <Text textAlign="center">Item 4</Text>
      </Box>
    </ActionGroup.Item>
  </ActionGroup>
)
