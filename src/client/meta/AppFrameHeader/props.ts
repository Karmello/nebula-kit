import { DEFAULT_APP_FRAME_HEADER_INTENT } from 'lib/components/core/AppFrame/slots/AppFrameHeader/constants'
import type { AppFrameHeaderProps } from 'lib/components/core/AppFrame/slots/AppFrameHeader/types'
import { BOX_COLORS, BOX_INTENTS } from 'lib/components/core/Box/constants'
import type { DocProp } from 'client/definitions'

export const APP_FRAME_HEADER_PROPS: Record<keyof AppFrameHeaderProps, DocProp> = {
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered.',
  },
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  // surface
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_APP_FRAME_HEADER_INTENT),
    description: "Color tone applied to the component's main color.",
    isResponsive: false,
    group: 'surface',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
    isResponsive: false,
    group: 'surface',
  },
}
