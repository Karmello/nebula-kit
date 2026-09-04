import { PORTAL_PLACEMENTS } from 'lib/components/pro/Portal/constants'
import { DEFAULT_PORTAL_PLACEMENT } from 'lib/components/pro/Portal/portal'
import type { PortalProps } from 'lib/components/pro/Portal/types'
import type { DocProp } from 'client/definitions'

export const PORTAL_PROPS: Record<keyof PortalProps, DocProp> = {
  anchorRef: {
    options: ['RefObject'],
    description:
      'Reference to an element the portal positions itself relative to. When omitted the portal renders at the root without applying positioning.',
  },
  children: {
    options: ['ReactNode'],
    isRequired: true,
    description: 'Content rendered inside the portal.',
  },
  offset: {
    options: ['number'],
    description:
      'Defines the distance (px) between the anchor element and the portal content along the placement axis.',
  },
  placement: {
    options: PORTAL_PLACEMENTS,
    defaultValue: DEFAULT_PORTAL_PLACEMENT,
    description: 'Defines the position of the portal content relative to the anchor element.',
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
