import { Box, BoxProps, useSidePanelLayout } from 'lib/components'
import { Slot } from 'lib/definitions'
import { scale, useScreen } from 'lib/helpers'

export const SideDesktop = (props: Omit<BoxProps, 'as' | 'inlineSize' | 'blockSize' | 'overflowX'>) => {
  const { isMobile, isDesktop } = useScreen()
  const { sideOpen, sideWidthDesktop } = useSidePanelLayout()

  return (
    <Box
      {...props}
      as="aside"
      inlineSize={isDesktop && sideOpen ? scale(sideWidthDesktop) : 0}
      blockSize={isMobile ? 0 : undefined}
      overflowX="hidden"
    />
  )
}

SideDesktop.slotName = Slot.sideDesktop
