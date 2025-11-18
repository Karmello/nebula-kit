import { ComponentMeta } from 'client/definitions'
import { ResizeProps } from 'lib/components'
import { RESIZE_PROPERTIES, DEFAULT_RESIZE_DURATION } from 'lib/components/motion/Resize/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const RESIZE_PROPS_META: ComponentMeta<ResizeProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Content animated.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  property: {
    options: RESIZE_PROPERTIES as unknown as string[],
    isRequired: true,
    description: 'Property to animate.',
  },
  visible: {
    options: ['boolean'],
    isRequired: true,
    description: 'Toggles the visibility of the content.',
  },
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_RESIZE_DURATION),
    description: 'Animation duration in milliseconds.',
  },
}

export { RESIZE_PROPS_META }
