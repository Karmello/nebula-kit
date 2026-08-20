import { BoxProps } from 'lib/index.core'
import { CssGridItemAlignSelf, CssGridItemJustifySelf, GridTag, RespValue } from 'lib/types'

type GridItemOwnProps = {
  gridColumn?: RespValue<string>
  gridRow?: RespValue<string>
  justifySelf?: RespValue<CssGridItemJustifySelf>
  alignSelf?: RespValue<CssGridItemAlignSelf>
}

type PropsFromBox<T extends GridTag = 'div'> = Pick<BoxProps<T>, 'tag' | 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<T>['children']
}

export type GridItemProps<T extends GridTag = 'div'> = PropsFromBox<T> & GridItemOwnProps
