import { JSX } from 'react'

export type ComponentMeta<PropsType> = {
  overview: {
    name: string
    description: string
    responsibilities?: string[]
    characteristics?: string[]
    defaultBehavior?: string[]
    useCases?: string[]
    responsiveProps?: string[]
    inheritedProps?: Record<string, readonly string[]>
    propsDescription?: string
  }
  props?: {
    name: keyof PropsType
    category?: string
    options: string[]
    defaultValue?: string
    isRequired: boolean
    isResponsive: boolean
    description: string
  }[]
  examples?: {
    jsx: JSX.Element
    description?: string
    noSandBox?: boolean
    sandBoxWithNoPadding?: boolean
  }[]
}
