import { ButtonLink } from 'lib/components'

import { SideNavItemProps } from './definitions'

export const SideNavItem = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  children,
  // ButtonLink
  href,
  onClick,
  variant,
  intent,
  labelIntent,
}: SideNavItemProps) => {
  return (
    <ButtonLink
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
    </ButtonLink>
  )
}

SideNavItem.displayName = 'SideNav.Item'
