import classNames from 'classnames'

import { TYPOGRAPHY_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { Box, Flex, Icon, Text, TitleProps } from 'lib/index.core'

import { DEFAULT_TITLE_ICON_PLACEMENT, DEFAULT_TITLE_TYPOGRAPHY } from './constants'

export const Title = ({
  // own
  typography = DEFAULT_TITLE_TYPOGRAPHY,
  iconPlacement = DEFAULT_TITLE_ICON_PLACEMENT,
  // Flex
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
    <Icon name={iconName} intent={intent} color={color} size={TYPOGRAPHY_MAP[typography || 'h6'].fontSize}>
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
      <Flex
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
      </Flex>
    </Box>
  )
}

Title.displayName = 'Title'
