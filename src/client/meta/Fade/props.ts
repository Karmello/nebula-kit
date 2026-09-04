import { DEFAULT_FADE_DURATION, DEFAULT_FADE_EASING } from 'lib/components/pro/Fade/fade'
import { FadeProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const FADE_PROPS: Record<keyof FadeProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
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
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
  visible: {
    options: ['boolean'],
    isRequired: true,
    description: 'Controls whether the content is shown or hidden through the fade transition.',
  },
}
