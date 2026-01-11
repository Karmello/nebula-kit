import { RefObject, ReactNode } from 'react'

import { PortalPlacement } from 'lib/components/core/utility/Portal'

export type FloatingResolved = {
  placement: PortalPlacement
  blockSize?: number
}

export type FloatingProps = {
  children: ReactNode
  anchorRef: RefObject<HTMLElement | null>
  onResolve?: (floating: FloatingResolved) => void
  placement?: PortalPlacement
  floatingBlockSize?: number
  floatingInlineSize?: number
  offset?: number
  viewportPadding?: number
}
