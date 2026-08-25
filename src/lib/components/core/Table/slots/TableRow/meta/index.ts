import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../../../Box/meta'
import { TABLE_META } from '../../../meta'
import type { TableRowProps } from '../types'

export const TABLE_ROW_META = {
  overview: {
    bundle: 'core',
    name: 'Table.Row',
    title: 'Represents a single row within the table structure.',
    guidelines: [
      'should be placed inside Table.Body or Table.Footer to define individual data rows',
    ],
    composedOf: ['Box'],
    exposedTags: ['tr'],
    slots: ['Table.Cell', 'Table.HeaderCell'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      options: ['Table.Cell', 'Table.HeaderCell'],
      isRequired: true,
      description: 'Cell slot.',
    },
    color: {
      ...BOX_META.Box.props.color,
      description: 'Color applied to every cell.',
    },
    intent: {
      ...BOX_META.Box.props.intent,
      description: 'Color tone applied to every cell.',
    },
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
    textAlign: TABLE_META.props.textAlign,
  },
} satisfies ComponentMeta<TableRowProps>
