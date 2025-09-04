import { ElementType, JSX } from 'react'

import { BoxProps } from 'lib/components'
import { BREAKPOINTS, SCALE } from '..'

export type Breakpoint = (typeof BREAKPOINTS)[number]
export type ScaleValue = (typeof SCALE)[number]

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
  examples: JSX.Element[]
}

export type ResponsiveProp<T> = T | Partial<Record<Breakpoint, T>>

export type LayoutSlotProps<E extends ElementType> = Pick<
  BoxProps<E>,
  | 'children'
  | 'elemProps'
  | 'elemRef'
  | 'intent'
  | 'blockSize'
  | 'minBlockSize'
  | 'maxBlockSize'
  | 'padding'
  | 'paddingInline'
  | 'paddingBlock'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
>
