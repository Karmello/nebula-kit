import { ElementType, ComponentRef, ComponentPropsWithoutRef, ReactNode, RefObject } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'

export type NativeElemProps<E extends ElementType = 'div'> = {
  children?: ReactNode
  elem?: E
  elemProps?: ComponentPropsWithoutRef<E>
  elemRef?: RefObject<ComponentRef<E>>
}

export const NativeElem = <E extends ElementType = 'div'>({
  children,
  elem,
  elemProps,
  elemRef,
}: NativeElemProps<E>) => {
  const Elem = (elem ?? 'div') as any

  return (
    <Elem
      {...elemProps}
      ref={elemRef}
      className={classNames(withPrefix('native-elem'), elemProps?.className)}
    >
      {children}
    </Elem>
  )
}
