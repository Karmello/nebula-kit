import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { Button, Link } from 'lib/index.core'
import { SideNavItemProps } from 'lib/index.pro'

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
        scale={scale}
        fullWidth
        bold={bold}
        customSvgIcon={customSvgIcon}
        iconName={iconName}
        iconPlacement={iconPlacement}
        align={align}
        elevated={elevated}
        selected={selected}
      >
        {children}
      </Button>
    </Link>
  )
}

SideNavItem.displayName = 'SideNav.Item'
