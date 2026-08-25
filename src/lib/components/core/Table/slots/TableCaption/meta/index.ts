import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../../../Box/meta'
import { DEFAULT_TABLE_CAPTION_INTENT } from '../constants'
import type { TableCaptionProps } from '../types'

export const TABLE_CAPTION_META = {
  overview: {
    bundle: 'core',
    name: 'Table.Caption?',
    title: 'Provides a descriptive title for the table.',
    features: ['gets rendered at the top of the table as a descriptive title'],
    composedOf: ['Box'],
    exposedTags: ['caption'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      isRequired: true,
    },
    color: BOX_META.Box.props.color,
    intent: {
      ...BOX_META.Box.props.intent,
      defaultValue: String(DEFAULT_TABLE_CAPTION_INTENT),
    },
    paddingBlock: BOX_META.Box.props.paddingBlock,
    paddingInline: BOX_META.Box.props.paddingInline,
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
    textAlign: BOX_META.Box.props.textAlign,
  },
} satisfies ComponentMeta<TableCaptionProps>
