import { BoxProps, HtmlTagProps } from 'lib/components'
import { BoxVariant } from 'lib/components/core/base/Box'

export const TABS_VARIANTS = ['solid', 'outline'] as const satisfies BoxVariant[]

export const DEFAULT_TABS_VARIANT: TabsProps['variant'] = 'outline'
export const DEFAULT_TABS_INTENT: TabsProps['intent'] = 'tertiary'

export type TabsVariant = (typeof TABS_VARIANTS)[number]

type PropsFromHtmlTag = Pick<HtmlTagProps, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps['children']
}

type PropsFromBox = Pick<BoxProps, 'color' | 'intent' | 'inlineSize' | 'minInlineSize' | 'maxInlineSize'> & {
  variant?: TabsVariant
}

type TabsOwnProps = {
  value?: string | number
  defaultValue?: string | number
  onChange?: (value: string | number) => void
}

export type TabsProps = PropsFromHtmlTag & PropsFromBox & TabsOwnProps
