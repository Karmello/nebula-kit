import { ElementType, ComponentRef, useRef, useLayoutEffect } from 'react'
import classNames from 'classnames'

import { useLibStore } from 'lib/state'
import { NativeElem, NativeElemProps } from 'lib/components'
import { BoxIntent, BoxVariant } from 'lib/definitions'
import { computeResponsiveCss, getDataAttrs, scale, useScreen, withPrefix } from 'lib/helpers'

import { BoxOwnProps } from './types'
import './styles/box.scss'

export const BOX_DEFAULT_VARIANT: `${BoxVariant}` = 'ghost'
export const BOX_DEFAULT_INTENT: `${BoxIntent}` = 'neutral'

export type BoxProps<E extends ElementType = 'div'> = NativeElemProps<E> & BoxOwnProps

export const Box = <E extends ElementType = 'div'>({
  // native elem
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

  return (
    <NativeElem
      elem={elem}
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('box'), elemProps?.className),
        disabled,
        ...getDataAttrs('box', { variant, intent, interactive, disabled }),
      }}
      elemRef={elemRef || ref}
    >
      {children}
    </NativeElem>
  )
}
