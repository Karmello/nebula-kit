import { ComponentMeta } from 'client/definitions'
import { Spacer, SpacerProps, Text } from 'lib/components'
import { DEFAULT_SPACER_SIZE } from 'lib/components/core/layout/Spacer'

const SPACER_EXAMPLES_META: ComponentMeta<SpacerProps>['examples'] = [
  {
    description: `Vertical spacing between two text blocks using the default size (${DEFAULT_SPACER_SIZE}).`,
    jsx: (
      <>
        <Text>Text 1</Text>
        <Spacer />
        <Text>Text 2</Text>
      </>
    ),
  },
  {
    description: 'Vertical spacing between two text blocks using a larger predefined size (xxl).',
    jsx: (
      <>
        <Text>Text 1</Text>
        <Spacer size="xxl" />
        <Text>Text 2</Text>
      </>
    ),
  },
  {
    description: 'Vertical spacing between two text blocks using an explicit CSS value.',
    jsx: (
      <>
        <Text>Text 1</Text>
        <Spacer size="100px" />
        <Text>Text 2</Text>
      </>
    ),
  },
  {
    description: 'Responsive vertical spacing that increases on larger screens.',
    jsx: (
      <>
        <Text>Text 1</Text>
        <Spacer size={{ base: 'sm', md: 'xl' }} />
        <Text>Text 2</Text>
      </>
    ),
  },
]

export { SPACER_EXAMPLES_META }
