import { ResizeProps } from 'lib/index.core'
import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { RESIZE_PROPERTIES } from './definitions'
import { RESIZE_EXAMPLES } from './examples'
import { DEFAULT_RESIZE_DURATION, DEFAULT_RESIZE_EASING } from './resize'

export const RESIZE_META = {
  Resize: {
    overview: {
      bundle: 'core',
      title: 'Motion component for animating layout size.',
      description:
        'Resize animates layout-affecting expand and collapse motion by measuring content and transitioning block or inline size.',
      features: [
        'animates block or inline size using measured content dimensions',
        'supports expand and collapse motion for panels, accordions and content reveals',
        'keeps layout motion explicit without hard-coded sizes',
      ],
      composedOf: ['Box'],
      exposedTags: ['div'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
        description: 'Content animated.',
      },
      duration: {
        options: ['number'],
        defaultValue: String(DEFAULT_RESIZE_DURATION),
        description: 'Animation duration in milliseconds.',
      },
      easing: {
        options: [DOCS_CSS_LABEL],
        defaultValue: DEFAULT_RESIZE_EASING,
        description: 'Timing function for the animation.',
      },
      property: {
        options: RESIZE_PROPERTIES,
        isRequired: true,
        description: 'Property to animate (logical size only).',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      visible: {
        options: ['boolean'],
        isRequired: true,
        description: 'Toggles the visibility of the content.',
      },
    },
    examples: RESIZE_EXAMPLES,
    changelog: {
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<ResizeProps>,
}
