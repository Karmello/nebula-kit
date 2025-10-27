import { ComponentMeta } from 'client/definitions'
import { SelectProps } from 'lib/components'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'
import { BUTTON_PROPS_META } from '../Button/props'

const SELECT_PROPS_META: ComponentMeta<SelectProps>['props'] = {
  tagRef: HTML_TAG_PROPS_META.tagRef,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  inlineSize: BOX_PROPS_META.inlineSize,
  variant: BUTTON_PROPS_META.variant,
  intent: BUTTON_PROPS_META.intent,
  size: BUTTON_PROPS_META.size,
  options: {
    options: ['{ value: string; label: string }[]'],
    isRequired: true,
  },
  value: {
    options: ['string'],
    isRequired: true,
  },
  onChange: {
    options: ['(value: string) => void'],
    isRequired: true,
  },
}

export { SELECT_PROPS_META }
