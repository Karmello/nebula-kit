import classNames from 'classnames'

import { Box, WithIcon } from 'lib/components'
import { updateDomStaticDataset } from 'lib/service'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_TEXT_TYPOGRAPHY, DEFAULT_TEXT_SCALE, TextTag, TextProps } from './definitions'

import './text.scss'
import { FONT_SIZE_TOKENS } from 'lib/definitions'

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
  disabled,
  // WithIcon
  iconName,
  iconPlacement,
  customSvgIcon,
  // own
  scale = DEFAULT_TEXT_SCALE,
  typography = DEFAULT_TEXT_TYPOGRAPHY,
  fontSize,
  lineHeight,
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
      tag={tag || FONT_SIZE_TOKENS[scale][typography].tag}
      tagRef={tagRef as any}
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('text'), tagAttrs?.className),
        style: {
          fontSize: fontSize ?? FONT_SIZE_TOKENS[scale][typography].fontSize,
          lineHeight: lineHeight ?? FONT_SIZE_TOKENS[scale][typography].lineHeight,
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
        ...updateDomStaticDataset('Text', { typography, bold, italic, underline, noWrap, truncate }),
      }}
      drawable
      variant="ghost"
      intent={intent}
      color={color}
      textAlign={textAlign}
      interactive={tag === 'a'}
      disabled={disabled}
    >
      {space === 'start' || space === 'both' ? <> </> : null}
      {iconName || customSvgIcon ? (
        <WithIcon
          iconName={iconName}
          iconPlacement={iconPlacement}
          iconSize={FONT_SIZE_TOKENS[scale][typography].iconSize}
          customSvgIcon={customSvgIcon}
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
