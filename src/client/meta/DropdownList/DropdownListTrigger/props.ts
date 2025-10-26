import { ComponentMeta } from 'client/definitions'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { DropdownListTriggerProps } from 'lib/components'

const DROPDOWN_LIST_TRIGGER_PROPS_META: ComponentMeta<DropdownListTriggerProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['ReactNode'],
    isRequired: true,
    description: 'Component that triggers the list to show or hide.',
  },
}

export { DROPDOWN_LIST_TRIGGER_PROPS_META }
