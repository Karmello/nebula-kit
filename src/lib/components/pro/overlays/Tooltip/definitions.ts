import { HtmlTagProps, FloatingProps, BoxProps } from 'lib/components'
import { BoxVariant } from 'lib/components/core/base/Box'

export const TOOLTIP_VARIANTS = ['solid', 'outline', 'soft-outline'] as const satisfies BoxVariant[]

export const DEFAULT_TOOLTIP_PLACEMENT: TooltipProps['placement'] = 'top-center'
export const DEFAULT_TOOLTIP_OFFSET: TooltipProps['offset'] = 10
export const DEFAULT_TOOLTIP_VARIANT: TooltipProps['variant'] = 'solid'
export const DEFAULT_TOOLTIP_INTENT: TooltipProps['intent'] = 'inverse'
export const DEFAULT_TOOLTIP_PADDING: TooltipProps['padding'] = '10px'

export type TooltipOpenReason = 'keyboard' | 'mouse'
export type TooltipInputModality = TooltipOpenReason | null

export type TooltipVariant = (typeof TOOLTIP_VARIANTS)[number]

type PropsFromHtmlTag = Pick<HtmlTagProps, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps['children']
}

type PropsFromBox = Pick<
  BoxProps,
  'color' | 'intent' | 'padding' | 'paddingBlock' | 'paddingInline' | 'textAlign'
> & {
  maxInlineSize?: string
}

type TooltipOwnProps = {
  content: string
  placement?: FloatingProps['placement']
  offset?: number
  variant?: TooltipVariant
}

export type TooltipProps = PropsFromHtmlTag & PropsFromBox & TooltipOwnProps
