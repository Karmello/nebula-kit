import classNames from 'classnames'

import { Box, WithIcon } from 'lib/components'
import { applyStaticDataset } from 'lib/service'
import { withPrefix, resolveScale } from 'lib/helpers'

import {
  TEXT_TYPOGRAPHY_CONFIG,
  DEFAULT_TEXT_TYPOGRAPHY,
  DEFAULT_TEXT_SCALE,
  TextTag,
  TextProps,
} from './definitions'

import './text.scss'

export const Text = <T extends TextTag = 'p'>({
  // HtmlTag
  children,
  tag,
  tagAttrs,
  tagRef,
  // Box
  color,
  intent,
  textAlign,
  // WithIcon
  iconName,
  iconPosition,
  // own
  typography = DEFAULT_TEXT_TYPOGRAPHY,
  scale = DEFAULT_TEXT_SCALE,
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
      tag={tag || TEXT_TYPOGRAPHY_CONFIG[scale][typography].tag}
      tagRef={tagRef as any}
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('text'), tagAttrs?.className),
        style: {
          fontSize: resolveScale(TEXT_TYPOGRAPHY_CONFIG[scale][typography].fontSize),
          lineHeight: TEXT_TYPOGRAPHY_CONFIG[scale][typography].lineHeight,
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
      color={color}
      textAlign={textAlign}
      interactive={tag === 'a'}
    >
      {space === 'start' || space === 'both' ? <> </> : null}
      {iconName ? (
        <WithIcon
          name={iconName}
          position={iconPosition}
          size={TEXT_TYPOGRAPHY_CONFIG[scale][typography].iconSize}
        >
          {children}
        </WithIcon>
      ) : (
        children
      )}
      {space === 'end' || space === 'both' ? <> </> : null}
    </Box>
  )
}

Text.displayName = 'Text'
