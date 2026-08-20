import { ElementType } from 'react'

import { CssFlexItemAlignSelf, RespValue } from 'lib/types'

import type { BoxProps } from '../../Box/types'
import type { HtmlTagProps } from '../../HtmlTag/definitions'

type FlexItemOwnProps = {
  flex?: RespValue<string>
  flexGrow?: RespValue<string>
  flexShrink?: RespValue<string>
  flexBasis?: RespValue<string>
  alignSelf?: RespValue<CssFlexItemAlignSelf>
  order?: RespValue<string>
}

type PropsFromBox<T extends ElementType = 'div'> = Pick<BoxProps<T>, 'tag' | 'tagAttrs' | 'tagRef' | 'hidden'> & {
  children: HtmlTagProps<T>['children']
}

export type FlexItemProps<T extends ElementType = 'div'> = PropsFromBox<T> & FlexItemOwnProps
