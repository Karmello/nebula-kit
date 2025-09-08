import { ComponentPropsWithoutRef, ComponentRef, ElementType, ReactNode, RefObject } from 'react'

type DataAttrs = {
  [_ in `data-${string}`]?: string | number | boolean | undefined
}

export type NativeElemProps<E extends ElementType> = {
  children?: ReactNode
  elem?: E
  elemProps?: ComponentPropsWithoutRef<E> & DataAttrs
  elemRef?: RefObject<ComponentRef<E> | null>
}
