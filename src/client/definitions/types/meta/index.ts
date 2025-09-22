import { JSX } from 'react'

type Overview = {
  name?: string
  description: string
  role?: string[]
  composedOf?: string[]
  rendersAs?: readonly string[]
}

type Prop = {
  options: string[]
  defaultValue?: string
  isRequired?: boolean
  isResponsive?: boolean
  description?: string
}

type Example = {
  jsx: JSX.Element
  description?: string
  noSandBox?: boolean
  sandBoxWithNoPadding?: boolean
}

export type ComponentMeta<PropsType> = {
  overview: Overview
  props?: Record<keyof PropsType, Prop>
  examples?: Example[]
}
