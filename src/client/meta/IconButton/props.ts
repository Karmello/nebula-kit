import { ComponentMeta } from 'client/definitions'
import { IconButtonProps } from 'lib/components'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BUTTON_PROPS_META } from '../Button/props'

const ICON_BUTTON_PROPS_META: ComponentMeta<IconButtonProps>['props'] = {
  tag: HTML_TAG_PROPS_META.tag,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  variant: BUTTON_PROPS_META.variant,
  intent: BUTTON_PROPS_META.intent,
  labelIntent: BUTTON_PROPS_META.labelIntent,
  size: BUTTON_PROPS_META.size,
  disabled: BUTTON_PROPS_META.disabled,
  iconName: {
    ...BUTTON_PROPS_META.iconName,
    isRequired: true,
  },
}

export { ICON_BUTTON_PROPS_META }
