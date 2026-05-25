import classNames from 'classnames'

import { Box } from 'lib/components'
import { buildStaticDataset } from 'lib/internals/dom'
import { TEXT_TYPOGRAPHY_MAP } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_TEXT_TYPOGRAPHY, TextTag, TextProps } from './definitions'

import './text.scss'

export const Text = <T extends TextTag = 'p'>({
  // Box
  children,
  tag,
  tagAttrs,
  tagRef,
  color,
  intent,
  textAlign,
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
}: TextProps<T>) => {
  return (
    <Box
      tag={tag || TEXT_TYPOGRAPHY_MAP[typography].tag}
      tagRef={tagRef as any}
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('text'), tagAttrs?.className),
        style: {
          fontSize: fontSize ?? TEXT_TYPOGRAPHY_MAP[typography].fontSize,
          lineHeight: lineHeight ?? TEXT_TYPOGRAPHY_MAP[typography].lineHeight,
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
      }}
      drawable
      variant="ghost"
      intent={intent}
      color={color}
      textAlign={textAlign}
      interactive={tag === 'a'}
    >
      {space === 'start' || space === 'both' ? <> </> : null}
      {children}
      {space === 'end' || space === 'both' ? <> </> : null}
    </Box>
  )
}

Text.displayName = 'Text'
