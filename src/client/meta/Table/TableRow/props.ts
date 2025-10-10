import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { TableRowProps } from 'lib/components'

const TABLE_ROW_PROPS_META: ComponentMeta<TableRowProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Table.Cell', 'Table.HeaderCell'],
    isRequired: true,
    description: 'Cell slot.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  intent: {
    ...BOX_PROPS_META.intent,
    description: 'Semantic color intent applied to every cell.',
  },
}

export { TABLE_ROW_PROPS_META }
