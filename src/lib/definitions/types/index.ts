import { ComponentPropsWithRef, ElementType } from 'react'

import { BoxOwnProps, ClusterOwnProps, FlexOwnProps, GridOwnProps, NavLayoutProps } from 'lib/components'
import { BREAKPOINTS, SCALE } from '..'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'

export type Breakpoint = (typeof BREAKPOINTS)[number]

export type ScaleValue = (typeof SCALE)[number]

export type ResponsiveProp<T> = T | Partial<Record<Breakpoint, T>>

export type PolymorphicProps<E extends ElementType, OwnProps> = Omit<ComponentPropsWithRef<E>, 'as'> & {
  as?: E
} & OwnProps

export type CompWithCssVarsPrefix = 'box' | 'flex' | 'grid' | 'cluster' | 'nav-layout'

export type BoxCssVars = Pick<
  BoxOwnProps,
  | 'fontSize'
  | 'lineHeight'
  | 'textAlign'
  | 'height'
  | 'minHeight'
  | 'maxHeight'
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

export type ClusterCssVars = Pick<ClusterOwnProps, 'minItemWidth'>

export type NavLayoutCssVars = Pick<NavLayoutProps, 'sideWidth'>

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
