import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_SPACER_BLOCK_SIZE,
  SPACER_INHERITED_PROPS,
} from 'lib/components/layout-base/Spacer/definitions'

import examples from './examples'

const SPACER_META: ComponentMeta<any> = {
  overview: {
    description: 'A layout component that introduces controlled empty space between elements.',
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
  examples,
}

export default {
  Spacer: SPACER_META,
}
