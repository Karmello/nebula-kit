import { ComponentMeta } from 'client/definitions'
import {
  DEFAULT_ROTATE_DURATION,
  DEFAULT_ROTATE_EASING,
  RotateProps,
} from 'lib/components/motion/Rotate/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const ROTATE_PROPS_META: ComponentMeta<RotateProps>['props'] = {
  angle: {
    options: ['number'],
    isRequired: true,
    description: 'Defines the rotation angle of the content, animating when the value changes.',
  },
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Content being rotated.',
  },
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_ROTATE_DURATION),
    description: 'Animation duration in milliseconds.',
  },
  easing: {
    options: ['CSS'],
    defaultValue: DEFAULT_ROTATE_EASING,
    description: 'Timing function for the animation.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { ROTATE_PROPS_META }
