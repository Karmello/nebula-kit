import { BoxProps, DropdownListProps, HtmlTagProps, PortalPlacement } from 'lib/components'

export const SELECT_DROPDOWN_PLACEMENTS = [
  'bottom-start',
  'bottom-end',
  'top-start',
  'top-end',
] as const satisfies PortalPlacement[]

export const DEFAULT_SELECT_INLINE_SIZE: SelectProps['inlineSize'] = '100%'

export type SelectDropdownPlacement = (typeof SELECT_DROPDOWN_PLACEMENTS)[number]

type SelectOwnProps = {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  dropdownPlacement?: SelectDropdownPlacement
  staticLabel?: string
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children']
}

type PropsFromBox = Pick<BoxProps<'div'>, 'inlineSize'>

type PropsFromDropdownList = Pick<
  DropdownListProps,
  'variant' | 'intent' | 'size' | 'itemBorderIntent' | 'scrollAlign' | 'visibleItemsCount'
>

export type SelectProps = PropsFromHtmlTag & PropsFromBox & PropsFromDropdownList & SelectOwnProps
