import { ComponentProps, ComponentRef, ElementType, JSX, RefObject } from 'react'

import { BREAKPOINTS, SCALE } from '..'

export type Breakpoint = (typeof BREAKPOINTS)[number]
export type ScaleValue = (typeof SCALE)[number]

export type HorizontalPosition = 'left' | 'center' | 'right'
export type CompWithCssVarsPrefix = 'box' | 'text' | 'flex' | 'grid' | 'table' | 'cluster'

export type ComponentMeta<PropsType> = {
  name: string
  description: string
  propsInfo?: string
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

export type ResponsiveProp<T> = T | Partial<Record<Breakpoint, T>>

export type PropsOf<E extends ElementType> = JSX.LibraryManagedAttributes<E, ComponentProps<E>>

export type PolymorphicProps<E extends ElementType, Own> = Own & {
  as?: E
  innerRef?: RefObject<ComponentRef<E>>
} & Omit<PropsOf<E>, keyof Own | 'as' | 'ref'>
