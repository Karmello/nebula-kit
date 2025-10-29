import { ComponentMeta } from 'client/definitions'
import { ButtonLinkProps } from 'lib/components'

import {
  DEFAULT_BUTTON_LINK_INTENT,
  DEFAULT_BUTTON_LINK_TARGET,
  DEFAULT_BUTTON_LINK_VARIANT,
} from 'lib/components/controls/ButtonLink/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BUTTON_PROPS_META } from '../Button/props'

const BUTTON_LINK_PROPS_META: ComponentMeta<ButtonLinkProps>['props'] = {
  children: HTML_TAG_PROPS_META.children,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  variant: {
    ...BUTTON_PROPS_META.variant,
    defaultValue: String(DEFAULT_BUTTON_LINK_VARIANT),
  },
  intent: {
    ...BUTTON_PROPS_META.intent,
    defaultValue: String(DEFAULT_BUTTON_LINK_INTENT),
  },
  labelIntent: BUTTON_PROPS_META.labelIntent,
  size: BUTTON_PROPS_META.size,
  fullWidth: BUTTON_PROPS_META.fullWidth,
  iconName: BUTTON_PROPS_META.iconName,
  iconPosition: BUTTON_PROPS_META.iconPosition,
  href: {
    options: ['string'],
    isRequired: true,
    description: 'Destination URL.',
  },
  target: {
    options: ['_self', '_blank', '_parent', '_top'],
    defaultValue: DEFAULT_BUTTON_LINK_TARGET,
    description:
      'Specifies where to open the linked document, following the standard HTML target attribute behavior.',
  },
  onClick: {
    options: ['(e) => void'],
    description:
      'Callback fired when the component is clicked. Automatically prevents default navigation when provided.',
  },
}

export { BUTTON_LINK_PROPS_META }
