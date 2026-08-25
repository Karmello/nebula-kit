import { DEFAULT_APP_FRAME_FOOTER_INTENT } from 'lib/components/core/AppFrame/slots/AppFrameFooter/constants'
import type { AppFrameFooterProps } from 'lib/components/core/AppFrame/slots/AppFrameFooter/types'
import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import { DEFAULT_SWITCH_BREAKPOINT, SWITCH_BREAKPOINTS } from 'lib/constants'
import type { DocProp } from 'client/definitions'

export const APP_FRAME_FOOTER_PROPS: Record<keyof AppFrameFooterProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description:
      'Footer content. Can be AppFrame.FooterSection slots or any regular React content when section grouping is not needed.',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
    isResponsive: false,
  },
  footerStackBreakpoint: {
    options: SWITCH_BREAKPOINTS,
    defaultValue: DEFAULT_SWITCH_BREAKPOINT,
    description:
      'Defines the breakpoint from which the footer switches from a stacked vertical layout to a horizontal layout.',
  },
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_APP_FRAME_FOOTER_INTENT),
    description: "Color tone applied to the component's main color.",
    isResponsive: false,
  },
  tagAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the root tag.',
  },
  tagRef: {
    options: ['RefObject'],
    description: 'Reference to the root HTML tag.',
  },
}
