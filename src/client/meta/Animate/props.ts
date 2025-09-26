import { ComponentMeta } from 'client/definitions'
import { AnimateProps } from 'lib/components'
import { AnimateProperty } from 'lib/components/utility/Animate/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const ANIMATE_PROPS_META: ComponentMeta<AnimateProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Content animated.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  property: {
    options: AnimateProperty as unknown as string[],
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
    defaultValue: '125',
    description: 'Animation duration in milliseconds.',
  },
}

export { ANIMATE_PROPS_META }
