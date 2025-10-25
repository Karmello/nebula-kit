import { ReactNode, RefObject } from 'react'

export const DEFAULT_PORTAL_PLACEMENT: PortalProps['placement'] = 'bottom'
export const PORTAL_PLACEMENT = ['top', 'right', 'bottom', 'left'] as const

export type PortalPlacement = (typeof PORTAL_PLACEMENT)[number]

export type PortalProps = {
  children: ReactNode
  anchorRef: RefObject<HTMLElement>
  placement?: PortalPlacement
}
