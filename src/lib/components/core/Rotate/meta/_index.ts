import { ComponentMeta } from 'client/definitions'

import { type RotateProps } from '../definitions'
import { ROTATE_PROPS_META } from './props'
import { ROTATE_EXAMPLES_META } from './examples'

const ROTATE_META: ComponentMeta<RotateProps> = {
  overview: {
    bundle: 'core',
    title: 'Motion component for animating rotation.',
    description:
      'Rotate applies transform-based rotation motion by animating changes to the provided angle value. It is intended for lightweight visual motion such as icons, indicators and directional state changes.',
    features: [
      'animates rotation using CSS transforms',
      'reacts to angle changes with smooth visual motion',
      'uses transform-based animation without affecting layou',
      'works well for icons, toggles and directional indicators',
    ],
    composedOf: ['Box'],
    topLevelTags: ['span'],
  },
  props: ROTATE_PROPS_META,
  examples: ROTATE_EXAMPLES_META,
  changelog: {
    '0.2.3': ['released'],
  },
}

export default {
  Rotate: ROTATE_META,
}
