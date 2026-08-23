import { ComponentProps, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { TYPOGRAPHY_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { TextProps } from 'lib/index.core'
import { buildStaticDataset } from 'lib/internals/dom'

import { Box } from '../Box'
import { DEFAULT_TEXT_TYPOGRAPHY } from './constants'
import { TextTag } from './types'

import './text.scss'

export const Text = <T extends TextTag = 'p'>({
  // own
  typography = DEFAULT_TEXT_TYPOGRAPHY,
  fontSize,
  lineHeight,
  wordBreak,
  bold,
  italic,
  underline,
  noWrap,
  truncate,
  clampLines,
  space,
  // Box
  children,
  tag,
  tagAttrs,
  tagRef,
  ...boxProps
}: TextProps<T>) => {
  const resolvedTag = tag || TYPOGRAPHY_MAP[typography].tag

  return (
    <Box
      tag={resolvedTag}
      tagRef={tagRef as any}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('text'), tagAttrs?.className),
          style: {
            fontSize: fontSize ?? TYPOGRAPHY_MAP[typography].fontSize,
            lineHeight: lineHeight ?? TYPOGRAPHY_MAP[typography].lineHeight,
            wordBreak,
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
          ...buildStaticDataset('Text', { typography, bold, italic, underline, noWrap, truncate }),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      drawable
      variant="ghost"
      interactive={resolvedTag === 'a'}
      {...boxProps}
    >
      {space === 'start' || space === 'both' ? <> </> : null}
      {children}
      {space === 'end' || space === 'both' ? <> </> : null}
    </Box>
  )
}

Text.displayName = 'Text'
