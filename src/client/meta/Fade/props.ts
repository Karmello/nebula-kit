import { DEFAULT_FADE_DURATION, DEFAULT_FADE_EASING } from 'lib/components/pro/Fade/fade'
import { FadeProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const FADE_PROPS: Record<keyof FadeProps, DocProp> = {
  children: {
    ...BOX_META.props.children,
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
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
  visible: {
    options: ['boolean'],
    isRequired: true,
    description: 'Controls whether the content is shown or hidden through the fade transition.',
  },
}
