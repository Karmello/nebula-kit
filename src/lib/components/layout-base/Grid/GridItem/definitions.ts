import { ElementType } from 'react'

import { RespValue, CssGridItemJustifySelf, CssGridItemAlignSelf } from 'lib/definitions'
import { HtmlTagProps } from 'lib/components'

type GridItemOwnProps = {
  gridColumn?: RespValue<string | number>
  gridRow?: RespValue<string | number>
  justifySelf?: RespValue<CssGridItemJustifySelf>
  alignSelf?: RespValue<CssGridItemAlignSelf>
}

type PropsFromHtmlTag<T extends ElementType = 'div'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

export type GridItemProps<T extends ElementType = 'div'> = PropsFromHtmlTag<T> & GridItemOwnProps
