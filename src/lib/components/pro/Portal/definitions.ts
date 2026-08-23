import { RefObject } from 'react'

import { type HtmlTagProps } from '../../core/HtmlTag/definitions'

export const PORTAL_PLACEMENTS = [
  'top-start',
  'top-center',
  'top-end',
  'right-start',
  'right-center',
  'right-end',
  'bottom-start',
  'bottom-center',
  'bottom-end',
  'left-start',
  'left-center',
  'left-end',
] as const

export type PortalPlacement = (typeof PORTAL_PLACEMENTS)[number]

type PortalOwnProps = {
  anchorRef?: RefObject<HTMLElement | null>
  placement?: PortalPlacement
  offset?: number
}

type PropsFromHtmlTag = {
  tagAttrs?: HtmlTagProps<'div'>['tagAttrs']
  tagRef?: HtmlTagProps<'div'>['tagRef']
  children: HtmlTagProps<'div'>['children']
}

export type PortalProps = PropsFromHtmlTag & PortalOwnProps
