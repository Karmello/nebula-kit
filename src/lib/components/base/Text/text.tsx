import { ComponentRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, BoxPaddingProps, BoxProps, ButtonOwnProps, WithIcon } from 'lib/components'
import { withPrefix, getDataAttrs, useScreen, computeResponsiveCss } from 'lib/helpers'

import {
  DEFAULT_TEXT_TYPOGRAPHY,
  ResponsiveProp,
  ScaleValue,
  TextElem,
  TextTypography,
} from 'lib/definitions'

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

export const TYPOGRAPHY_TO_PROPS: Record<
  TextTypography,
  {
    elem: TextElem
    fontSize: TextOwnProps['fontSize']
    lineHeight: TextOwnProps['lineHeight']
  }
> = {
  caption: { elem: 'p', fontSize: 6, lineHeight: 1.4 },
  secondary: { elem: 'p', fontSize: 7, lineHeight: 1.5 },
  body: { elem: 'p', fontSize: 8, lineHeight: 1.6 },
  lead: { elem: 'p', fontSize: 9, lineHeight: 1.6 },
  h6: { elem: 'h6', fontSize: 10, lineHeight: 1.3 },
  h5: { elem: 'h5', fontSize: 12, lineHeight: 1.3 },
  h4: { elem: 'h4', fontSize: 15, lineHeight: 1.25 },
  h3: { elem: 'h3', fontSize: 18, lineHeight: 1.25 },
  h2: { elem: 'h2', fontSize: 24, lineHeight: 1.2 },
  h1: { elem: 'h1', fontSize: 30, lineHeight: 1.1 },
}

export type TextProps<E extends TextElem> = Omit<
  BoxProps<E>,
  'display' | 'variant' | 'interactive' | 'borderRadius' | keyof BoxPaddingProps
> &
  Pick<ButtonOwnProps, 'iconName' | 'iconPosition'> &
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
      fontSize: fontSize || TYPOGRAPHY_TO_PROPS[typography].fontSize,
      lineHeight: lineHeight || TYPOGRAPHY_TO_PROPS[typography].lineHeight,
      textAlign,
    })
  }, [bp, fontSize, lineHeight, textAlign])

  return (
    <Box
      {...boxProps}
      elem={elem || TYPOGRAPHY_TO_PROPS[typography].elem}
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
