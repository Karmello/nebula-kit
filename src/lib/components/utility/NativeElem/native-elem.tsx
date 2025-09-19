import { ElementType } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'

import { NativeElemProps } from './definitions'

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

NativeElem.displayName = 'NativeElem'
