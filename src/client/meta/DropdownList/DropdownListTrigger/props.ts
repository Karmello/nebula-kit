import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { DropdownListTriggerProps } from 'lib/components'

const DROPDOWN_LIST_TRIGGER_PROPS_META: ComponentMeta<DropdownListTriggerProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['ReactNode'],
    isRequired: true,
    description: 'Component that toggles the visibility of the list.',
  },
  inlineSize: BOX_PROPS_META.inlineSize,
}

export { DROPDOWN_LIST_TRIGGER_PROPS_META }
