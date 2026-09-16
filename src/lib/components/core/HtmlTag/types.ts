import { ComponentPropsWithoutRef, ComponentRef, ElementType, ReactNode, RefObject } from 'react'

type DataAttrs = {
  [K in `data-${string}`]?: unknown
}

export type HtmlTagProps<T extends ElementType = 'div'> = {
  tag?: T
  tagAttrs?: ComponentPropsWithoutRef<T> & DataAttrs
  tagRef?: RefObject<ComponentRef<T> | null>
  className?: string
  onClick?: ComponentPropsWithoutRef<T>['onClick']
  onFocus?: ComponentPropsWithoutRef<T>['onFocus']
  onBlur?: ComponentPropsWithoutRef<T>['onBlur']
  onKeyDown?: ComponentPropsWithoutRef<T>['onKeyDown']
  children?: ReactNode
}
