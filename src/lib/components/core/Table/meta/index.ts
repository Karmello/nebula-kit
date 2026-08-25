import { TableProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../Box/meta'
import {
  DEFAULT_TABLE_INTENT,
  DEFAULT_TABLE_LAYOUT,
  DEFAULT_TABLE_PADDING_BLOCK,
  DEFAULT_TABLE_PADDING_INLINE,
  TABLE_LAYOUTS,
} from '../constants'
import { TABLE_CHANGELOG } from './changelog'
import { TABLE_EXAMPLES } from './examples'

export const TABLE_META = {
  overview: {
    bundle: 'core',
    title:
      'Layout component built on the HTML table element, providing a semantic structure for displaying data in rows and columns.',
    features: [
      'provides a semantic table-based layout wrapper',
      'organizes content into rows and columns with header, body and footer sections',
      'supports alignment and sizing of cells for structured data presentation',
      'always renders with square corners and does not inherit the global border radius',
    ],
    composedOf: ['Box'],
    exposedTags: ['table'],
    slots: ['Table.Body', 'Table.Header', 'Table.Footer', 'Table.Caption'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      options: ['Table.Body', 'Table.Header', 'Table.Footer', 'Table.Caption'],
      isRequired: true,
      description: 'Table.Body is required, the rest optional.',
    },
    color: {
      ...BOX_META.Box.props.color,
      description: "Color applied to the table's background surface.",
    },
    inlineSize: BOX_META.Box.props.inlineSize,
    intent: {
      ...BOX_META.Box.props.intent,
      defaultValue: String(DEFAULT_TABLE_INTENT),
      description: "Color tone applied to the table's background surface.",
    },
    layout: {
      options: TABLE_LAYOUTS,
      defaultValue: DEFAULT_TABLE_LAYOUT,
      description:
        'Defines the layout algorithm: "auto" sizes columns by content, "fixed" by table width and column widths.',
    },
    maxInlineSize: BOX_META.Box.props.maxInlineSize,
    minInlineSize: BOX_META.Box.props.minInlineSize,
    paddingBlock: {
      ...BOX_META.Box.props.paddingBlock,
      defaultValue: DEFAULT_TABLE_PADDING_BLOCK as never,
      description: 'Padding for the top and bottom sides applied to every cell.',
    },
    paddingInline: {
      ...BOX_META.Box.props.paddingInline,
      defaultValue: DEFAULT_TABLE_PADDING_INLINE as never,
      description: 'Padding for the left and right sides applied to every cell.',
    },
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
    textAlign: {
      ...BOX_META.Box.props.textAlign,
      description: 'Text alignment applied to every cell.',
    },
  },
  examples: TABLE_EXAMPLES,
  changelog: TABLE_CHANGELOG,
} satisfies ComponentMeta<TableProps>
