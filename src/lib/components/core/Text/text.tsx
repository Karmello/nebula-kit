import { ComponentProps, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { TYPOGRAPHY_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { buildStaticDataset } from 'lib/internals/dom'

import { Box } from '../Box'
import { DEFAULT_TEXT_TYPOGRAPHY } from './constants'
import { TextProps, TextTag } from './types'

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
  elemTag,
  elemAttrs,
  elemRef,
  ...boxProps
}: TextProps<T>) => {
  const resolvedTag = elemTag || TYPOGRAPHY_MAP[typography].tag

  return (
    <Box
      elemTag={resolvedTag}
      elemRef={elemRef as any}
      className={classNames(withPrefix('text'), elemAttrs?.className)}
      elemAttrs={
        {
          ...elemAttrs,
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
            ...(elemAttrs?.style || {}),
          },
          ...buildStaticDataset('Text', { typography, bold, italic, underline, noWrap, truncate }),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      drawable
      textMode="colored"
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
