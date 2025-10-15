import { WithSlots } from 'lib/components/internal'
import { Flex } from 'lib/components'

import { SideNavProvider } from './SideNavProvider'
import { SideNavToggle } from './components'
import { DEFAULT_SIDE_NAV_EXPAND_MODE, SideNavProps } from './definitions'

export const SideNav = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  children,
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
      {({ slotsByName, allValidSlots }) => (
        <SideNavProvider expandMode={expandMode}>
          <Flex tag="nav" tagAttrs={tagAttrs} tagRef={tagRef} flexDirection="column" gap={2}>
            {slotsByName['SideNav.Category'].length ? <SideNavToggle /> : null}
            {allValidSlots}
          </Flex>
        </SideNavProvider>
      )}
    </WithSlots>
  )
}

SideNav.displayName = 'SideNav'
