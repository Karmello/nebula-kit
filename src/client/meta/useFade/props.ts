import {
  DEFAULT_USE_FADE_DURATION,
  DEFAULT_USE_FADE_EASING,
} from 'lib/components/pro/useFade/use-fade'
import { UseFadeArgs } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

export const USE_FADE_PROPS: Record<keyof UseFadeArgs, DocProp> = {
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_USE_FADE_DURATION),
    description: 'Controls the fade transition duration in milliseconds.',
  },
  easing: {
    options: ['string'],
    defaultValue: DEFAULT_USE_FADE_EASING,
    description: 'CSS timing function used for the fade transition animation.',
  },
  tagRef: {
    options: ['RefObject'],
    isRequired: true,
    description: 'Ref to the DOM element to fade.',
  },
  visible: {
    options: ['boolean'],
    isRequired: true,
    description: 'Controls whether the content is shown or hidden through the fade transition.',
  },
}
