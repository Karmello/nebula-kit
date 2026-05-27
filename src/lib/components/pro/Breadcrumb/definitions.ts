import { BoxProps } from 'lib/components'
import { DropdownListProps } from 'lib/components/shared'
import { ControlSize } from 'lib/definitions'

export const BREADCRUMB_TAGS = ['div', 'nav', 'section'] as const

export const DEFAULT_BREADCRUMB_INTENT: BreadcrumbProps['intent'] = 'muted'

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
  size?: ControlSize
  onChange?: (path: string[]) => void
}

type PropsFromBox<T extends BreadcrumbTag = 'div'> = Pick<BoxProps<T>, 'tag' | 'tagAttrs' | 'tagRef'>

type PropsFromDropdownList = Pick<DropdownListProps, 'color' | 'intent'>

export type BreadcrumbProps<T extends BreadcrumbTag = 'div'> = PropsFromBox<T> & PropsFromDropdownList & BreadcrumbOwnProps
