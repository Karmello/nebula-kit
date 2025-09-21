import { ComponentPropsWithoutRef, ComponentRef, ElementType, ReactNode, RefObject } from 'react'

type DataAttrs = {
  [K in `data-${string}`]?: string | number | boolean | undefined
}

export type HtmlTagProps<T extends ElementType = 'div'> = {
  children?: ReactNode
  tag?: T
  tagAttrs?: ComponentPropsWithoutRef<T> & DataAttrs
  tagRef?: RefObject<ComponentRef<T> | null>
}
