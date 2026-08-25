import { PORTAL_PLACEMENTS } from 'lib/components/pro/Portal/constants'
import { DEFAULT_PORTAL_PLACEMENT } from 'lib/components/pro/Portal/portal'
import type { PortalProps } from 'lib/components/pro/Portal/types'
import type { Prop } from 'client/definitions'

import { HTML_TAG_META } from '../HtmlTag'

export const PORTAL_PROPS: Record<keyof PortalProps, Prop> = {
  anchorRef: {
    options: ['RefObject'],
    description:
      'Reference to an element the portal positions itself relative to. When omitted the portal renders at the root without applying positioning.',
  },
  children: {
    ...HTML_TAG_META.props.children,
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
  tagAttrs: HTML_TAG_META.props.tagAttrs,
  tagRef: HTML_TAG_META.props.tagRef,
}
