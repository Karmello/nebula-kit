import { ComponentMeta } from 'client/definitions'
import { RevealProps } from 'lib/components'
import { DEFAULT_REVEAL_INTENT, DEFAULT_REVEAL_SIZE } from 'lib/components/containers/Reveal/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BUTTON_PROPS_META } from '../Button/props'
import { BOX_PROPS_META } from '../Box/props'

const REVEAL_PROPS_META: ComponentMeta<RevealProps>['props'] = {
  tag: HTML_TAG_PROPS_META.tag,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  size: {
    ...BUTTON_PROPS_META.size,
    defaultValue: DEFAULT_REVEAL_SIZE,
    description: 'Size of the reveal button.',
  },
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
  labelIntent: BUTTON_PROPS_META.labelIntent,
}

export { REVEAL_PROPS_META }
