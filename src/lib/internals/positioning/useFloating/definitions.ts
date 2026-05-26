import { RefObject } from 'react'

import { PortalPlacement } from 'lib/components/shared'

export const FLOATING_MODE = ['project-both', 'project-x', 'project-y', 'fit-x', 'fit-y'] as const
export const DEFAULT_FLOATING_PLACEMENT: FloatingProps['placement'] = 'bottom-start'

export type FloatingResolved = {
  placement: PortalPlacement
  blockSize?: number
}

export type FloatingMode = (typeof FLOATING_MODE)[number]

type FloatingBaseProps = {
  anchorRef: RefObject<HTMLElement | null>
  placement?: PortalPlacement
  offset?: number
  viewportPadding?: number
  onResolve?: (floating: FloatingResolved) => void
}

export type FloatingFitProps = FloatingBaseProps & {
  mode: Extract<FloatingMode, 'fit-x' | 'fit-y'>
  floatingBlockSize: number
  minInlineSize?: never
  maxInlineSize?: never
}

export type FloatingProjectProps = FloatingBaseProps & {
  mode: Extract<FloatingMode, 'project-x' | 'project-y' | 'project-both'>
  minInlineSize: number
  maxInlineSize: number
  floatingBlockSize?: never
}

export type FloatingProps = FloatingFitProps | FloatingProjectProps
