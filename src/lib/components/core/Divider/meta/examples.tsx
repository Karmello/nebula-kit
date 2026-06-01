import { ComponentMeta } from 'client/definitions'

import { DividerProps } from '../definitions'
import { Divider } from '../divider'
import { Text } from '../../Text/text'

const DIVIDER_EXAMPLES_META: ComponentMeta<DividerProps>['examples'] = [
  {
    description: 'By default Divider renders with tertiary intent and marginBlock of 3.',
    jsx: <Divider />,
  },
  {
    description: 'Divider with custom color and intent.',
    jsx: <Divider color="blue" intent="primary" />,
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
