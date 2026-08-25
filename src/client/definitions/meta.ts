import { JSX } from 'react'

import { ReleaseVersion } from './release'

export type DocOverview = {
  name?: string
  bundle: 'core' | 'pro'
  title: string
  description?: string
  features?: string[]
  guidelines?: string[]
  composedOf?: string[]
  exposedTags?: readonly string[]
  slots?: string[]
  hooks?: string[]
  readMoreLink?: {
    label: string
    href: string
  }
}

export type DocProp = {
  options: readonly string[]
  defaultValue?: string
  isRequired?: boolean
  isResponsive?: boolean
  description?: string
  link?: boolean
}

export type DocExample = {
  jsx?: JSX.Element
  code?: string
  description?: string
  noSandBox?: boolean
  noCode?: boolean
  sandBoxWithNoPadding?: boolean
  skip?: boolean
}

export type DocChangelog = Partial<Record<ReleaseVersion, string[]>>

export type DocMeta<PropsType> = {
  overview: DocOverview
  props?: Record<keyof PropsType, DocProp>
  examples?: DocExample[]
  changelog?: DocChangelog
  hideExamplesThemeToggle?: boolean
}
