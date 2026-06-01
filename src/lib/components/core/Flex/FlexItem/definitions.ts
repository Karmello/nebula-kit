import { ElementType } from 'react'

import { BoxProps } from 'lib/components'
import { HtmlTagProps } from 'lib/components/shared'
import { RespValue } from 'lib/types'

import { CssFlexItemAlignSelf } from '../../../../types'

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
