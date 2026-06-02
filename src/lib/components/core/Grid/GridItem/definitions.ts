import { ElementType } from 'react'

import { BoxProps } from 'lib/index.core'
import { CssGridItemAlignSelf, CssGridItemJustifySelf, RespValue } from 'lib/types'

type GridItemOwnProps = {
  gridColumn?: RespValue<string>
  gridRow?: RespValue<string>
  justifySelf?: RespValue<CssGridItemJustifySelf>
  alignSelf?: RespValue<CssGridItemAlignSelf>
}

type PropsFromBox<T extends ElementType = 'div'> = Pick<BoxProps<T>, 'tag' | 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<T>['children']
}

export type GridItemProps<T extends ElementType = 'div'> = PropsFromBox<T> & GridItemOwnProps
