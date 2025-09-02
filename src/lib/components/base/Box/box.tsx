import {
  ElementType,
  ComponentRef,
  useRef,
  useLayoutEffect,
  ComponentPropsWithoutRef,
  ReactNode,
  RefObject,
} from 'react'

import classNames from 'classnames'

import { useLibStore } from 'lib/state'
import { BoxIntent, BoxVariant } from 'lib/definitions'
import { computeResponsiveCss, getDataAttrs, scale, useScreen, withPrefix } from 'lib/helpers'

import { BoxOwnProps } from './types'
import './styles/box.scss'

export const BOX_DEFAULT_VARIANT: `${BoxVariant}` = 'ghost'
export const BOX_DEFAULT_INTENT: `${BoxIntent}` = 'neutral'

export type BoxProps<E extends ElementType = 'div'> = {
  children?: ReactNode
  elem?: E
  elemProps?: ComponentPropsWithoutRef<E>
  elemRef?: RefObject<ComponentRef<E>>
} & BoxOwnProps

export const Box = <E extends ElementType = 'div'>({
  children,
  elem,
  elemProps,
  elemRef,
  // own
  variant = BOX_DEFAULT_VARIANT,
  intent = BOX_DEFAULT_INTENT,
  interactive,
  disabled,
  ...css
}: BoxProps<E>) => {
  const ref = useRef<ComponentRef<E>>(null)

  const { borderRadius: globalBorderRadius } = useLibStore()
  const { bp } = useScreen()

  useLayoutEffect(() => {
    computeResponsiveCss(elemRef || ref, bp, {
      ...css,
      borderRadius: scale(css.borderRadius !== undefined ? css.borderRadius : globalBorderRadius),
      ...elemProps?.style,
    })
  }, [bp, css])

  const Elem = (elem ?? 'div') as any

  return (
    <Elem
      {...elemProps}
      ref={elemRef || ref}
      className={classNames(withPrefix('box'), elemProps?.className)}
      disabled={disabled}
      {...getDataAttrs('box', { variant, intent, interactive, disabled })}
    >
      {children}
    </Elem>
  )
}

// const Test = () => {
//   return (
//     <Box elem="a" elemProps={{ href: 'href' }} elemRef={useRef<HTMLAnchorElement>(null)} variant="ghost">
//       box
//     </Box>
//   )
// }
