import classNames from 'classnames'

import { Box, useSidePanelLayout } from 'lib/components'
import { scale, useScreen, withPrefix } from 'lib/helpers'
import { LayoutSlotProps, Slot } from 'lib/definitions'

import '../../side-panel-layout.scss'

export const SideDesktop = ({ children, elemProps, ...rest }: LayoutSlotProps<'aside'>) => {
  const { isMobile, isDesktop } = useScreen()
  const { sideOpen, sideWidthDesktop } = useSidePanelLayout()

  return (
    <Box
      {...rest}
      elem="aside"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('side-panel-layout-side-desktop'), elemProps?.className),
      }}
      inlineSize={isDesktop && sideOpen ? scale(sideWidthDesktop) : 0}
    >
      <Box display={isMobile ? 'none' : 'block'}>{children}</Box>
    </Box>
  )
}

SideDesktop.displayName = 'SidePanelLayout.SideDesktop'
SideDesktop.slotName = Slot.sideDesktop
