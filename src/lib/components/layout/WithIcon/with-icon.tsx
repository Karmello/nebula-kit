import classNames from 'classnames'

import { Flex, Icon } from 'lib/components'
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
  // own
  position = DEFAULT_WITH_ICON_ICON_POSITION,
}: WithIconProps) => {
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
      {position === 'left' ? <Icon name={name} size={size} intent={intent} /> : null}
      {children}
      {position === 'right' ? <Icon name={name} size={size} intent={intent} /> : null}
    </Flex>
  )
}

WithIcon.displayName = 'WithIcon'
