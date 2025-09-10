import { JSX } from 'react'

type Overview = {
  title: string
  description: string
  responsibilities?: string[]
  characteristics?: string[]
  defaultBehavior?: string[]
  useCases?: string[]
  responsiveProps?: string[]
  inheritedProps?: Record<string, readonly string[]>
}

type Prop<PropsType> = {
  name: keyof PropsType
  category?: string
  options: string[]
  defaultValue?: string
  isRequired: boolean
  isResponsive: boolean
  description: string
}

type Example = {
  jsx: JSX.Element
  description?: string
  noSandBox?: boolean
  sandBoxWithNoPadding?: boolean
}

export type ComponentMeta<PropsType> = {
  overview: Overview
  props?: Prop<PropsType>[]
  examples?: Example[]
}
