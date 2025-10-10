import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { TableFooterProps } from 'lib/components'

const TABLE_FOOTER_PROPS_META: ComponentMeta<TableFooterProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Table.Row'],
    isRequired: true,
    description: 'Row slot.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  intent: {
    ...BOX_PROPS_META.intent,
    description: 'Semantic color intent applied to every cell.',
  },
}

export { TABLE_FOOTER_PROPS_META }
