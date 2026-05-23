import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'
import { DEFAULT_ROTATE_DURATION, DEFAULT_ROTATE_EASING, RotateProps } from 'lib/components/core/Rotate'
import { BOX_PROPS_META } from '../Box/props'

const ROTATE_PROPS_META: ComponentMeta<RotateProps>['props'] = {
  angle: {
    options: ['number'],
    isRequired: true,
    description: 'Rotation angle of the content in degrees. Changing the value triggers a rotation animation.',
  },
  children: {
    ...BOX_PROPS_META.children,
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
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
}

export { ROTATE_PROPS_META }
