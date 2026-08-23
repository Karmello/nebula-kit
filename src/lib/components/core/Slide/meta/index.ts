import { SlideProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../Box/meta'
import { SLIDE_FROM } from '../constants'
import { DEFAULT_SLIDE_DURATION, DEFAULT_SLIDE_EASING } from '../slide'
import { SLIDE_CHANGELOG } from './changelog'
import { SLIDE_EXAMPLES } from './examples'

export const SLIDE_META = {
  Slide: {
    overview: {
      bundle: 'core',
      title: 'Motion component for animating directional slide transitions.',
      description:
        'Slide applies transform-based motion that moves content into and out of view from a chosen direction. It is intended for lightweight visibility transitions such as drawers, floating panels, notifications and contextual UI reveals.',
      features: [
        'animates content from the top, right, bottom or left',
        'performs transform-based visibility motion without affecting layout',
        'coordinates enter and exit transitions using visibility state',
        'works well for overlays, drawers, popovers and transient UI',
      ],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
        description: 'Content animated.',
      },
      duration: {
        options: ['number'],
        defaultValue: String(DEFAULT_SLIDE_DURATION),
        description: 'Animation duration in milliseconds.',
      },
      easing: {
        options: ['string'],
        defaultValue: DEFAULT_SLIDE_EASING,
        description: 'Timing function for the animation.',
      },
      from: {
        options: SLIDE_FROM,
        isRequired: true,
        description: 'Edge from which the content slides when becoming visible.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      visible: {
        options: ['boolean'],
        isRequired: true,
        description: 'Toggles the visibility of the content.',
      },
    },
    examples: SLIDE_EXAMPLES,
    changelog: SLIDE_CHANGELOG,
  } satisfies ComponentMeta<SlideProps>,
}
