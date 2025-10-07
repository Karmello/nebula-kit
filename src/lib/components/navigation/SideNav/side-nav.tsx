import { WithSlots } from 'lib/components/internal'
import { Flex } from 'lib/components'

import { SideNavProvider } from './SideNavProvider'
import { SideNavToggle } from './components'

import {
  DEFAULT_SIDE_NAV_EXPAND_MODE,
  DEFAULT_SIDE_NAV_INTENT,
  DEFAULT_SIDE_NAV_VARIANT,
  SideNavProps,
} from './definitions'

export const SideNav = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  children,
  // Box
  variant = DEFAULT_SIDE_NAV_VARIANT,
  intent = DEFAULT_SIDE_NAV_INTENT,
  // own
  expandMode = DEFAULT_SIDE_NAV_EXPAND_MODE,
}: SideNavProps) => {
  return (
    <WithSlots<'SideNav.Category' | 'SideNav.Item'>
      componentName="SideNav"
      slotsConfig={[
        { name: 'SideNav.Category', allowMultiple: true },
        { name: 'SideNav.Item', allowMultiple: true },
      ]}
      someRequired
      childrenToVerify={children}
    >
      {({ slots, validNodes }) => (
        <SideNavProvider variant={variant} intent={intent} expandMode={expandMode}>
          <Flex tag="nav" tagAttrs={tagAttrs} tagRef={tagRef} flexDirection="column" gap={2}>
            {slots['SideNav.Category'].length ? <SideNavToggle /> : null}
            {validNodes}
          </Flex>
        </SideNavProvider>
      )}
    </WithSlots>
  )
}

SideNav.displayName = 'SideNav'
