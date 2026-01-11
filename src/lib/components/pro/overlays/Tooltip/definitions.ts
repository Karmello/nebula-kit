import { HtmlTagProps, FloatingProps, BoxProps } from 'lib/components'
import { BoxVariant } from 'lib/components/core/base/Box'

export const TOOLTIP_VARIANTS = ['solid', 'outline', 'soft-outline'] as const satisfies BoxVariant[]

export const DEFAULT_TOOLTIP_PLACEMENT: TooltipProps['placement'] = 'top-center'
export const DEFAULT_TOOLTIP_OFFSET: TooltipProps['offset'] = 5
export const DEFAULT_TOOLTIP_VARIANT: TooltipProps['variant'] = 'outline'
export const DEFAULT_TOOLTIP_INTENT: TooltipProps['intent'] = 'tertiary'
export const DEFAULT_TOOLTIP_PADDING: TooltipProps['padding'] = '10px'

export type TooltipVariant = (typeof TOOLTIP_VARIANTS)[number]

type PropsFromHtmlTag = Pick<HtmlTagProps, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps['children']
}

type PropsFromBox = Pick<
  BoxProps,
  'blockSize' | 'color' | 'inlineSize' | 'intent' | 'padding' | 'paddingBlock' | 'paddingInline' | 'textAlign'
>

type TooltipOwnProps = {
  content: string
  placement?: FloatingProps['placement']
  offset?: number
  variant?: TooltipVariant
}

export type TooltipProps = PropsFromHtmlTag & PropsFromBox & TooltipOwnProps
