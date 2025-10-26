import { BoxProps } from 'lib/components/base'
import { ReactNode, RefObject } from 'react'

export const DEFAULT_PORTAL_PLACEMENT: PortalProps['placement'] = 'bottom'
export const PORTAL_PLACEMENT = ['top', 'right', 'bottom', 'left'] as const

export type PortalPlacement = (typeof PORTAL_PLACEMENT)[number]

type PortalOwnProps = {
  children: ReactNode
  anchorRef: RefObject<HTMLElement>
  placement?: PortalPlacement
}

type PropsFromBox = Pick<BoxProps<'div'>, 'inlineSize'>

export type PortalProps = PortalOwnProps & PropsFromBox
