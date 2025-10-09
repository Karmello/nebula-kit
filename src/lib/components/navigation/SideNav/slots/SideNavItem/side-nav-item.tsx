import { Button } from 'lib/components'

import { SideNavItemProps } from './definitions'

export const SideNavItem = ({
  tagAttrs,
  tagRef,
  children,
  variant,
  intent,
  labelIntent,
}: SideNavItemProps) => {
  return (
    <Button
      tag="a"
      tagAttrs={{
        ...tagAttrs,
        style: { ...tagAttrs?.style, inlineSize: '100%' },
      }}
      tagRef={tagRef}
      variant={variant}
      intent={intent}
      labelIntent={labelIntent}
      size="sm"
    >
      {children}
    </Button>
  )
}

SideNavItem.displayName = 'SideNav.Item'
