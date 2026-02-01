import { ComponentMeta } from 'client/definitions'
import { LinkProps } from 'lib/components'
import { DEFAULT_LINK_TARGET, LINK_TARGETS } from 'lib/components/core/controls/Link'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const LINK_PROPS_META: ComponentMeta<LinkProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Single child component to be wrapped.',
  },
  href: {
    options: ['string'],
    isRequired: true,
    description: 'Destination URL.',
  },
  target: {
    options: LINK_TARGETS,
    defaultValue: DEFAULT_LINK_TARGET,
    description:
      'Specifies where to open the linked document, following the standard HTML target attribute behavior.',
    tooltip: LINK_TARGETS,
  },
  onClick: {
    options: ['event => void'],
    description:
      'Callback fired when the component is clicked. Automatically prevents default navigation when provided.',
  },
}

export { LINK_PROPS_META }
