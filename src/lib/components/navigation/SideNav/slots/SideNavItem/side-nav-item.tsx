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
  borderRadius,
}: SideNavItemProps) => {
  return (
    <LinkButton
      tagAttrs={{
        ...tagAttrs,
        style: { ...tagAttrs?.style, inlineSize: '100%' },
      }}
      tagRef={tagRef}
      onClick={onClick}
      href={href}
      variant={variant}
      intent={intent}
      labelIntent={labelIntent}
      borderRadius={borderRadius}
      size="sm"
    >
      {children}
    </LinkButton>
  )
}

SideNavItem.displayName = 'SideNav.Item'
