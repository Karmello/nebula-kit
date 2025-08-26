import { ComponentPropsWithRef, ElementType } from 'react'

import { BOX_INTENTS, BOX_VARIANTS, BREAKPOINTS, SCALE } from '..'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'

export type Breakpoint = (typeof BREAKPOINTS)[number]

export type ScaleValue = (typeof SCALE)[number]

export type ResponsiveProp<T> = T | Partial<Record<Breakpoint, T>>

export type PolymorphicProps<E extends ElementType, OwnProps> = Omit<ComponentPropsWithRef<E>, 'as'> & {
  as?: E
} & OwnProps

export type CompWithCssVarsPrefix = 'box' | 'flex' | 'grid' | 'table' | 'cluster'

export type BoxVariant = (typeof BOX_VARIANTS)[number]
export type BoxIntent = (typeof BOX_INTENTS)[number]

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

export type CssDisplay =
  | 'block'
  | 'inline'
  | 'inline-block'
  | 'table'
  | 'table-header-group'
  | 'table-row-group'
  | 'table-footer-group'
  | 'table-row'
  | 'table-cell'
  | 'revert'
  | 'initial'
  | 'none'

export type CssOverflow = 'visible' | 'auto' | 'hidden' | 'scroll'

export type CssPosition = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'

export type CssTextAlign =
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
