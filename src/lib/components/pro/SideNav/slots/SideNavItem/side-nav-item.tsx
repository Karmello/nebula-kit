import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { Icon } from 'lib/components/core/Icon'
import { Link } from 'lib/components/core/Link'
import { Text } from 'lib/components/core/Text'
import { CONTROL_SCALE_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'

import { useSideNavContext } from '../../providers/SideNavProvider'
import { DEFAULT_SIDE_NAV_ITEM_ALIGN, DEFAULT_SIDE_NAV_ITEM_ICON_PLACEMENT } from './constants'
import { SideNavItemProps } from './types'

export const SideNavItem = ({
  tagRef,
  tagAttrs,
  children,
  variant,
  color,
  intent,
  // own
  align = DEFAULT_SIDE_NAV_ITEM_ALIGN,
  bold,
  customSvgIcon,
  iconName,
  iconPlacement = DEFAULT_SIDE_NAV_ITEM_ICON_PLACEMENT,
  surfaceDepth,
  selected,
  // Link
  href,
  onClick,
  ...props
}: SideNavItemProps) => {
  const {
    variant: rootVariant,
    color: rootColor,
    intent: rootIntent,
    expandedCategories,
    scale,
  } = useSideNavContext()

  const { categoryId } = props || ({} as any)

  const icon =
    iconName || customSvgIcon ? (
      <Icon name={iconName} size={CONTROL_SCALE_MAP[scale].fontSize}>
        {customSvgIcon}
      </Icon>
    ) : null

  return (
    <Link href={href} onClick={onClick}>
      <Box
        tag="button"
        tagRef={tagRef}
        interactive
        display="flex"
        alignItems="center"
        justifyContent={
          align === 'split' ? 'space-between' : align === 'center' ? 'center' : 'flex-start'
        }
        cursor="pointer"
        columnGap={CONTROL_SCALE_MAP[scale].gap}
        tagAttrs={{
          ...tagAttrs,
          className: classNames(withPrefix('side-nav-item'), tagAttrs?.className || ''),
          tabIndex: expandedCategories[categoryId] === false ? -1 : undefined,
          'aria-expanded': expandedCategories[categoryId],
        }}
        variant={variant || rootVariant}
        color={color || rootColor}
        intent={intent || rootIntent}
        surfaceDepth={surfaceDepth}
        surfaceRole={selected ? 'selection' : undefined}
        inlineSize="100%"
        blockSize={CONTROL_SCALE_MAP[scale].blockSize}
        paddingInline={CONTROL_SCALE_MAP[scale].paddingInline}
        ripple
      >
        {iconPlacement === 'left' ? icon : null}
        <Text
          bold={bold}
          fontSize={CONTROL_SCALE_MAP[scale].fontSize}
          lineHeight={CONTROL_SCALE_MAP[scale].lineHeight}
          textAlign={align === 'center' ? 'center' : undefined}
        >
          {children}
        </Text>
        {iconPlacement === 'right' ? icon : null}
      </Box>
    </Link>
  )
}

SideNavItem.displayName = 'SideNav.Item'
