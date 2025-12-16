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
  // Link
  href,
  onClick,
}: SideNavItemProps) => {
  const { variant: rootVariant, color: rootColor, intent: rootIntent } = useSideNavContext()

  return (
    <Link href={href} onClick={onClick}>
      <Button
        tag="a"
        tagRef={tagRef}
        tagAttrs={{
          ...tagAttrs,
          className: classNames(withPrefix('side-nav-item'), tagAttrs?.className || ''),
        }}
        variant={variant || rootVariant}
        color={color || rootColor}
        intent={intent || rootIntent}
        size="sm"
        fullWidth
      >
        {children}
      </Button>
    </Link>
  )
}

SideNavItem.displayName = 'SideNav.Item'
