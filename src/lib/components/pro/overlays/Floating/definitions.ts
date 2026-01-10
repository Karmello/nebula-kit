import { RefObject, ReactNode } from 'react'

import { PortalPlacement } from 'lib/components/core/utility/Portal'

export type FloatingResult = {
  placement: PortalPlacement
  style?: {
    maxHeight?: number
  }
}

export type FloatingProps = {
  children: ReactNode
  anchorRef: RefObject<HTMLElement | null>
  portalBlockSize: string
  onResolve?: (floating: FloatingResult) => void
  placement?: PortalPlacement
  offset?: string
  viewportPadding?: string
}
