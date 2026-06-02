import { ElementType } from 'react'

import { BoxProps } from 'lib/components'
import { RespValue } from 'lib/types'

import type { CssGridItemAlignSelf, CssGridItemJustifySelf } from '../../../../types'

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
