import { ComponentMeta } from 'client/definitions'
import { ResizeProps } from 'lib/components'
import {
  RESIZE_PROPERTIES,
  DEFAULT_RESIZE_DURATION,
  DEFAULT_RESIZE_EASING,
} from 'lib/components/core/motion/Resize/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const RESIZE_PROPS_META: ComponentMeta<ResizeProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Content animated.',
  },
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_RESIZE_DURATION),
    description: 'Animation duration in milliseconds.',
  },
  easing: {
    options: ['CSS'],
    defaultValue: DEFAULT_RESIZE_EASING,
    description: 'Timing function for the animation.',
  },
  property: {
    options: RESIZE_PROPERTIES as unknown as string[],
    isRequired: true,
    description: 'Property to animate.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  visible: {
    options: ['boolean'],
    isRequired: true,
    description: 'Toggles the visibility of the content.',
  },
}

export { RESIZE_PROPS_META }
