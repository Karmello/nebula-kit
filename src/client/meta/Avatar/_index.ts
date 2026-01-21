import { AvatarProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

import { AVATAR_PROPS_META } from './props'
import { AVATAR_EXAMPLES_META } from './examples'

const AVATAR_META: ComponentMeta<AvatarProps> = {
  overview: {
    bundle: 'pro',
    title: 'User image component with consistent sizing, shape and fallback behavior.',
    features: [
      'fixed size scale with predictable dimensions',
      'round or square shape',
      'optional initials fallback when image is unavailable or fails to load',
      'built-in loading indicator with delay and minimum display time',
    ],
    composedOf: ['Box', 'Image', 'Text', 'Loader'],
    topLevelTags: ['div'],
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
