import { ComponentMeta } from 'client/definitions'
import { Divider, Text } from 'lib/components'
import { DividerProps } from 'lib/components/elements/Divider/definitions'

const DIVIDER_EXAMPLES_META: ComponentMeta<DividerProps>['examples'] = [
  {
    description: 'By default Divider renders with tertiary intent and marginBlock of 3.',
    jsx: <Divider />,
  },
  {
    description: 'Divider with custom size, color and intent.',
    jsx: <Divider size="lg" color="blue" intent="primary" />,
  },
  {
    description: 'Divider placed directly under heading.',
    jsx: (
      <>
        <Text intent="neutral" typography="h6">
          Heading
        </Text>
        <Divider />
      </>
    ),
  },
]

export { DIVIDER_EXAMPLES_META }
