import { DEFAULT_SPACER_BLOCK_SIZE } from 'lib/components/core/Spacer/constants'
import { SpacerProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { SPACER_CHANGELOG } from './changelog'
import { SPACER_EXAMPLES } from './examples'

export const SPACER_META = {
  overview: {
    bundle: 'core',
    title: 'Layout component that introduces controlled empty space between elements.',
    features: [
      'enables consistent vertical spacing across layouts',
      'supports predefined spacing scale and custom CSS values',
      'supports responsive spacing for adaptive layouts',
    ],
    composedOf: ['Box'],
    exposedTags: ['div'],
  },
  props: {
    blockSize: {
      ...BOX_META.props.blockSize,
      defaultValue: String(DEFAULT_SPACER_BLOCK_SIZE),
      description: 'Controls the spacer vertical size.',
    },
    tagAttrs: BOX_META.props.tagAttrs,
    tagRef: BOX_META.props.tagRef,
  },
  examples: SPACER_EXAMPLES,
  changelog: SPACER_CHANGELOG,
} satisfies ComponentMeta<SpacerProps>
