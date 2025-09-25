import { ElementType } from 'react'

import { RespValue, CssFlexItemAlignSelf } from 'lib/definitions'
import { HtmlTagProps } from 'lib/components/utility'

type FlexItemOwnProps = {
  flex?: RespValue<string | number>
  flexGrow?: RespValue<number>
  flexShrink?: RespValue<number>
  flexBasis?: RespValue<string | number>
  alignSelf?: RespValue<CssFlexItemAlignSelf>
  order?: RespValue<number>
}

type PropsFromHtmlTag<T extends ElementType = 'div'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

export type FlexItemProps<T extends ElementType = 'div'> = PropsFromHtmlTag<T> & FlexItemOwnProps
