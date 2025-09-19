import { Spacer, Text } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_SPACER_BLOCK_SIZE,
  SPACER_INHERITED_PROPS,
} from 'lib/components/layout-base/Spacer/definitions'

const SPACER_META: ComponentMeta<any> = {
  overview: {
    description: 'Adds empty vertical space between elements to control layout spacing.',
    role: [
      'provides consistent vertical spacing between elements',
      'improves readability by preventing content from feeling crowded',
      'acts as a structural tool for rhythm in layouts',
    ],
    behavior: ['renders as a <div> element'],
    byDefault: [`uses the blockSize of ${DEFAULT_SPACER_BLOCK_SIZE}`],
    examplesOfUse: [
      'separating paragraphs of text in a content block',
      'adding breathing room between form fields',
    ],
    composedOf: SPACER_INHERITED_PROPS,
  },
  examples: [
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
  ],
}

export default {
  Spacer: SPACER_META,
}
