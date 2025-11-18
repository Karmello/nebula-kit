import { ComponentMeta } from 'client/definitions'
import { SlideProps } from 'lib/components/motion/Slide'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const SLIDE_PROPS_META: ComponentMeta<SlideProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Content animated.',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
}

export { SLIDE_PROPS_META }
