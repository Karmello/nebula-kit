import { DEFAULT_SWITCH_BREAKPOINT, SWITCH_BREAKPOINTS } from 'lib/constants'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../../../Box/meta'
import { DEFAULT_APP_FRAME_FOOTER_INTENT } from '../constants'
import type { AppFrameFooterProps } from '../types'

export const APP_FRAME_FOOTER_META = {
  overview: {
    bundle: 'core',
    name: 'AppFrame.Footer?',
    title: 'Defines the bottom region of AppFrame.',
    guidelines: [
      'commonly used for legal notices, links or supplementary information',
      'AppFrame.FooterSection slot is optional, when no footer sections are provided, AppFrame.Footer renders its children directly',
    ],
    composedOf: ['Box'],
    exposedTags: ['footer'],
    slots: ['AppFrame.FooterSection'],
  },
  props: {
    children: {
      ...BOX_META.Box.props.children,
      isRequired: true,
      description:
        'Footer content. Can be AppFrame.FooterSection slots or any regular React content when section grouping is not needed.',
    },
    color: {
      ...BOX_META.Box.props.color,
      isResponsive: false,
    },
    footerStackBreakpoint: {
      options: SWITCH_BREAKPOINTS,
      defaultValue: DEFAULT_SWITCH_BREAKPOINT,
      description:
        'Defines the breakpoint from which the footer switches from a stacked vertical layout to a horizontal layout.',
    },
    intent: {
      ...BOX_META.Box.props.intent,
      defaultValue: String(DEFAULT_APP_FRAME_FOOTER_INTENT),
      isResponsive: false,
    },
    tagAttrs: BOX_META.Box.props.tagAttrs,
    tagRef: BOX_META.Box.props.tagRef,
  },
} satisfies ComponentMeta<AppFrameFooterProps>
