import { BoxProps, ButtonProps, HtmlTagProps } from 'lib/components'
import { BoxVariant } from 'lib/components/core/Box'
import { RespValue } from 'lib/definitions'

export const TABS_VARIANTS = ['solid', 'outline'] as const satisfies BoxVariant[]
export const TABS_ORIENTATION = ['horizontal', 'vertical'] as const

export const DEFAULT_TABS_VARIANT: TabsProps['variant'] = 'outline'
export const DEFAULT_TABS_INTENT: TabsProps['intent'] = 'tertiary'
export const DEFAULT_TABS_ORIENTATION: TabsProps['orientation'] = 'horizontal'

export type TabsVariant = (typeof TABS_VARIANTS)[number]
export type TabsOrientation = (typeof TABS_ORIENTATION)[number]

type PropsFromHtmlTag = Pick<HtmlTagProps, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps['children']
}

type PropsFromBox = Pick<BoxProps, 'color' | 'intent' | 'inlineSize'> & {
  variant?: RespValue<TabsVariant>
}

type PropsFromButton = Pick<ButtonProps, 'size'>

type TabsOwnProps = {
  orientation?: TabsOrientation
  value?: string | number
  defaultValue?: string | number
  onChange?: (value: string | number) => void
}

export type TabsProps = PropsFromHtmlTag & PropsFromBox & PropsFromButton & TabsOwnProps
