import { CSSProperties, ReactNode, Ref } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps, WithIcon, WithIconOwnProps } from 'lib/components'
import { withPrefix, getDataAttrs } from 'lib/helpers'
import { TextTypography } from 'lib/definitions'

import './text.scss'

type TextAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'

export type TextOwnProps = {
  /** Underlying HTML tag to render for the text element (defaults to the tag implied by typography) */
  as?: TextAs
  /** Semantic color/style intent for the text (e.g. neutral, success, danger) */
  intent?: BoxOwnProps['intent']
  /** Explicit font size override; falls back to preset from typography */
  fontSize?: BoxOwnProps['fontSize']
  /** Line height of the text */
  lineHeight?: BoxOwnProps['lineHeight']
  /** Horizontal text alignment (e.g. left, right, center) */
  textAlign?: BoxOwnProps['textAlign']
} & {
  /** Typography preset mapping to tag and font size (h1–h6, body, lead, etc.) */
  typography?: TextTypography
  /** Prevents wrapping, rendering all text on a single line */
  italic?: boolean
  noWrap?: boolean
  /** Truncates overflowing text with an ellipsis */
  truncate?: boolean
  /** Number of lines before truncating with line-clamp */
  clampLines?: number
  /** Optional icon name to display alongside text */
  iconName?: WithIconOwnProps['iconName']
  /** Position of the icon relative to the text (left or right) */
  iconPosition?: WithIconOwnProps['iconPosition']
}

export type TextProps = TextOwnProps & {
  children: ReactNode
  ref?: Ref<any>
  className?: string
  style?: CSSProperties
}

const TYPOGRAPHY_TO_PROPS: Record<
  TextTypography,
  {
    as: TextAs
    fontSize: BoxOwnProps['fontSize']
  }
> = {
  caption: { as: 'p', fontSize: 6 },
  secondary: { as: 'p', fontSize: 7 },
  body: { as: 'p', fontSize: 8 },
  lead: { as: 'p', fontSize: 9 },
  h6: { as: 'h6', fontSize: 10 },
  h5: { as: 'h5', fontSize: 12 },
  h4: { as: 'h4', fontSize: 15 },
  h3: { as: 'h3', fontSize: 18 },
  h2: { as: 'h2', fontSize: 24 },
  h1: { as: 'h1', fontSize: 30 },
}

/** Text is a polymorphic typography component built on Box. It maps semantic variants (h1-h6, body, lead, secondary, caption) to matching HTML tags and font sizes, while also exposing fine-grained props for alignment, wrapping, truncation, line-clamping, and optional icons. It’s meant to be the single entry point for consistent text styling across the system. */
export const Text = ({
  children,
  ref,
  as,
  intent = 'neutral',
  fontSize,
  lineHeight = 'normal',
  textAlign = 'initial',
  typography = 'body',
  italic = false,
  noWrap = false,
  truncate = false,
  clampLines,
  iconName,
  iconPosition,
  className,
  style,
  ...rest
}: TextProps) => {
  const preset = { ...TYPOGRAPHY_TO_PROPS[typography] }

  return (
    <Box
      ref={ref}
      as={as || TYPOGRAPHY_TO_PROPS[typography].as}
      className={classNames(withPrefix('text'), className)}
      variant="ghost"
      intent={intent}
      fontSize={fontSize ?? preset.fontSize}
      lineHeight={lineHeight}
      textAlign={textAlign}
      style={{
        ...(clampLines && clampLines > 0
          ? {
              display: '-webkit-box',
              WebkitLineClamp: clampLines,
              WebkitBoxOrient: 'vertical' as const,
              overflow: 'hidden',
            }
          : {}),
        ...(italic ? { fontStyle: 'italic' } : {}),
        ...(noWrap ? { whiteSpace: 'nowrap' } : {}),
        ...(truncate ? { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } : {}),
        ...style,
      }}
      {...getDataAttrs('text', { typography })}
      {...rest}
    >
      <WithIcon iconName={iconName} iconPosition={iconPosition}>
        {children}
      </WithIcon>
    </Box>
  )
}

Text.displayName = 'Text'
