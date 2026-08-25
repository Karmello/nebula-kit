import type { TableHeaderProps } from 'lib/components/core/Table/slots/TableHeader/types'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { TABLE_META } from '../Table'

export const TABLE_HEADER_META = {
  overview: {
    bundle: 'core',
    name: 'Table.Header?',
    title: 'Column headers of the table.',
    guidelines: ['expects Table.HeaderRow as children'],
    composedOf: ['Box'],
    exposedTags: ['thead'],
    slots: ['Table.HeaderRow'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      options: ['Table.HeaderRow'],
      isRequired: true,
      description: 'Row slot.',
    },
    color: {
      ...BOX_META.Box.props.color,
      description: 'Color applied to every cell.',
    },
    intent: {
      ...BOX_META.Box.props.intent,
      description: 'Color tone applied to every cell.',
    },
    paddingBlock: {
      ...BOX_META.Box.props.paddingBlock,
      description: 'Padding for the top and bottom sides applied to every cell.',
    },
    paddingInline: {
      ...BOX_META.Box.props.paddingInline,
      description: 'Padding for the left and right sides applied to every cell.',
    },
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
    textAlign: TABLE_META.props.textAlign,
  },
} satisfies ComponentMeta<TableHeaderProps>
