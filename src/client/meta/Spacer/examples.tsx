import { ComponentMeta } from 'client/definitions'
import { Spacer, SpacerProps, Text } from 'lib/components'

const SPACER_EXAMPLES_META: ComponentMeta<SpacerProps>['examples'] = [
  {
    description: 'Vertical spacing between two text blocks.',
    jsx: (
      <>
        <Text intent="neutral">Text 1</Text>
        <Spacer blockSize={50} />
        <Text intent="neutral">Text 2</Text>
      </>
    ),
  },
]

export { SPACER_EXAMPLES_META }
