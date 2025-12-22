import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { TableHeaderProps } from 'lib/components'

import { TABLE_PROPS_META } from '../props'

const TABLE_HEADER_PROPS_META: ComponentMeta<TableHeaderProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Table.HeaderRow'],
    isRequired: true,
    description: 'Row slot.',
  },
  color: {
    ...BOX_PROPS_META.color,
    description: 'Color applied to every cell.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    description: 'Tone level applied to every cell.',
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

export { TABLE_HEADER_PROPS_META }
