import { AvatarProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { AVATAR_PROPS_META } from './props'
import { AVATAR_EXAMPLES_META } from './examples'

const AVATAR_META: ComponentMeta<AvatarProps> = {
  overview: {
    bundle: 'pro',
    title: '...',
    features: ['...'],
  },
  props: AVATAR_PROPS_META,
  examples: AVATAR_EXAMPLES_META,
  changelog: {
    '0.4.0': ['released'],
  },
}

export default {
  Avatar: AVATAR_META,
}
