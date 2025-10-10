import { ComponentMeta } from 'client/definitions'
import { BreadcrumbProps } from 'lib/components'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const BREADCRUMB_PROPS_META: ComponentMeta<BreadcrumbProps>['props'] = {
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  items: {
    options: ['string[]'],
    isRequired: true,
    description: 'Defines the breadcrumb path as an array of item labels.',
  },
}

export { BREADCRUMB_PROPS_META }
