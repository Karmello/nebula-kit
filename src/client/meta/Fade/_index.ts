import { ComponentMeta } from 'client/definitions'
import { FadeProps } from 'lib/components'

import { FADE_PROPS_META } from './props'
import { FADE_EXAMPLES_META } from './examples'

const FADE_META: ComponentMeta<FadeProps> = {
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
    topLevelTags: ['span'],
  },
  props: FADE_PROPS_META,
  examples: FADE_EXAMPLES_META,
  changelog: {
    '0.11.0': ['released'],
  },
}

export default {
  Fade: FADE_META,
}
