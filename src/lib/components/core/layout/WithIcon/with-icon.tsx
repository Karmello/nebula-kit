import classNames from 'classnames'

import { Box, Flex, Icon, Rotate } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_WITH_ICON_GAP, DEFAULT_WITH_ICON_ICON_PLACEMENT, WithIconProps } from './definitions'

export const WithIcon = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Box
  inlineSize,
  // Flex
  justifyContent,
  gap = DEFAULT_WITH_ICON_GAP,
  // Icon
  iconName,
  iconSize,
  iconIntent,
  iconColor,
  customSvgIcon,
  // Rotate
  iconAngle,
  // own
  iconPlacement = DEFAULT_WITH_ICON_ICON_PLACEMENT,
}: WithIconProps) => {
  const icon = (
    <Icon name={iconName} size={iconSize} intent={iconIntent} color={iconColor}>
      {customSvgIcon}
    </Icon>
  )

  return (
    <Box
      tag="span"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('with-icon'), tagAttrs?.className || ''),
      }}
      tagRef={tagRef}
      inlineSize={inlineSize}
    >
      <Flex
        alignItems="center"
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent={justifyContent}
        gap={gap}
      >
        {iconPlacement === 'left' ? (
          iconAngle !== undefined ? (
            <Rotate angle={iconAngle}>{icon}</Rotate>
          ) : (
            icon
          )
        ) : null}
        {children}
        {iconPlacement === 'right' ? (
          iconAngle !== undefined ? (
            <Rotate angle={iconAngle}>{icon}</Rotate>
          ) : (
            icon
          )
        ) : null}
      </Flex>
    </Box>
  )
}

WithIcon.displayName = 'WithIcon'
