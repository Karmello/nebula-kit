import { ComponentMeta } from 'client/definitions'

import { type SpacerProps, DEFAULT_SPACER_BLOCK_SIZE } from '../definitions'
import { Spacer } from '../../Spacer'
import { Text } from '../../Text'

const SPACER_EXAMPLES_META: ComponentMeta<SpacerProps>['examples'] = [
  {
    description: `Vertical spacing between two text blocks using the default blockSize (${DEFAULT_SPACER_BLOCK_SIZE}).`,
    jsx: (
      <>
        <Text>Text 1</Text>
        <Spacer />
        <Text>Text 2</Text>
      </>
    ),
  },
  {
    description: 'Vertical spacing between two text blocks using a larger spacing token (4xl).',
    jsx: (
      <>
        <Text>Text 1</Text>
        <Spacer blockSize="4xl" />
        <Text>Text 2</Text>
      </>
    ),
  },
  {
    description: 'Vertical spacing between two text blocks using an explicit CSS blockSize value.',
    jsx: (
      <>
        <Text>Text 1</Text>
        <Spacer blockSize="100px" />
        <Text>Text 2</Text>
      </>
    ),
  },
  {
    description: 'Responsive vertical spacing between two text blocks using spacing tokens.',
    jsx: (
      <>
        <Text>Text 1</Text>
        <Spacer blockSize={{ base: 'sm', md: 'xl' }} />
        <Text>Text 2</Text>
      </>
    ),
  },
]

export { SPACER_EXAMPLES_META }
