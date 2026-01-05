import { ButtonProps, HtmlTagProps } from 'lib/components'

export const BREADCRUMB_TAGS = ['div', 'nav', 'section'] as const

export const DEFAULT_BREADCRUMB_SIZE: BreadcrumbProps['size'] = 'xs'

export type BreadcrumbTag = (typeof BREADCRUMB_TAGS)[number]

export type BreadcrumbNode = {
  value: string
  label: string
  children?: BreadcrumbNode[]
}

type BreadcrumbOwnProps = {
  tree: BreadcrumbNode[]
  defaultPath?: string[]
  path?: string[]
  onChange?: (path: string[]) => void
}

type PropsFromHtmlTag<T extends BreadcrumbTag = 'div'> = Pick<HtmlTagProps<T>, 'tag' | 'tagAttrs' | 'tagRef'>

type PropsFromButton = Pick<ButtonProps, 'color' | 'intent' | 'size'>

export type BreadcrumbProps<T extends BreadcrumbTag = 'div'> = PropsFromHtmlTag<T> &
  PropsFromButton &
  BreadcrumbOwnProps
