import { DEFAULT_TABLE_CAPTION_INTENT } from 'lib/components/core/Table/slots/TableCaption/constants'
import type { TableCaptionProps } from 'lib/components/core/Table/slots/TableCaption/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'

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
      ...BOX_META.props.children,
      isRequired: true,
    },
    color: BOX_META.props.color,
    intent: {
      ...BOX_META.props.intent,
      defaultValue: String(DEFAULT_TABLE_CAPTION_INTENT),
    },
    paddingBlock: BOX_META.props.paddingBlock,
    paddingInline: BOX_META.props.paddingInline,
    tagAttrs: BOX_META.props.tagAttrs,
    tagRef: BOX_META.props.tagRef,
    textAlign: BOX_META.props.textAlign,
  },
} satisfies ComponentMeta<TableCaptionProps>
