import { RefObject } from 'react'

import { HtmlTagProps } from 'lib/components'

export const DEFAULT_PORTAL_PLACEMENT: PortalProps['placement'] = 'bottom-start'

export const PORTAL_PLACEMENTS = [
  'top-start',
  'top-end',
  'right-start',
  'right-end',
  'bottom-start',
  'bottom-end',
  'left-start',
  'left-end',
] as const

export type PortalPlacement = (typeof PORTAL_PLACEMENTS)[number]

type PortalOwnProps = {
  anchorRef?: RefObject<HTMLElement | null>
  placement?: PortalPlacement
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children']
}

export type PortalProps = PropsFromHtmlTag & PortalOwnProps
