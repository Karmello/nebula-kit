import { ReactNode } from 'react'

import { FLOATING_PLACEMENT } from 'lib/components/pro/Floating/constants'

export type FloatingPlacement = (typeof FLOATING_PLACEMENT)[number]

export type FloatingProps = {
  children: ReactNode
  mode?: 'click' | 'hover'
  placement?: FloatingPlacement
  offset?: number
  open?: boolean
  onOpenChange?: (open: boolean) => void
}
