import { BoxProps, HtmlTagProps } from 'lib/components/base'
import { RefObject } from 'react'

export const DEFAULT_PORTAL_PLACEMENT: PortalProps['placement'] = 'bottom'
export const PORTAL_PLACEMENTS = ['top', 'right', 'bottom', 'left'] as const

export type PortalPlacement = (typeof PORTAL_PLACEMENTS)[number]

type PortalOwnProps = {
  anchorRef: RefObject<HTMLElement | null>
  placement?: PortalPlacement
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children']
}

type PropsFromBox = PropsFromHtmlTag & Pick<BoxProps<'div'>, 'inlineSize'>

export type PortalProps = PortalOwnProps & PropsFromBox
