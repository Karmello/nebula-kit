import { RotateProps } from 'lib/index.core'
import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { ROTATE_EXAMPLES } from './examples'
import { DEFAULT_ROTATE_DURATION, DEFAULT_ROTATE_EASING } from './rotate'

export const ROTATE_META = {
  Rotate: {
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
      exposedTags: ['span'],
    },
    props: {
      angle: {
        options: ['number'],
        isRequired: true,
        description: 'Rotation angle of the content in degrees. Changing the value triggers a rotation animation.',
      },
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
        description: 'Content being rotated.',
      },
      duration: {
        options: ['number'],
        defaultValue: String(DEFAULT_ROTATE_DURATION),
        description: 'Animation duration in milliseconds.',
      },
      easing: {
        options: [DOCS_CSS_LABEL],
        defaultValue: DEFAULT_ROTATE_EASING,
        description: 'Timing function for the animation.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: ROTATE_EXAMPLES,
    changelog: {
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<RotateProps>,
}
