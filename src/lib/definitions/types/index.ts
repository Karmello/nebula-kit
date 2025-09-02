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
