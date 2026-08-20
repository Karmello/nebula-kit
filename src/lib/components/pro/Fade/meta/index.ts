import { BOX_META } from 'lib/components/core/Box/meta'
import { FadeProps } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_FADE_DURATION, DEFAULT_FADE_EASING } from '../fade'
import { FADE_CHANGELOG } from './changelog'
import { FADE_EXAMPLES } from './examples'

export const FADE_META = {
  Fade: {
    overview: {
      bundle: 'pro',
      title: 'Motion component for animating opacity transitions.',
      description:
        'Fade applies opacity-based motion that smoothly transitions content between visible and hidden states. It is intended for lightweight visual transitions such as overlays, tooltips, floating UI and subtle content reveals.',
      features: [
        'animates visibility using opacity transitions',
        'performs visual-only motion without affecting layout',
        'coordinates enter and exit visibility states',
        'works well for overlays, tooltips, popovers and transient UI',
      ],
      composedOf: ['Box'],
      exposedTags: ['span'],
    },
    props: {
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      duration: {
        options: ['number'],
        defaultValue: String(DEFAULT_FADE_DURATION),
        description: 'Controls the fade transition duration in milliseconds.',
      },
      easing: {
        options: ['string'],
        defaultValue: DEFAULT_FADE_EASING,
        description: 'CSS timing function used for the fade transition animation.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      visible: {
        options: ['boolean'],
        isRequired: true,
        description: 'Controls whether the content is shown or hidden through the fade transition.',
      },
    },
    examples: FADE_EXAMPLES,
    changelog: FADE_CHANGELOG,
  } satisfies ComponentMeta<FadeProps>,
}
