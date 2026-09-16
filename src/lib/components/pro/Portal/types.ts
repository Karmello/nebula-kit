import { RefObject } from 'react'

import { type BoxProps } from '../../core/Box/types'
import { type HtmlElemProps } from '../../core/HtmlElem/types'
import { PORTAL_PLACEMENTS } from './constants'

export type PortalPlacement = (typeof PORTAL_PLACEMENTS)[number]

export type PortalProps = {
  // own
  anchorRef?: RefObject<HTMLElement | null>
  placement?: PortalPlacement
  offset?: number
  // Box
  zIndex?: BoxProps['zIndex']
  // HtmlElem
  elemAttrs?: HtmlElemProps<'div'>['elemAttrs']
  elemRef?: HtmlElemProps<'div'>['elemRef']
  children: HtmlElemProps<'div'>['children']
}
