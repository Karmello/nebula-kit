import { LinkButton } from 'lib/components'

import { SideNavItemProps } from './definitions'

export const SideNavItem = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  children,
  // LinkButton
  href,
  onClick,
  variant,
  intent,
  labelIntent,
}: SideNavItemProps) => {
  return (
    <LinkButton
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      onClick={onClick}
      href={href}
      variant={variant}
      intent={intent}
      labelIntent={labelIntent}
      size="sm"
      fullWidth
    >
      {children}
    </LinkButton>
  )
}

SideNavItem.displayName = 'SideNav.Item'
