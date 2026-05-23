import classNames from 'classnames'

import { Button, Link } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { SideNavItemProps } from './definitions'
import { useSideNavContext } from '../../SideNavProvider'

export const SideNavItem = ({
  tagRef,
  tagAttrs,
  children,
  // Button
  variant,
  color,
  intent,
  bold,
  customSvgIcon,
  iconName,
  iconPlacement,
  align,
  elevated,
  selected,
  description,
  // Link
  href,
  onClick,
  ...props
}: SideNavItemProps) => {
  const { variant: rootVariant, color: rootColor, intent: rootIntent, expandedCategories, size } = useSideNavContext()

  const { categoryId } = props || ({} as any)

  return (
    <Link href={href} onClick={onClick}>
      <Button
        tag="a"
        tagRef={tagRef}
        tagAttrs={{
          ...tagAttrs,
          className: classNames(withPrefix('side-nav-item'), tagAttrs?.className || ''),
          tabIndex: expandedCategories[categoryId] === false ? -1 : undefined,
          'aria-expanded': expandedCategories[categoryId],
        }}
        variant={variant || rootVariant}
        color={color || rootColor}
        intent={intent || rootIntent}
        size={size}
        fullWidth
        bold={bold}
        customSvgIcon={customSvgIcon}
        iconName={iconName}
        iconPlacement={iconPlacement}
        align={align}
        elevated={elevated}
        selected={selected}
        description={description}
      >
        {children}
      </Button>
    </Link>
  )
}

SideNavItem.displayName = 'SideNav.Item'
