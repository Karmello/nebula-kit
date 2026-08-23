import { type BreadcrumbProps } from 'lib/index.pro'

export const BREADCRUMB_TAGS = ['div', 'nav', 'section'] as const

export const DEFAULT_BREADCRUMB_INTENT: BreadcrumbProps['intent'] = 'muted'
export const DEFAULT_BREADCRUMB_SIZE: BreadcrumbProps['size'] = 'xs'
