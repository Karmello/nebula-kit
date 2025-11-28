import { RefObject } from 'react'

import { withPrefix } from 'lib/helpers'

import { useRipple } from './useRipple'

import './ripple.scss'

export type RippleProps = {
  parentRef: RefObject<any>
}

export const Ripple = ({ parentRef }: RippleProps) => {
  useRipple(parentRef)

  return <span className={withPrefix('ripple')} />
}
