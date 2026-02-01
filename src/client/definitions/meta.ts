import { JSX } from 'react'

import { ReleaseVersion } from 'client/definitions'

type Overview = {
  name?: string
  bundle: 'core' | 'pro'
  title: string
  description?: string
  features?: string[]
  composedOf?: string[]
  topLevelTags?: readonly string[]
  slots?: string[]
  hooks?: string[]
  readMoreLink?: {
    label: string
    href: string
  }
}

export type Prop = {
  options: readonly string[]
  defaultValue?: string
  isRequired?: boolean
  isResponsive?: boolean
  description?: string
  link?: boolean
  tooltip?: readonly string[]
}

type Example = {
  jsx?: JSX.Element
  code?: string
  description?: string
  noSandBox?: boolean
  noCode?: boolean
  sandBoxWithNoPadding?: boolean
  skip?: boolean
}

type Changelog = Partial<Record<ReleaseVersion, string[]>>

export type ComponentMeta<PropsType> = {
  overview: Overview
  props?: Record<keyof PropsType, Prop>
  examples?: Example[]
  changelog?: Changelog
}
