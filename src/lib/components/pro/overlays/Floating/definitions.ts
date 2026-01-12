import { RefObject, ReactNode } from 'react'

import { PortalPlacement } from 'lib/components/core/utility/Portal'

export type FloatingResolved = {
  placement: PortalPlacement
  // MODE 1 (size-aware)
  blockSize?: number
  // MODE 2 (size-agnostic)
  availableBlockSize: number
  availableInlineSize: number
}

export type FloatingProps = {
  children: ReactNode
  anchorRef: RefObject<HTMLElement | null>
  onResolve: (floating: FloatingResolved) => void
  placement?: PortalPlacement
  flipThresholdRatio?: number
  floatingBlockSize?: number
  floatingInlineSize?: number
  offset?: number
  viewportPadding?: number
}
