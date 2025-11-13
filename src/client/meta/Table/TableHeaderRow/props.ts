import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { TableHeaderRowProps } from 'lib/components'

const TABLE_HEADER_ROW_PROPS_META: ComponentMeta<TableHeaderRowProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Table.HeaderCell'],
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
}

export { TABLE_HEADER_ROW_PROPS_META }
