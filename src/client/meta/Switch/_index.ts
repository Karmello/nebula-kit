import { SwitchProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { SWITCH_PROPS_META } from './props'
import { SWITCH_EXAMPLES_META } from './examples'

const SWITCH_META: ComponentMeta<SwitchProps> = {
  overview: {
    bundle: 'pro',
    title: '...',
    description: '...',
    features: ['...'],
  },
  props: SWITCH_PROPS_META,
  examples: SWITCH_EXAMPLES_META,
  changelog: {
    '0.4.0': ['released'],
  },
}

export default {
  Switch: SWITCH_META,
}
