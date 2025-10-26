import { CSSProperties } from 'react'

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
      tagAttrs={{
        ...tagAttrs,
        style: { ...tagAttrs?.style, '--neb-border-radius': 0 } as CSSProperties,
      }}
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
