import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { TableRowProps } from 'lib/components'

import { TABLE_PROPS_META } from '../props'

const TABLE_ROW_PROPS_META: ComponentMeta<TableRowProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Table.Cell', 'Table.HeaderCell'],
    isRequired: true,
    description: 'Cell slot.',
  },
  color: {
    ...BOX_PROPS_META.color,
    description: 'Color applied to every cell.',
  },
  intent: {
    ...BOX_PROPS_META.intent,
    description: 'Tone level applied to every cell.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  textAlign: TABLE_PROPS_META.textAlign,
}

export { TABLE_ROW_PROPS_META }
