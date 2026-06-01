import { ComponentMeta } from 'client/definitions'

import { type RevealProps, DEFAULT_REVEAL_INTENT, DEFAULT_REVEAL_SIZE } from '../definitions'

import { BUTTON_PROPS_META } from '../../Button/meta/props'
import { BOX_PROPS_META } from '../../Box/meta/props'
import { RESIZE_PROPS_META } from '../../Resize/meta/props'

const REVEAL_PROPS_META: ComponentMeta<RevealProps>['props'] = {
  children: {
    ...RESIZE_PROPS_META.children,
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
  tag: BOX_PROPS_META.tag,
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
}

export { REVEAL_PROPS_META }
