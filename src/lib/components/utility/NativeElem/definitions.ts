import { ComponentPropsWithoutRef, ComponentRef, ElementType, ReactNode, RefObject } from 'react'

export type NativeElemProps<E extends ElementType> = {
  children?: ReactNode
  elem?: E
  elemProps?: ComponentPropsWithoutRef<E>
  elemRef?: RefObject<ComponentRef<E> | null>
}
