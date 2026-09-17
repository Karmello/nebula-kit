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
  rendersAs?: readonly string[]
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
  group?: string
}

export type DocExample = {
  // Live element rendered in the sandbox preview; also the fallback source for the code snippet when `code` is not set.
  jsx?: JSX.Element
  // Source code shown in the code snippet; falls back to a stringified `jsx` when omitted.
  code?: string
  // Caption shown above the sandbox, or folded into the code snippet's own heading when `noSandBox` is set.
  description?: string
  // Hides the live sandbox preview, showing only the code snippet.
  noSandBox?: boolean
  // Hides the code snippet, showing only the live sandbox preview.
  noCode?: boolean
  // Removes the sandbox's inner padding so the preview renders edge-to-edge.
  sandBoxWithNoPadding?: boolean
  // Marks this example as the one shown on the component's Overview page.
  isOverviewSnippet?: boolean
}

export type DocChangelog = Partial<Record<ReleaseVersion, string[]>>

export type DocMeta<PropsType> = {
  overview: DocOverview
  props?: Record<keyof PropsType, DocProp>
  examples?: DocExample[]
  changelog?: DocChangelog
  hideExamplesThemeToggle?: boolean
}
