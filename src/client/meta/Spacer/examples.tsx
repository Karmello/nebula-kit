import { ComponentMeta } from 'client/definitions'
import { Spacer, Text } from 'lib/components'

export default [
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
] as ComponentMeta<any>['examples']
