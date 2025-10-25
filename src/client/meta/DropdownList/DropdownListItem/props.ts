import { ComponentMeta } from 'client/definitions'
import { DropdownListItemProps } from 'lib/components'

import { HTML_TAG_PROPS_META } from '../../HtmlTag/props'

const DROPDOWN_LIST_PROPS_META: ComponentMeta<DropdownListItemProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
}

export { DROPDOWN_LIST_PROPS_META }
