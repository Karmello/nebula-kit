import { ComponentMeta } from 'client/definitions'
import { DEFAULT_FADE_DURATION, DEFAULT_FADE_EASING, FadeProps } from 'lib/components/pro/Fade'

import { BOX_PROPS_META } from '../Box/props'

const FADE_PROPS_META: ComponentMeta<FadeProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_FADE_DURATION),
    description: 'Controls the fade transition duration in milliseconds.',
  },
  easing: {
    options: ['string'],
    defaultValue: DEFAULT_FADE_EASING,
    description: 'CSS timing function used for the fade transition animation.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  visible: {
    options: ['boolean'],
    isRequired: true,
    description: 'Controls whether the content is shown or hidden through the fade transition.',
  },
}

export { FADE_PROPS_META }
