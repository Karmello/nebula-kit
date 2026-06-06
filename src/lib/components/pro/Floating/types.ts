import { ReactNode } from 'react'

import { FLOATING_PLACEMENT } from './constants'

export type FloatingPlacement = (typeof FLOATING_PLACEMENT)[number]

export type FloatingProps = {
  children: ReactNode
  mode?: 'click' | 'hover'
  placement?: FloatingPlacement
  offset?: number
  open?: boolean
  disabled?: boolean
  onOpenChange?: (open: boolean) => void
  onPlacementChange?: (placement: FloatingPlacement) => void
}
