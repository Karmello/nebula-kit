import classNames from 'classnames'

import { WithSlots } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'
import { Flex } from 'lib/index.core'
import { SideNavProps } from 'lib/index.pro'

import { SideNavToggle } from './components'
import {
  DEFAULT_SIDE_NAV_EXPAND_MODE,
  DEFAULT_SIDE_NAV_GAP,
  DEFAULT_SIDE_NAV_SCALE,
} from './definitions'
import { SideNavProvider } from './SideNavProvider'

import './side-nav.scss'

export const SideNav = ({
  // Flex
  children,
  tagAttrs,
  tagRef,
  gap = DEFAULT_SIDE_NAV_GAP,
  // Button
  color,
  intent,
  scale = DEFAULT_SIDE_NAV_SCALE,
  // own
  expandMode = DEFAULT_SIDE_NAV_EXPAND_MODE,
  variant,
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
        <SideNavProvider
          expandMode={expandMode}
          variant={variant}
          color={color}
          intent={intent}
          scale={scale}
          gap={gap}
        >
          <Flex
            tag="nav"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('side-nav'), tagAttrs?.className || ''),
            }}
            tagRef={tagRef}
            flexDirection="column"
            gap={gap}
          >
            {slotsByName['SideNav.Category'].length ? <SideNavToggle /> : null}
            {allValidSlots}
          </Flex>
        </SideNavProvider>
      )}
    </WithSlots>
  )
}

SideNav.displayName = 'SideNav'
