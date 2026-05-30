import { ComponentPropsWithoutRef, ComponentRef, ElementType, ReactNode, Ref, RefObject } from 'react'

type DataAttrs = {
  [K in `data-${string}`]?: unknown
}

export type HtmlTagProps<T extends ElementType = 'div'> = {
  tag?: T
  tagAttrs?: ComponentPropsWithoutRef<T> & DataAttrs
  tagRef?: RefObject<ComponentRef<T> | null>
  children?: ReactNode
}
