import { ComponentPropsWithoutRef, ComponentRef, ElementType, ReactNode, RefObject } from 'react'

export const NATIVE_ELEM_PROP = ['children', 'elem', 'elemProps', 'elemRef'] as const

export type NativeElemProp = (typeof NATIVE_ELEM_PROP)[number]

type NativeElemPropsMap<E extends ElementType> = {
  children?: ReactNode
  elem?: E
  elemProps?: ComponentPropsWithoutRef<E>
  elemRef?: RefObject<ComponentRef<E>>
}

export type NativeElemProps<E extends ElementType = 'div'> = Pick<NativeElemPropsMap<E>, NativeElemProp>
