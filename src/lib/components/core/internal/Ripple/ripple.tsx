import { RefObject } from 'react'

import { withPrefix } from 'lib/helpers'

import { useRipple } from './useRipple'

import './ripple.scss'

export type RippleProps = {
  parentRef: RefObject<any>
  active?: boolean
}

export const Ripple = ({ parentRef, active }: RippleProps) => {
  useRipple(parentRef, active)

  return <span className={withPrefix('ripple')} />
}
