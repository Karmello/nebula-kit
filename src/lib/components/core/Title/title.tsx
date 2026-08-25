import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { Icon } from 'lib/components/core/Icon'
import { Text } from 'lib/components/core/Text'
import { TYPOGRAPHY_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_TITLE_ICON_PLACEMENT, DEFAULT_TITLE_TYPOGRAPHY } from './constants'
import { TitleProps } from './types'

export const Title = ({
  // own
  typography = DEFAULT_TITLE_TYPOGRAPHY,
  iconPlacement = DEFAULT_TITLE_ICON_PLACEMENT,
  // Box
  tagAttrs,
  tagRef,
  color,
  intent,
  // Text
  children,
  // Icon
  iconName,
  customSvgIcon,
  // own
}: TitleProps) => {
  const icon = (
    <Icon
      name={iconName}
      intent={intent}
      color={color}
      size={TYPOGRAPHY_MAP[typography || 'h6'].fontSize}
    >
      {customSvgIcon}
    </Icon>
  )

  const isPlainText = typeof children === 'string' || typeof children === 'number'

  return (
    <Box
      tag="span"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('title'), tagAttrs?.className || ''),
      }}
      tagRef={tagRef}
      color={color}
      intent={intent}
    >
      <Box
        display="flex"
        tag="span"
        flexDirection="row"
        flexWrap="nowrap"
        alignItems="center"
        columnGap={TYPOGRAPHY_MAP[typography || 'h6'].gap}
      >
        {iconPlacement === 'left' ? icon : null}
        {isPlainText ? (
          <Text typography={typography} color={color} intent={intent}>
            {children}
          </Text>
        ) : (
          children
        )}
        {iconPlacement === 'right' ? icon : null}
      </Box>
    </Box>
  )
}

Title.displayName = 'Title'
