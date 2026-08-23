import { RefObject } from 'react'

import { type HtmlTagProps } from '../../core/HtmlTag/types'
import { PORTAL_PLACEMENTS } from './constants'

export type PortalPlacement = (typeof PORTAL_PLACEMENTS)[number]

export type PortalProps = {
  // own
  anchorRef?: RefObject<HTMLElement | null>
  placement?: PortalPlacement
  offset?: number
  // HtmlTag
  tagAttrs?: HtmlTagProps<'div'>['tagAttrs']
  tagRef?: HtmlTagProps<'div'>['tagRef']
  children: HtmlTagProps<'div'>['children']
}
