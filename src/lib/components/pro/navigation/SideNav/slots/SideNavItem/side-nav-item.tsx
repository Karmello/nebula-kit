import classNames from 'classnames'

import { Button, Link } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { SideNavItemProps } from './definitions'
import { useSideNavContext } from '../../SideNavProvider'

export const SideNavItem = ({
  // HtmlTag
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
  justifyContent,
  elevated,
  selected,
  // Link
  href,
  onClick,
  ...props
}: SideNavItemProps) => {
  const { variant: rootVariant, color: rootColor, intent: rootIntent, expandedCategories } = useSideNavContext()

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
        size="sm"
        fullWidth
        bold={bold}
        customSvgIcon={customSvgIcon}
        iconName={iconName}
        iconPlacement={iconPlacement}
        justifyContent={justifyContent}
        elevated={elevated}
        selected={selected}
      >
        {children}
      </Button>
    </Link>
  )
}

SideNavItem.displayName = 'SideNav.Item'
