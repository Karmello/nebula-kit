import { BoxProps, ButtonProps, HtmlTagProps } from 'lib/components'
import { BoxVariant } from 'lib/components/core/base/Box'

export const TABS_VARIANTS = ['solid', 'outline'] as const satisfies BoxVariant[]
export const TABS_FLEX_DIRECTION = ['row', 'column'] as const

export const DEFAULT_TABS_VARIANT: TabsProps['variant'] = 'outline'
export const DEFAULT_TABS_INTENT: TabsProps['intent'] = 'tertiary'
export const DEFAULT_TABS_FLEX_DIRECTION: TabsProps['flexDirection'] = 'row'

export type TabsVariant = (typeof TABS_VARIANTS)[number]
export type TabsFlexDirection = (typeof TABS_FLEX_DIRECTION)[number]

type PropsFromHtmlTag = Pick<HtmlTagProps, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps['children']
}

type PropsFromBox = Pick<BoxProps, 'color' | 'intent' | 'inlineSize'> & {
  variant?: TabsVariant
}

type PropsFromFlex = {
  flexDirection?: TabsFlexDirection
}

type PropsFromButton = Pick<ButtonProps, 'size'>

type TabsOwnProps = {
  value?: string | number
  defaultValue?: string | number
  onChange?: (value: string | number) => void
}

export type TabsProps = PropsFromHtmlTag & PropsFromBox & PropsFromFlex & PropsFromButton & TabsOwnProps
