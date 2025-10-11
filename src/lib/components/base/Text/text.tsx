import { ComponentRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { withPrefix, useScreen } from 'lib/helpers'
import { Box, WithIcon } from 'lib/components'
import { applyRespValues, applyStaticDataset } from 'lib/service'

import { DEFAULT_TEXT_TYPOGRAPHY, TEXT_TYPOGRAPHY_CONFIG, TextTag, TextProps } from './definitions'

import './text.scss'

export const Text = <T extends TextTag = 'p'>({
  // own
  typography = DEFAULT_TEXT_TYPOGRAPHY,
  bold = false,
  italic = false,
  underline = false,
  noWrap = false,
  truncate = false,
  clampLines,
  // Box
  children,
  tag,
  tagAttrs,
  tagRef,
  intent,
  textAlign,
  // WithIcon
  iconName,
  iconPosition,
}: TextProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    applyRespValues('style', tagRef || ref, bp, {
      fontSize: TEXT_TYPOGRAPHY_CONFIG[typography].fontSize,
      lineHeight: TEXT_TYPOGRAPHY_CONFIG[typography].lineHeight,
    })
  }, [bp])

  return (
    <Box
      tag={tag || TEXT_TYPOGRAPHY_CONFIG[typography].tag}
      tagRef={(tagRef || ref) as any}
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('text'), tagAttrs?.className),
        style: {
          ...(clampLines && clampLines > 0
            ? {
                display: '-webkit-box',
                WebkitLineClamp: clampLines,
                WebkitBoxOrient: 'vertical' as const,
                overflow: 'hidden',
                borderRadius: 0,
              }
            : {}),
          ...(tagAttrs?.style || {}),
        },
        ...applyStaticDataset('text', { typography, bold, italic, underline, noWrap, truncate }),
      }}
      variant="ghost"
      intent={intent}
      textAlign={textAlign}
    >
      {iconName ? (
        <WithIcon name={iconName} position={iconPosition} size={TEXT_TYPOGRAPHY_CONFIG[typography].iconSize}>
          {children}
        </WithIcon>
      ) : (
        children
      )}
    </Box>
  )
}

Text.displayName = 'Text'
