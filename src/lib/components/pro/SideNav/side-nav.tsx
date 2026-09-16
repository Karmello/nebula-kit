import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { withPrefix } from 'lib/helpers'
import { useSlots } from 'lib/hooks'

import { SideNavToggle } from './components'
import {
  DEFAULT_SIDE_NAV_EXPAND_MODE,
  DEFAULT_SIDE_NAV_GAP,
  DEFAULT_SIDE_NAV_SCALE,
} from './constants'
import { SideNavProvider } from './providers/SideNavProvider'
import { SideNavProps } from './types'

import './side-nav.scss'

export const SideNav = ({
  // Flex
  children,
  tagAttrs,
  tagRef,
  gap = DEFAULT_SIDE_NAV_GAP,
  color,
  intent,
  // own
  scale = DEFAULT_SIDE_NAV_SCALE,
  expandMode = DEFAULT_SIDE_NAV_EXPAND_MODE,
  variant,
}: SideNavProps) => {
  const slots = useSlots<'SideNav.Category' | 'SideNav.Item'>({
    componentName: 'SideNav',
    slotsConfig: [
      { name: 'SideNav.Category', allowMultiple: true },
      { name: 'SideNav.Item', allowMultiple: true },
    ],
    someRequired: true,
    childrenToVerify: children,
  })

  if (!slots) return null

  const { slotsByName, allValidSlots } = slots

  return (
    <SideNavProvider
      expandMode={expandMode}
      variant={variant}
      color={color}
      intent={intent}
      scale={scale}
      gap={gap}
    >
      <Box
        display="flex"
        tag="nav"
        className={classNames(withPrefix('side-nav'), tagAttrs?.className || '')}
        tagAttrs={tagAttrs}
        tagRef={tagRef}
        flexDirection="column"
        gap={gap}
      >
        {slotsByName['SideNav.Category'].length ? <SideNavToggle /> : null}
        {allValidSlots}
      </Box>
    </SideNavProvider>
  )
}

SideNav.displayName = 'SideNav'
