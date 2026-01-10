import { RefObject, ReactNode } from 'react'

import { PortalPlacement } from 'lib/components/core/utility/Portal'

export type FloatingResolved = {
  placement: PortalPlacement
  style?: {
    maxHeight?: number
  }
}

export type FloatingProps = {
  children: ReactNode
  anchorRef: RefObject<HTMLElement | null>
  portalBlockSize: string
  onResolve?: (floating: FloatingResolved) => void
  placement?: PortalPlacement
  offset?: string
  viewportPadding?: string
}
