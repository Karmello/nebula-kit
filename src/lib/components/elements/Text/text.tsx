import { CSSProperties, ReactNode, Ref } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps, WithIcon, WithIconProps } from 'lib/components'
import { withPrefix, getDataAttrs } from 'lib/helpers'

import './text.scss'

type TextAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
type TextTypography = 'caption' | 'secondary' | 'body' | 'lead' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1'

export type TextOwnProps = Pick<BoxOwnProps, 'intent' | 'fontSize' | 'lineHeight' | 'textAlign'> & {
  typography?: TextTypography
  noWrap?: boolean
  clampLines?: number
  truncate?: boolean
  iconName?: WithIconProps['iconName']
  iconPosition?: WithIconProps['iconPosition']
}

export type TextProps = TextOwnProps & {
  children: ReactNode
  ref?: Ref<any>
  as?: TextAs
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

export const Text = ({
  children,
  ref,
  as,
  intent = 'neutral',
  fontSize,
  lineHeight,
  textAlign,
  typography = 'body',
  noWrap,
  clampLines,
  truncate,
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
