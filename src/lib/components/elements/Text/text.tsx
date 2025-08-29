import { CSSProperties, ReactNode, Ref } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps, WithIcon, WithIconOwnProps } from 'lib/components'
import { BoxIntent, CssTextAlign, ResponsiveProp, ScaleValue, TextAs, TextTypography } from 'lib/definitions'
import { withPrefix, getDataAttrs, getCssVars } from 'lib/helpers'

import './text.scss'

export type TextOwnProps = {
  as?: `${TextAs}`
  textAlign?: BoxOwnProps['textAlign']
} & {
  intent?: `${BoxIntent}`
  typography?: `${TextTypography}`
  fontSize?: ResponsiveProp<ScaleValue | string>
  lineHeight?: ResponsiveProp<number | string>
  bold?: boolean
  italic?: boolean
  noWrap?: boolean
  truncate?: boolean
  clampLines?: number
  iconName?: WithIconOwnProps['iconName']
  iconPosition?: WithIconOwnProps['iconPosition']
}

export type TextProps = TextOwnProps & {
  children: ReactNode
  ref?: Ref<any>
  className?: string
  style?: CSSProperties
}

export const TYPOGRAPHY_TO_PROPS: Record<
  TextTypography,
  {
    as: `${TextAs}`
    fontSize: TextOwnProps['fontSize']
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

export const TEXT_DEFAULT_INTENT: `${BoxIntent}` = 'neutral'
export const TEXT_DEFAULT_LINE_HEIGHT = 'normal'
export const TEXT_DEFAULT_TEXT_ALIGN: `${CssTextAlign}` = 'start'
export const TEXT_DEFAULT_TYPOGRAPHY: `${TextTypography}` = 'body'

export const Text = ({
  children,
  ref,
  as,
  intent = TEXT_DEFAULT_INTENT,
  fontSize,
  lineHeight = TEXT_DEFAULT_LINE_HEIGHT,
  textAlign = TEXT_DEFAULT_TEXT_ALIGN,
  typography = TEXT_DEFAULT_TYPOGRAPHY,
  bold = false,
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
  return (
    <Box
      ref={ref}
      as={as || TYPOGRAPHY_TO_PROPS[typography].as}
      className={classNames(withPrefix('text'), className)}
      variant="ghost"
      textAlign={textAlign}
      style={{
        color: intent ? `var(--neb-text-${intent})` : undefined,
        ...(clampLines && clampLines > 0
          ? {
              display: '-webkit-box',
              WebkitLineClamp: clampLines,
              WebkitBoxOrient: 'vertical' as const,
              overflow: 'hidden',
            }
          : {}),
        ...(bold ? { fontWeight: 'bold' } : {}),
        ...(italic ? { fontStyle: 'italic' } : {}),
        ...(noWrap ? { whiteSpace: 'nowrap' } : {}),
        ...(truncate ? { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } : {}),
        ...getCssVars('text', {
          fontSize: fontSize !== undefined ? fontSize : TYPOGRAPHY_TO_PROPS[typography].fontSize,
          lineHeight,
        }),
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
