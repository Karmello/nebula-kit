import classNames from 'classnames'

import { Flex, Icon, Rotate } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_WITH_ICON_COLUMN_GAP, DEFAULT_WITH_ICON_ICON_POSITION, WithIconProps } from './definitions'

export const WithIcon = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Flex
  justifyContent,
  columnGap = DEFAULT_WITH_ICON_COLUMN_GAP,
  // Icon
  name,
  size,
  intent,
  // Rotate
  iconAngle,
  // own
  position = DEFAULT_WITH_ICON_ICON_POSITION,
}: WithIconProps) => {
  const icon = <Icon name={name} size={size} intent={intent} />

  return (
    <Flex
      tag="span"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('with-icon'), tagAttrs?.className || ''),
      }}
      tagRef={tagRef}
      alignItems="center"
      flexDirection="row"
      flexWrap="nowrap"
      justifyContent={justifyContent}
      columnGap={columnGap}
    >
      {position === 'left' ? (
        iconAngle !== undefined ? (
          <Rotate angle={iconAngle}>{icon}</Rotate>
        ) : (
          icon
        )
      ) : null}
      {children}
      {position === 'right' ? (
        iconAngle !== undefined ? (
          <Rotate angle={iconAngle}>{icon}</Rotate>
        ) : (
          icon
        )
      ) : null}
    </Flex>
  )
}

WithIcon.displayName = 'WithIcon'
