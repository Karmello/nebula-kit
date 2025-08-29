import { ComponentPropsWithRef, ElementType } from 'react'

import { BREAKPOINTS, SCALE } from '..'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'

export type Breakpoint = (typeof BREAKPOINTS)[number]

export type ScaleValue = (typeof SCALE)[number]

export type HorizontalPosition = 'left' | 'center' | 'right'

export type ResponsiveProp<T> = T | Partial<Record<Breakpoint, T>>

export type PolymorphicProps<E extends ElementType, OwnProps> = Omit<ComponentPropsWithRef<E>, 'as'> & {
  as?: E
} & OwnProps

export type CompWithCssVarsPrefix = 'box' | 'text' | 'flex' | 'grid' | 'table' | 'cluster'

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

export type CssFlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

export type CssFlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

export type CssFlexJustify =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type CssFlexAlign = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'

export type CssGridAutoFlow = 'row' | 'column' | 'dense' | 'row dense' | 'column dense'

export type CssGridPlaceItems = 'start' | 'center' | 'end' | 'stretch'

export type CssGridPlaceContent =
  | 'start'
  | 'center'
  | 'end'
  | 'stretch'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type ComponentMeta<PropsType> = {
  name: string
  description: string
  props: {
    category: string
    name: keyof PropsType
    options: string[]
    defaultValue: string
    isRequired: boolean
    isResponsive: boolean
    description: string
  }[]
}
