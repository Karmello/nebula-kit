import { DropdownListProps, HtmlTagProps } from 'lib/components'

export const BREADCRUMB_TAGS = ['div', 'nav', 'section'] as const

export const DEFAULT_BREADCRUMB_SIZE: BreadcrumbProps['size'] = 'xs'
export const DEFAULT_BREADCRUMB_INTENT: BreadcrumbProps['intent'] = 'tertiary'
export const DEFAULT_BREADCRUMB_ITEM_BORDER_INTENT: BreadcrumbProps['itemBorderIntent'] = 'primary'

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

type PropsFromDropdownList = Pick<DropdownListProps, 'color' | 'intent' | 'itemBorderIntent' | 'size'>

export type BreadcrumbProps<T extends BreadcrumbTag = 'div'> = PropsFromHtmlTag<T> &
  PropsFromDropdownList &
  BreadcrumbOwnProps
