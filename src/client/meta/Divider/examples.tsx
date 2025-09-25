import { ComponentMeta } from 'client/definitions'
import { Divider, Text } from 'lib/components'
import { DividerProps } from 'lib/components/elements/Divider/definitions'

const DIVIDER_EXAMPLES_META: ComponentMeta<DividerProps>['examples'] = [
  {
    description: 'Default Divider.',
    jsx: <Divider />,
  },
  {
    description: 'Divider with custom thickness and intent.',
    jsx: <Divider thickness={3} intent="primary" />,
  },
  {
    description: 'Divider placed directly under heading.',
    jsx: (
      <>
        <Text typography="h6">Heading</Text>
        <Divider />
      </>
    ),
  },
]

export { DIVIDER_EXAMPLES_META }
