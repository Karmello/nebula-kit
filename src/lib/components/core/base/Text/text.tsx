import classNames from 'classnames'

import { Box, WithIcon } from 'lib/components'
import { updateDomStaticDataset } from 'lib/service'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_TEXT_TYPOGRAPHY, TEXT_TYPOGRAPHY_MAP, TextTag, TextProps } from './definitions'

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
  disabled,
  // WithIcon
  iconName,
  iconPlacement,
  iconAngle,
  customSvgIcon,
  justifyContent,
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
          iconAngle={iconAngle}
          iconSize={TEXT_TYPOGRAPHY_MAP[typography].iconSize}
          customSvgIcon={customSvgIcon}
          justifyContent={justifyContent}
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
