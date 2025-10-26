import classNames from 'classnames'

import { Box, WithIcon } from 'lib/components'
import { applyStaticDataset } from 'lib/service'
import { scaleToPixels, withPrefix } from 'lib/helpers'

import { DEFAULT_TEXT_TYPOGRAPHY, TEXT_TYPOGRAPHY_CONFIG, TextTag, TextProps } from './definitions'

import './text.scss'

export const Text = <T extends TextTag = 'p'>({
  // HtmlTag
  children,
  tag,
  tagAttrs,
  tagRef,
  // Box
  intent,
  textAlign,
  // WithIcon
  iconName,
  iconPosition,
  // own
  typography = DEFAULT_TEXT_TYPOGRAPHY,
  bold = false,
  italic = false,
  underline = false,
  noWrap = false,
  truncate = false,
  clampLines,
  space,
}: TextProps<T>) => {
  return (
    <Box
      tag={tag || TEXT_TYPOGRAPHY_CONFIG[typography].tag}
      tagRef={tagRef as any}
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('text'), tagAttrs?.className),
        style: {
          fontSize: scaleToPixels(TEXT_TYPOGRAPHY_CONFIG[typography].fontSize),
          lineHeight: TEXT_TYPOGRAPHY_CONFIG[typography].lineHeight,
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
      {space === 'start' || space === 'both' ? <> </> : null}
      {iconName ? (
        <WithIcon name={iconName} position={iconPosition} size={TEXT_TYPOGRAPHY_CONFIG[typography].iconSize}>
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
