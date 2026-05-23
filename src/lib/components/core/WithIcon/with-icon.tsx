import classNames from 'classnames'

import { Box, Flex, Icon, Rotate } from 'lib/components'
import { TEXT_TYPOGRAPHY_MAP } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_WITH_ICON_GAP, DEFAULT_WITH_ICON_ICON_PLACEMENT, WithIconProps } from './definitions'
import { DEFAULT_TEXT_TYPOGRAPHY } from '../Text'

export const WithIcon = ({
  // Box
  children,
  tagAttrs,
  tagRef,
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
  iconTypography = DEFAULT_TEXT_TYPOGRAPHY,
  iconPlacement = DEFAULT_WITH_ICON_ICON_PLACEMENT,
}: WithIconProps) => {
  const icon = (
    <Icon
      name={iconName}
      size={iconSize !== undefined ? iconSize : TEXT_TYPOGRAPHY_MAP[iconTypography].iconSize}
      intent={iconIntent}
      color={iconColor}
    >
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
        tag="span"
        alignItems="center"
        flexDirection="row"
        flexWrap="nowrap"
        justifyContent={justifyContent === 'space-between' && iconPlacement === 'left' ? 'flex-start' : justifyContent}
        gap={gap}
      >
        {iconPlacement === 'left' ? iconAngle !== undefined ? <Rotate angle={iconAngle}>{icon}</Rotate> : icon : null}
        {children}
        {iconPlacement === 'right' ? iconAngle !== undefined ? <Rotate angle={iconAngle}>{icon}</Rotate> : icon : null}
      </Flex>
    </Box>
  )
}

WithIcon.displayName = 'WithIcon'
