import { JSX } from 'react'

type Overview = {
  name?: string
  title: string
  description?: string[]
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
  jsx?: JSX.Element
  code?: string
  description?: string
  noSandBox?: boolean
  sandBoxWithNoPadding?: boolean
}

export type ComponentMeta<PropsType> = {
  overview: Overview
  props?: Record<keyof PropsType, Prop>
  examples?: Example[]
}
