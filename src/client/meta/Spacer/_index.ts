import { ComponentMeta } from 'client/definitions'
import { DEFAULT_SPACER_BLOCK_SIZE, SpacerProps } from 'lib/components/layout-base/Spacer/definitions'

import { SPACER_EXAMPLES_META } from './examples'

const SPACER_META: ComponentMeta<SpacerProps> = {
  overview: {
    title: 'A layout component that introduces controlled empty space between elements.',
    role: [
      'provides consistent vertical spacing between elements',
      'improves readability by preventing content from feeling crowded',
      'acts as a structural tool for rhythm in layouts',
      'renders as a <div> element',
      `uses the blockSize of ${DEFAULT_SPACER_BLOCK_SIZE}`,
      'separating paragraphs of text in a content block',
      'adding breathing room between form fields',
    ],
    composedOf: ['Box'],
  },
  examples: SPACER_EXAMPLES_META,
}

export default {
  Spacer: SPACER_META,
}
