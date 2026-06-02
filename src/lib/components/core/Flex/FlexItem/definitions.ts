import { ElementType } from 'react'

import { HtmlTagProps } from 'lib/components/shared'
import { BoxProps } from 'lib/index.core'
import { CssFlexItemAlignSelf, RespValue } from 'lib/types'

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
