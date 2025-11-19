import { ComponentMeta } from 'client/definitions'
import { SlideProps } from 'lib/components/motion/Slide'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { DEFAULT_SLIDE_DURATION, SLIDE_DIRECTIONS } from 'lib/components/motion/Slide/definitions'

const SLIDE_PROPS_META: ComponentMeta<SlideProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Content animated.',
  },
  direction: {
    options: SLIDE_DIRECTIONS as never,
    isRequired: true,
    description: 'Defines which way the element slides.',
  },
  duration: {
    options: ['number'],
    defaultValue: String(DEFAULT_SLIDE_DURATION),
    description: 'Animation duration in milliseconds.',
  },
  easing: {
    options: ['CSS'],
    description: 'CSS easing function for the slide transition.',
  },
  offset: {
    options: ['CSS'],
    description: 'Distance the element starts from and returns to. Controls how strong the slide feels.',
  },
  onExitComplete: {
    options: ['() => void'],
    description: 'Called after the exit animation finishes (before unmount).',
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  visible: {
    options: ['boolean'],
    isRequired: true,
    description: 'Controls whether the element is entering or exiting.',
  },
}

export { SLIDE_PROPS_META }
