import { RefObject, ReactNode } from 'react'

import { PORTAL_PLACEMENTS, PortalPlacement } from 'lib/components/core/utility/Portal'

export const FLOATING_PLACEMENTS = ['auto', ...PORTAL_PLACEMENTS] as const

export const DEFAULT_FLOATING_PLACEMENT: FloatingProps['placement'] = 'auto'
export const DEFAULT_FLOATING_OFFSET: FloatingProps['offset'] = '5px'
export const DEFAULT_FLOATING_VIEWPORT_PADDING: FloatingProps['viewportPadding'] = '10px'

export type FloatingPlacement = (typeof FLOATING_PLACEMENTS)[number]

export type FloatingResult = {
  placement: PortalPlacement
  style?: {
    maxHeight?: number
  }
}

export type FloatingProps = {
  anchorRef: RefObject<HTMLElement | null>
  children: (floating: FloatingResult) => ReactNode
  disabled?: boolean
  placement?: FloatingPlacement
  offset?: string
  viewportPadding?: string
}
