import { useLayoutEffect } from 'react'

import { Box, BoxProps, Flex, IconButton, Spacer, useSidePanelLayout } from 'lib/components'
import { Slot } from 'lib/definitions'
import { useScreen } from 'lib/helpers'

import { getToggleIconName } from '../../helpers'

export const Main = ({ children, ...rest }: Omit<BoxProps, 'as' | 'minBlockSize'>) => {
  const { isMobile, isDesktop } = useScreen()
  const { sideOpen, setSideOpen, sidePosition, slots } = useSidePanelLayout()

  useLayoutEffect(() => {
    if (isMobile) {
      setSideOpen(false)
    }
  }, [isMobile])

  useLayoutEffect(() => {
    if (isDesktop) {
      setSideOpen(true)
    }
  }, [isDesktop])

  return (
    <Box {...rest} as="section" minInlineSize={0}>
      <Flex align="center" direction={sidePosition === 'left' ? 'row' : 'row-reverse'} gap={10}>
        <IconButton
          iconName={getToggleIconName(sidePosition, sideOpen)}
          intent="tertiary"
          size="sm"
          onClick={() => setSideOpen(!sideOpen)}
        />
        {slots.Header}
      </Flex>
      <Spacer size={10} />
      <Box>{children}</Box>
    </Box>
  )
}

Main.slotName = Slot.main
