import { ComponentMeta } from 'client/definitions'
import { Spacer, Text } from 'lib/components'

const SPACER_EXAMPLES_META: ComponentMeta<any>['examples'] = [
  {
    description: 'Inserts vertical spacing of scale 10 between two text blocks.',
    jsx: (
      <>
        <Text>Text 1</Text>
        <Spacer blockSize={10} />
        <Text>Text 2</Text>
      </>
    ),
  },
]

export { SPACER_EXAMPLES_META }
