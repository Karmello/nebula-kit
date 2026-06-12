import { Box, Text } from 'lib/index.core'

import { ActionGroup } from '.'
import type { ActionGroupProps } from './types'

export type PropsFromActionGroupKey = (typeof PROPS_FROM_ACTION_GROUP)[number]

export const PROPS_FROM_ACTION_GROUP = [
  'attach',
  'color',
  'direction',
  'elevated',
  'stretch',
  'intent',
  'ripple',
] as const satisfies readonly (keyof ActionGroupProps)[]

export const ACTION_GROUP_PRESETS = [
  {
    name: '4 items',
    props: {
      //
    },
  },
] satisfies {
  name: string
  props: Pick<ActionGroupProps, PropsFromActionGroupKey>
}[]

export const ActionGroupTemplate = (props: any) => (
  <ActionGroup {...props}>
    <ActionGroup.Item>
      <Box margin="16px">
        <Text textAlign="center">Item 1</Text>
      </Box>
    </ActionGroup.Item>
    <ActionGroup.Item>
      <Box margin="16px">
        <Text textAlign="center">Item 2</Text>
      </Box>
    </ActionGroup.Item>
    <ActionGroup.Item>
      <Box margin="16px">
        <Text textAlign="center">Item 3</Text>
      </Box>
    </ActionGroup.Item>
    <ActionGroup.Item>
      <Box margin="16px">
        <Text textAlign="center">Item 4</Text>
      </Box>
    </ActionGroup.Item>
  </ActionGroup>
)
