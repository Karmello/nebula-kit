import { ComponentMeta } from 'client/definitions'
import { RevealProps } from 'lib/components'
import { DEFAULT_REVEAL_INTENT, DEFAULT_REVEAL_SIZE } from 'lib/components/core/Reveal'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BUTTON_PROPS_META } from '../Button/props'
import { BOX_PROPS_META } from '../Box/props'

const REVEAL_PROPS_META: ComponentMeta<RevealProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  color: BUTTON_PROPS_META.color,
  disabled: BUTTON_PROPS_META.disabled,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_REVEAL_INTENT),
  },
  label: {
    options: ['string'],
    isRequired: true,
    description: 'Text displayed on the reveal button.',
  },
  size: {
    ...BUTTON_PROPS_META.size,
    defaultValue: DEFAULT_REVEAL_SIZE,
    description: 'Size of the reveal button.',
  },
  tag: HTML_TAG_PROPS_META.tag,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { REVEAL_PROPS_META }
