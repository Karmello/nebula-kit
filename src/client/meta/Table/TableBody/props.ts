import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { TableBodyProps } from 'lib/components'
import { DEFAULT_TABLE_BODY_INTENT } from 'lib/components/core/Table/slots/TableBody/definitions'

import { TABLE_PROPS_META } from '../props'

const TABLE_BODY_PROPS_META: ComponentMeta<TableBodyProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Table.Row'],
    isRequired: true,
    description: 'Row slot.',
  },
  color: {
    ...BOX_PROPS_META.color,
    description: 'Color applied to every cell.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: DEFAULT_TABLE_BODY_INTENT as never,
    description: 'Color tone applied to every cell.',
  },
  paddingBlock: {
    ...BOX_PROPS_META.paddingBlock,
    description: 'Padding for the top and bottom sides applied to every cell.',
  },
  paddingInline: {
    ...BOX_PROPS_META.paddingInline,
    description: 'Padding for the left and right sides applied to every cell.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  textAlign: TABLE_PROPS_META.textAlign,
}

export { TABLE_BODY_PROPS_META }
