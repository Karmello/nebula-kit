import { Button, Link } from 'lib/components'

import { SideNavItemProps } from './definitions'

export const SideNavItem = ({
  // HtmlTag
  tagRef,
  tagAttrs,
  children,
  // Button
  variant,
  intent,
  labelIntent,
  // Link
  href,
  onClick,
}: SideNavItemProps) => {
  return (
    <Link href={href} onClick={onClick}>
      <Button
        tag="a"
        tagRef={tagRef}
        tagAttrs={tagAttrs}
        variant={variant}
        intent={intent}
        labelIntent={labelIntent}
        size="sm"
        fullWidth
      >
        {children}
      </Button>
    </Link>
  )
}

SideNavItem.displayName = 'SideNav.Item'
