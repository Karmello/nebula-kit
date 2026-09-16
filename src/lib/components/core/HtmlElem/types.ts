import { ComponentPropsWithoutRef, ComponentRef, ElementType, ReactNode, RefObject } from 'react'

type DataAttrs = {
  [K in `data-${string}`]?: unknown
}

export type HtmlElemProps<T extends ElementType = 'div'> = {
  elemTag?: T
  elemAttrs?: ComponentPropsWithoutRef<T> & DataAttrs
  elemRef?: RefObject<ComponentRef<T> | null>
  className?: string
  onClick?: ComponentPropsWithoutRef<T>['onClick']
  onFocus?: ComponentPropsWithoutRef<T>['onFocus']
  onBlur?: ComponentPropsWithoutRef<T>['onBlur']
  onKeyDown?: ComponentPropsWithoutRef<T>['onKeyDown']
  children?: ReactNode
}
