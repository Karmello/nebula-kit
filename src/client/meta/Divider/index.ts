import {
  DEFAULT_DIVIDER_INTENT,
  DEFAULT_DIVIDER_MARGIN_BLOCK,
} from 'lib/components/core/Divider/constants'
import { DividerProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { DIVIDER_CHANGELOG } from './changelog'
import { DIVIDER_EXAMPLES } from './examples'

export const DIVIDER_META = {
  overview: {
    bundle: 'core',
    title: 'Boundary marker between content sections.',
    features: [
      'creates clear visual separation to reduce scanning effort',
      'marks a thematic break between related blocks of content',
    ],
    composedOf: ['Box'],
    exposedTags: ['hr'],
  },
  props: {
    color: BOX_META.props.color,
    elevated: BOX_META.props.elevated,
    intent: {
      ...BOX_META.props.intent,
      defaultValue: String(DEFAULT_DIVIDER_INTENT),
    },
    marginBlock: {
      ...BOX_META.props.marginBlock,
      defaultValue: String(DEFAULT_DIVIDER_MARGIN_BLOCK),
    },
    marginBottom: BOX_META.props.marginBottom,
    marginTop: BOX_META.props.marginTop,
    tagAttrs: BOX_META.props.tagAttrs,
    tagRef: BOX_META.props.tagRef,
  },
  examples: DIVIDER_EXAMPLES,
  changelog: DIVIDER_CHANGELOG,
} satisfies ComponentMeta<DividerProps>
