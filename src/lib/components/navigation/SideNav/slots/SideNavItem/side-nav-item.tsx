import { Button } from 'lib/components'

import { useSideNavContext } from '../../SideNavProvider'
import { SideNavItemProps } from './definitions'

export const SideNavItem = ({ tagAttrs, tagRef, children, variant, intent }: SideNavItemProps) => {
  const { variant: rootVariant, intent: rootIntent } = useSideNavContext()

  return (
    <Button
      tag="a"
      tagAttrs={{
        ...tagAttrs,
        style: { ...tagAttrs?.style, inlineSize: '100%' },
      }}
      tagRef={tagRef}
      variant={variant || rootVariant}
      intent={intent || rootIntent}
      size="sm"
    >
      {children}
    </Button>
  )
}

SideNavItem.displayName = 'SideNav.Item'
