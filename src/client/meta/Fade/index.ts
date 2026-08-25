import { DEFAULT_FADE_DURATION, DEFAULT_FADE_EASING } from 'lib/components/pro/Fade/fade'
import { FadeProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box'
import { FADE_CHANGELOG } from './changelog'
import { FADE_EXAMPLES } from './examples'

export const FADE_META = {
  overview: {
    bundle: 'pro',
    title: 'Motion component for animating opacity transitions.',
    description:
      'Fade applies opacity-based motion that smoothly transitions content between visible and hidden states. It is intended for lightweight visual transitions such as overlays, tooltips, floating UI and subtle content reveals.',
    features: [
      'animates visibility using opacity transitions',
      'performs visual-only motion without affecting layout',
      'coordinates enter and exit visibility states',
      'works well for overlays, tooltips, popovers and transient UI',
    ],
    composedOf: ['Box'],
    exposedTags: ['span'],
  },
  props: {
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
  },
  examples: FADE_EXAMPLES,
  changelog: FADE_CHANGELOG,
} satisfies ComponentMeta<FadeProps>
