import { ComponentRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { withPrefix, getDataAttrs, useScreen, computeResponsiveCss } from 'lib/helpers'
import { DEFAULT_TEXT_TYPOGRAPHY, TextElem } from 'lib/definitions'
import { Box, WithIcon } from 'lib/components'

import { TEXT_TYPOGRAPHY_CONFIG, TextProps } from './definitions'

import './text.scss'

export const Text = <E extends TextElem = 'p'>({
  // own
  typography = DEFAULT_TEXT_TYPOGRAPHY,
  fontSize,
  lineHeight,
  bold = false,
  italic = false,
  noWrap = false,
  truncate = false,
  clampLines,
  // box
  children,
  elem,
  elemProps,
  elemRef,
  intent,
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
    })
  }, [bp, fontSize, lineHeight])

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
    >
      {iconName ? (
        <WithIcon iconName={iconName} iconPosition={iconPosition}>
          {children}
        </WithIcon>
      ) : (
        children
      )}
    </Box>
  )
}

Text.displayName = 'Text'
