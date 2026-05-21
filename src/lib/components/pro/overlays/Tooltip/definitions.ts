import { HtmlTagProps, FloatingProps, BoxProps } from 'lib/components'
import { BoxVariant } from 'lib/components/core/base/Box'
import { RespValue } from 'lib/definitions'

export const TOOLTIP_VARIANTS = ['solid', 'outline', 'soft-outline'] as const satisfies BoxVariant[]
export const TOOLTIP_MODES = ['hover', 'click'] as const

export const DEFAULT_TOOLTIP_PLACEMENT: TooltipProps['placement'] = 'top-center'
export const DEFAULT_TOOLTIP_OFFSET: TooltipProps['offset'] = 10
export const DEFAULT_TOOLTIP_VARIANT: TooltipProps['variant'] = 'solid'
export const DEFAULT_TOOLTIP_INTENT: TooltipProps['intent'] = 'inverse'
export const DEFAULT_TOOLTIP_PADDING: TooltipProps['padding'] = '10px'
export const DEFAULT_TOOLTIP_MODE: TooltipProps['mode'] = 'hover'

export type TooltipOpenReason = TooltipMode

export type TooltipVariant = (typeof TOOLTIP_VARIANTS)[number]
export type TooltipMode = (typeof TOOLTIP_MODES)[number]

type PropsFromHtmlTag = Pick<HtmlTagProps, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps['children']
}

type PropsFromBox = Pick<BoxProps, 'color' | 'intent' | 'padding' | 'paddingBlock' | 'paddingInline' | 'textAlign'> & {
  minInlineSize: number
  maxInlineSize: number
}

type TooltipOwnProps = {
  content: string
  placement?: FloatingProps['placement']
  mode?: TooltipMode
  offset?: number
  variant?: RespValue<TooltipVariant>
}

export type TooltipProps = PropsFromHtmlTag & PropsFromBox & TooltipOwnProps
