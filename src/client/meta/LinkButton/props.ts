import { ComponentMeta } from 'client/definitions'
import { LinkButtonProps } from 'lib/components'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BUTTON_PROPS_META } from '../Button/props'
import {
  DEFAULT_LINK_BUTTON_INTENT,
  DEFAULT_LINK_BUTTON_LABEL_INTENT,
  DEFAULT_LINK_BUTTON_TARGET,
  DEFAULT_LINK_BUTTON_VARIANT,
} from 'lib/components/controls/LinkButton/definitions'

const LINK_BUTTON_PROPS_META: ComponentMeta<LinkButtonProps>['props'] = {
  children: HTML_TAG_PROPS_META.children,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  variant: {
    ...BUTTON_PROPS_META.variant,
    defaultValue: String(DEFAULT_LINK_BUTTON_VARIANT),
  },
  intent: {
    ...BUTTON_PROPS_META.intent,
    defaultValue: String(DEFAULT_LINK_BUTTON_INTENT),
  },
  labelIntent: {
    ...BUTTON_PROPS_META.labelIntent,
    defaultValue: String(DEFAULT_LINK_BUTTON_LABEL_INTENT),
  },
  size: BUTTON_PROPS_META.size,
  iconName: BUTTON_PROPS_META.iconName,
  href: {
    options: ['string'],
  },
  target: {
    options: ['_self', '_blank', '_parent', '_top'],
    defaultValue: DEFAULT_LINK_BUTTON_TARGET,
  },
  onClick: {
    options: ['(e) => void'],
  },
}

export { LINK_BUTTON_PROPS_META }
