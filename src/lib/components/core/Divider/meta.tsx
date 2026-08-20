import { DividerProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { DEFAULT_DIVIDER_INTENT, DEFAULT_DIVIDER_MARGIN_BLOCK } from './definitions'
import { DIVIDER_EXAMPLES } from './examples'

export const DIVIDER_META = {
  Divider: {
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
      color: BOX_META.Box.props.color,
      elevated: BOX_META.Box.props.elevated,
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_DIVIDER_INTENT),
      },
      marginBlock: {
        ...BOX_META.Box.props.marginBlock,
        defaultValue: String(DEFAULT_DIVIDER_MARGIN_BLOCK),
      },
      marginBottom: BOX_META.Box.props.marginBottom,
      marginTop: BOX_META.Box.props.marginTop,
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: DIVIDER_EXAMPLES,
    changelog: {
      '0.11.0': ['removed `surface` prop'],
      '0.9.0': [
        'added support for predefined size scale values on margin-related props',
        'removed `opacity` prop',
        'exposed `surface` prop via Box',
      ],
      '0.8.0': ['changed `elevated` prop to `surface`'],
      '0.7.0': ['exposed `elevated` prop via Box'],
      '0.6.0': ['exposed `opacity` prop via Box'],
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<DividerProps>,
}
