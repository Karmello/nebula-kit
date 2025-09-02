import { useLayoutEffect } from 'react'
import classNames from 'classnames'

import { Box, Flex, IconButton, Spacer, useSidePanelLayout } from 'lib/components'
import { useScreen, withPrefix } from 'lib/helpers'
import { LayoutSlotProps, Slot } from 'lib/definitions'

import { getToggleIconName } from '../../helpers'

import '../../side-panel-layout.scss'

export const Main = ({ children, elemProps, ...rest }: LayoutSlotProps<'main'>) => {
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
    <Box
      {...rest}
      elem="section"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('side-panel-layout-main'), elemProps?.className),
      }}
    >
      <Flex alignItems="center" flexDirection={sidePosition === 'left' ? 'row' : 'row-reverse'} gap={10}>
        <IconButton
          elemProps={{
            onClick: () => setSideOpen(!sideOpen),
          }}
          iconName={getToggleIconName(sidePosition, sideOpen)}
          intent="tertiary"
          size="sm"
        />
        {slots.Header}
      </Flex>
      <Spacer size={10} />
      <Box>{children}</Box>
    </Box>
  )
}

Main.slotName = Slot.main
