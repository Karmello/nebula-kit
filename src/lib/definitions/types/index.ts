import { ComponentPropsWithRef, ElementType } from 'react'

import { BREAKPOINTS, SCALE } from '..'

export type Breakpoint = (typeof BREAKPOINTS)[number]

export type ScaleValue = (typeof SCALE)[number]

export type HorizontalPosition = 'left' | 'center' | 'right'

export type ResponsiveProp<T> = T | Partial<Record<Breakpoint, T>>

export type PolymorphicProps<E extends ElementType, OwnProps> = Omit<ComponentPropsWithRef<E>, 'as'> & {
  as?: E
} & OwnProps

export type CompWithCssVarsPrefix = 'box' | 'text' | 'flex' | 'grid' | 'table' | 'cluster'

export type ComponentOverviewMeta = {
  name: string
  description: string
}

export type ComponentPropsMeta<PropsType> = {
  category: string
  name: keyof PropsType
  options: string[]
  defaultValue: string
  isRequired: boolean
  isResponsive: boolean
  description: string
}[]
