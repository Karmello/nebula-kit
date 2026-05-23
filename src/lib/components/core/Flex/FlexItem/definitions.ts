import { ElementType } from 'react'

import { BoxProps, HtmlTagProps } from 'lib/components'
import { RespValue, CssFlexItemAlignSelf } from 'lib/definitions'

type FlexItemOwnProps = {
  flex?: RespValue<string>
  flexGrow?: RespValue<string>
  flexShrink?: RespValue<string>
  flexBasis?: RespValue<string>
  alignSelf?: RespValue<CssFlexItemAlignSelf>
  order?: RespValue<string>
}

type PropsFromHtmlTag<T extends ElementType = 'div'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

type PropsFromBox<T extends ElementType = 'div'> = Pick<BoxProps<T>, 'hidden'>

export type FlexItemProps<T extends ElementType = 'div'> = PropsFromHtmlTag<T> & PropsFromBox<T> & FlexItemOwnProps
