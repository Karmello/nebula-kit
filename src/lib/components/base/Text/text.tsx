import { ComponentRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, BoxPaddingProps, BoxProps, ButtonOwnProps, WithIcon } from 'lib/components'
import { withPrefix, getDataAttrs, useScreen, computeResponsiveCss } from 'lib/helpers'

import { CssTextAlign, ResponsiveProp, ScaleValue, TextElem, TextTypography } from 'lib/definitions'

import './text.scss'

type TextElemUnion = `${TextElem}`

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
    elem: `${TextElemUnion}`
    fontSize: TextOwnProps['fontSize']
  }
> = {
  caption: { elem: 'p', fontSize: 6 },
  secondary: { elem: 'p', fontSize: 7 },
  body: { elem: 'p', fontSize: 8 },
  lead: { elem: 'p', fontSize: 9 },
  h6: { elem: 'h6', fontSize: 10 },
  h5: { elem: 'h5', fontSize: 12 },
  h4: { elem: 'h4', fontSize: 15 },
  h3: { elem: 'h3', fontSize: 18 },
  h2: { elem: 'h2', fontSize: 24 },
  h1: { elem: 'h1', fontSize: 30 },
}

export const TEXT_DEFAULT_LINE_HEIGHT = 'normal'
export const TEXT_DEFAULT_TEXT_ALIGN: `${CssTextAlign}` = 'start'
export const TEXT_DEFAULT_TYPOGRAPHY: `${TextTypography}` = 'body'

export type TextProps<E extends TextElemUnion> = Omit<
  BoxProps<E>,
  'display' | 'variant' | 'interactive' | 'borderRadius' | keyof BoxPaddingProps
> &
  Pick<ButtonOwnProps, 'iconName' | 'iconPosition'> &
  TextOwnProps

export const Text = <E extends TextElemUnion = 'p'>({
  children,
  elem,
  elemProps,
  elemRef,
  intent,
  fontSize,
  lineHeight = TEXT_DEFAULT_LINE_HEIGHT,
  textAlign = TEXT_DEFAULT_TEXT_ALIGN,
  typography = TEXT_DEFAULT_TYPOGRAPHY,
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
      lineHeight,
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
