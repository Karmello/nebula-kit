import { DEFAULT_TABLE_FOOTER_INTENT } from 'lib/components/core/Table/slots/TableFooter/constants'
import type { TableFooterProps } from 'lib/components/core/Table/slots/TableFooter/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { TABLE_META } from '../Table'

export const TABLE_FOOTER_META = {
  overview: {
    bundle: 'core',
    name: 'Table.Footer?',
    title: 'Summary or footer rows of the table.',
    guidelines: ['expects Table.Row as children'],
    composedOf: ['Box'],
    exposedTags: ['tfoot'],
    slots: ['Table.Row'],
  },
  props: {
    children: {
      ...BOX_META.props.children,
      options: ['Table.Row'],
      isRequired: true,
      description: 'Row slot.',
    },
    color: {
      ...BOX_META.props.color,
      description: 'Color applied to every cell.',
    },
    intent: {
      ...BOX_META.props.intent,
      defaultValue: String(DEFAULT_TABLE_FOOTER_INTENT),
      description: 'Color tone applied to every cell.',
    },
    paddingBlock: {
      ...BOX_META.props.paddingBlock,
      description: 'Padding for the top and bottom sides applied to every cell.',
    },
    paddingInline: {
      ...BOX_META.props.paddingInline,
      description: 'Padding for the left and right sides applied to every cell.',
    },
    tagAttrs: BOX_META.props.tagAttrs,
    tagRef: BOX_META.props.tagRef,
    textAlign: TABLE_META.props.textAlign,
  },
} satisfies ComponentMeta<TableFooterProps>
