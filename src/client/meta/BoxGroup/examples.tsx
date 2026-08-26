import { BoxGroup, Text } from 'lib/index.core'
import { type DocExample } from 'client/definitions'

export const BOX_GROUP_EXAMPLES: DocExample[] = [
  {
    description: 'Segmented action group of three joined, interactive items.',
    jsx: (
      <BoxGroup display="flex">
        <BoxGroup.Item
          tag="button"
          interactive
          ripple
          cursor="pointer"
          variant="solid"
          intent="primary"
          padding="12px"
        >
          <Text>One</Text>
        </BoxGroup.Item>
        <BoxGroup.Item
          tag="button"
          interactive
          ripple
          cursor="pointer"
          variant="solid"
          intent="primary"
          padding="12px"
        >
          <Text>Two</Text>
        </BoxGroup.Item>
        <BoxGroup.Item
          tag="button"
          interactive
          ripple
          cursor="pointer"
          variant="solid"
          intent="primary"
          padding="12px"
        >
          <Text>Three</Text>
        </BoxGroup.Item>
      </BoxGroup>
    ),
  },
  {
    description: '...',
    jsx: (
      <BoxGroup drawable variant="outline" intent="primary" brand="blue" display="flex">
        <BoxGroup.Item drawable variant="solid" intent="tertiary">
          Content 1
        </BoxGroup.Item>
        <BoxGroup.Item drawable variant="solid" intent="tertiary">
          Content 2
        </BoxGroup.Item>
      </BoxGroup>
    ),
  },
]
