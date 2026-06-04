import classNames from 'classnames'

import { TEXT_TYPOGRAPHY_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { Flex, Icon, Rotate, TitleProps } from 'lib/index.core'

import { DEFAULT_TEXT_TYPOGRAPHY } from '../Text'
import { DEFAULT_TITLE_GAP, DEFAULT_TITLE_ICON_PLACEMENT } from './definitions'

export const Title = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  inlineSize,
  // Flex
  justifyContent,
  gap = DEFAULT_TITLE_GAP,
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
  iconPlacement = DEFAULT_TITLE_ICON_PLACEMENT,
}: TitleProps) => {
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
    <Flex
      tag="span"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('title'), tagAttrs?.className || ''),
      }}
      tagRef={tagRef}
      inlineSize={inlineSize}
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
  )
}

Title.displayName = 'Title'
