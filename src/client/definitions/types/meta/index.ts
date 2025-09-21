import { JSX } from 'react'

type Overview = {
  title?: string
  description: string
  role?: string[]
  behavior?: string[]
  byDefault?: string[]
  examplesOfUse?: string[]
  composedOf?: Record<string, readonly string[]>
  rendersAs?: readonly string[]
}

type Prop<PropsType> = {
  name: keyof PropsType
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
  props?: Record<keyof PropsType, Prop<PropsType>>
  examples?: Example[]
}
