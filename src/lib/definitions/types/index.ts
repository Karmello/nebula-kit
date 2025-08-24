import { ComponentPropsWithRef, ElementType } from 'react'

import {
  BoxOwnProps,
  ClusterOwnProps,
  FlexOwnProps,
  GridOwnProps,
  NavLayoutOwnProps,
  TableOwnProps,
} from 'lib/components'
import { BOX_INTENTS, BOX_VARIANTS, BREAKPOINTS, SCALE } from '..'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'

export type Breakpoint = (typeof BREAKPOINTS)[number]

export type ScaleValue = (typeof SCALE)[number]

export type ResponsiveProp<T> = T | Partial<Record<Breakpoint, T>>

export type PolymorphicProps<E extends ElementType, OwnProps> = Omit<ComponentPropsWithRef<E>, 'as'> & {
  as?: E
} & OwnProps

export type CompWithCssVarsPrefix = 'box' | 'flex' | 'grid' | 'table' | 'cluster' | 'nav-layout'

export type BoxVariant = (typeof BOX_VARIANTS)[number]
export type BoxIntent = (typeof BOX_INTENTS)[number]

export type BoxCssVars = Pick<
  BoxOwnProps,
  | 'fontSize'
  | 'lineHeight'
  | 'textAlign'
  | 'blockSize'
  | 'minBlockSize'
  | 'maxBlockSize'
  | 'inlineSize'
  | 'minInlineSize'
  | 'maxInlineSize'
  | 'p'
  | 'pb'
  | 'pl'
  | 'pr'
  | 'pt'
  | 'px'
  | 'py'
  | 'm'
  | 'mb'
  | 'ml'
  | 'mr'
  | 'mt'
  | 'mx'
  | 'my'
>

export type FlexCssVars = Pick<
  FlexOwnProps,
  'direction' | 'wrap' | 'justify' | 'align' | 'gap' | 'rowGap' | 'columnGap'
>

export type GridCssVars = Pick<
  GridOwnProps,
  | 'columns'
  | 'rows'
  | 'gap'
  | 'rowGap'
  | 'columnGap'
  | 'autoFlow'
  | 'autoRows'
  | 'autoColumns'
  | 'placeItems'
  | 'placeContent'
>

export type TableCssVars = Pick<TableOwnProps, 'minWidth'>

export type ClusterCssVars = Pick<ClusterOwnProps, 'minItemWidth'>

export type NavLayoutCssVars = Pick<NavLayoutOwnProps, 'sideWidth'>

export type TextTypography =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'lead'
  | 'body'
  | 'secondary'
  | 'caption'

export type Display = 'block' | 'inline' | 'inline-block' | 'none' | 'revert'

export type TextAlign =
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'start'
  | 'end'
  | 'inherit'
  | 'initial'
  | 'unset'
  | 'revert'

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

export type FlexJustify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type FlexAlign = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'

export type GridAutoFlow = 'row' | 'column' | 'dense' | 'row dense' | 'column dense'

export type GridPlaceItems = 'start' | 'center' | 'end' | 'stretch'

export type GridPlaceContent =
  | 'start'
  | 'center'
  | 'end'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type ComponentMeta = {
  name: string
  description: string
  props: {
    name: string
    type: string
    options: (string | number)[] | string
    required: boolean
    defaultValue: string
    description: string
  }[]
}
