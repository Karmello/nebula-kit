import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { withPrefix } from 'lib/helpers'
import { useSlots } from 'lib/hooks'

import { SideNavToggle } from './components'
import {
  DEFAULT_SIDE_NAV_EXPAND_MODE,
  DEFAULT_SIDE_NAV_GAP,
  DEFAULT_SIDE_NAV_INTENT,
  DEFAULT_SIDE_NAV_SCALE,
  DEFAULT_SIDE_NAV_VARIANT,
} from './constants'
import { SideNavProvider } from './providers/SideNavProvider'
import { SideNavProps } from './types'

import './side-nav.scss'

export const SideNav = ({
  children,
  elemAttrs,
  elemRef,
  variant = DEFAULT_SIDE_NAV_VARIANT,
  intent = DEFAULT_SIDE_NAV_INTENT,
  color,
  scale = DEFAULT_SIDE_NAV_SCALE,
  gap = DEFAULT_SIDE_NAV_GAP,
  expandMode = DEFAULT_SIDE_NAV_EXPAND_MODE,
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
        elemTag="nav"
        className={classNames(withPrefix('side-nav'), elemAttrs?.className || '')}
        elemAttrs={elemAttrs}
        elemRef={elemRef}
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
