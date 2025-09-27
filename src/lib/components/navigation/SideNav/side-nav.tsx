import { WithSlots } from 'lib/components/internal'
import { Box } from 'lib/components'

import { SideNavProvider } from './SideNavProvider'
import { SideNavToggle } from './components'
import { DEFAULT_SIDE_NAV_EXPAND_MODE, SideNavProps } from './definitions'

export const SideNav = ({
  tagAttrs,
  tagRef,
  children,
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
        <SideNavProvider expandMode={expandMode}>
          {slots['SideNav.Category'].length ? <SideNavToggle /> : null}
          <Box tag="nav" tagAttrs={tagAttrs} tagRef={tagRef}>
            {validNodes}
          </Box>
        </SideNavProvider>
      )}
    </WithSlots>
  )
}

SideNav.displayName = 'SideNav'
