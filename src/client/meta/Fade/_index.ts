import { ComponentMeta } from 'client/definitions'
import { FadeProps } from 'lib/components'

import { FADE_PROPS_META } from './props'
import { FADE_EXAMPLES_META } from './examples'

const FADE_META: ComponentMeta<FadeProps> = {
  overview: {
    bundle: 'pro',
    title: '...',
    features: ['...'],
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
