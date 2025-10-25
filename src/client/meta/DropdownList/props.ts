import { ComponentMeta } from 'client/definitions'
import { DropdownListProps } from 'lib/components'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const DROPDOWN_LIST_PROPS_META: ComponentMeta<DropdownListProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['DropdownList.Item'],
    isRequired: true,
    description: 'Item slots rendered.',
  },
  tagRef: HTML_TAG_PROPS_META.tagRef,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
}

export { DROPDOWN_LIST_PROPS_META }
