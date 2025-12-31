import { ComponentMeta } from 'client/definitions'
import { BreadcrumbProps } from 'lib/components'
import { BREADCRUMB_TAGS } from 'lib/components/pro/navigation/Breadcrumb'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const BREADCRUMB_PROPS_META: ComponentMeta<BreadcrumbProps>['props'] = {
  defaultPath: {
    options: ['string[]'],
    description:
      'Initial breadcrumb path applied once to seed internal state when the component is uncontrolled.',
  },
  onChange: {
    options: ['(path: string[]) => void'],
    description: 'Called when the user selects a value, receiving the updated breadcrumb path.',
  },
  path: {
    options: ['string[]'],
    description: 'Controls the active breadcrumb path, enabling fully controlled behavior.',
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
