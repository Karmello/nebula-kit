import { ComponentMeta } from 'client/definitions'
import { RotateProps } from 'lib/components/motion/Rotate/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const ROTATE_PROPS_META: ComponentMeta<RotateProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Content being rotated.',
  },
  tagRef: HTML_TAG_PROPS_META.tagRef,
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  angle: {
    options: ['number'],
    isRequired: true,
    description: 'Defines the rotation angle of the content, animating when the value changes.',
  },
}

export { ROTATE_PROPS_META }
