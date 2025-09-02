import classNames from 'classnames'

import { Box, BoxProps, useSidePanelLayout } from 'lib/components'
import { scale, useScreen, withPrefix } from 'lib/helpers'
import { Slot } from 'lib/definitions'

import '../../side-panel-layout.scss'

export const SideDesktop = ({ elemProps, ...rest }: Omit<BoxProps<'aside'>, 'elem'>) => {
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
      blockSize={isMobile ? 0 : '100%'}
    />
  )
}

SideDesktop.slotName = Slot.sideDesktop
