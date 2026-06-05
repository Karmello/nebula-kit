import { PROP_GROUPS } from 'lib/constants'
import { Box, Text } from 'lib/index.core'
import { ActionGroup } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { ActionGroupItemProps } from './slots'
import { ActionGroupProps } from './types'

export const ACTION_GROUP_META = {
  ActionGroup: {
    overview: {
      bundle: 'pro',
      title: '...',
      description: '...',
      features: ['...'],
      // composedOf: ['HtmlTag'],
      // topLevelTags: ['span'],
      slots: ['ActionGroup.Item'],
    },
    props: {},
    examples: [
      {
        jsx: (
          <ActionGroup direction="row">
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
        ),
      },
    ],
    changelog: {
      '0.11.0': ['released'],
    },
  } satisfies ComponentMeta<ActionGroupProps>,
  ActionGroupItem: {
    overview: {
      bundle: 'pro',
      name: 'ActionGroup.Item',
      title: '...',
      description: '...',
    },
    props: {
      children: {
        group: PROP_GROUPS.ROOT,
        options: ['ReactNode'],
        isRequired: true,
        description: '...',
      },
    },
  } satisfies ComponentMeta<ActionGroupItemProps>,
}
