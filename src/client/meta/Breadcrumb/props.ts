import { ComponentMeta } from 'client/definitions'
import { BreadcrumbProps } from 'lib/components'

import { BREADCRUMB_TAGS, DEFAULT_BREADCRUMB_INTENT, DEFAULT_BREADCRUMB_SIZE } from 'lib/components/pro/navigation/Breadcrumb'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { DROPDOWN_LIST_PROPS_META } from '../DropdownList/props'

const BREADCRUMB_PROPS_META: ComponentMeta<BreadcrumbProps>['props'] = {
  color: DROPDOWN_LIST_PROPS_META.color,
  defaultPath: {
    options: ['string[]'],
    description: 'Initial breadcrumb path applied once to seed internal state when the component is uncontrolled.',
  },
  intent: {
    ...DROPDOWN_LIST_PROPS_META.intent,
    defaultValue: String(DEFAULT_BREADCRUMB_INTENT),
    description: 'Color tone applied to the list.',
  },
  onChange: {
    options: ['(path: string[]) => void'],
    description: 'Called when the user selects a value, receiving the updated breadcrumb path.',
  },
  path: {
    options: ['string[]'],
    description: 'Controls the active breadcrumb path, enabling fully controlled behavior.',
  },
  size: {
    ...DROPDOWN_LIST_PROPS_META.size,
    defaultValue: DEFAULT_BREADCRUMB_SIZE,
  },
  tag: {
    ...HTML_TAG_PROPS_META.tag,
    options: BREADCRUMB_TAGS as never,
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  tree: {
    options: ['object[]'],
    isRequired: true,
    description: 'Hierarchical data source that defines the breadcrumb structure and available selections.',
  },
}

export { BREADCRUMB_PROPS_META }
