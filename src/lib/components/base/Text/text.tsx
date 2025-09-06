import { ComponentRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, BoxPaddingProps, BoxProps, WithIcon, WithIconOwnProps } from 'lib/components'
import { withPrefix, getDataAttrs, useScreen, computeResponsiveCss } from 'lib/helpers'

import {
  DEFAULT_TEXT_TYPOGRAPHY,
  ResponsiveProp,
  ScaleValue,
  TextElem,
  TextTypography,
} from 'lib/definitions'

import { TEXT_TYPOGRAPHY_CONFIG } from './definitions'
import './text.scss'

export type TextOwnProps = {
  typography?: `${TextTypography}`
  fontSize?: ResponsiveProp<ScaleValue | string>
  lineHeight?: ResponsiveProp<number | string>
  bold?: boolean
  italic?: boolean
  noWrap?: boolean
  truncate?: boolean
  clampLines?: number
}

export type TextProps<E extends TextElem> = Omit<
  BoxProps<E>,
  'display' | 'variant' | 'interactive' | 'borderRadius' | keyof BoxPaddingProps
> &
  Pick<WithIconOwnProps, 'iconName' | 'iconPosition'> &
  TextOwnProps

export const Text = <E extends TextElem = 'p'>({
  children,
  elem,
  elemProps,
  elemRef,
  intent,
  fontSize,
  lineHeight,
  textAlign,
  typography = DEFAULT_TEXT_TYPOGRAPHY,
  bold = false,
  italic = false,
  noWrap = false,
  truncate = false,
  clampLines,
  iconName,
  iconPosition,
  ...boxProps
}: TextProps<E>) => {
  const ref = useRef<ComponentRef<E>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    computeResponsiveCss(elemRef || ref, bp, {
      fontSize: fontSize !== undefined ? fontSize : TEXT_TYPOGRAPHY_CONFIG[typography].fontSize,
      lineHeight: lineHeight !== undefined ? lineHeight : TEXT_TYPOGRAPHY_CONFIG[typography].lineHeight,
      textAlign,
    })
  }, [bp, fontSize, lineHeight, textAlign])

  return (
    <Box
      {...boxProps}
      elem={elem || TEXT_TYPOGRAPHY_CONFIG[typography].elem}
      elemRef={(elemRef || ref) as any}
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('text'), elemProps?.className),
        style: {
          color: intent ? `var(--neb-text-${intent})` : undefined,
          ...(clampLines && clampLines > 0
            ? {
                display: '-webkit-box',
                WebkitLineClamp: clampLines,
                WebkitBoxOrient: 'vertical' as const,
                overflow: 'hidden',
              }
            : {}),
          ...(elemProps?.style || {}),
        },
        ...getDataAttrs('text', { typography, bold, italic, noWrap, truncate }),
      }}
      variant="ghost"
      textAlign={textAlign}
    >
      <WithIcon iconName={iconName} iconPosition={iconPosition}>
        {children}
      </WithIcon>
    </Box>
  )
}

Text.displayName = 'Text'
