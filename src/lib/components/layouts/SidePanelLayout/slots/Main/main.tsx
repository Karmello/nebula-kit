import { useLayoutEffect } from 'react'
import classNames from 'classnames'

import { Box, BoxProps, Flex, IconButton, Spacer, useSidePanelLayout } from 'lib/components'
import { useScreen, withPrefix } from 'lib/helpers'
import { Slot } from 'lib/definitions'

import { getToggleIconName } from '../../helpers'

export const Main = ({ children, elemProps, ...rest }: Omit<BoxProps<'main'>, 'elem'>) => {
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
      elem="section"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('side-panel-layout-main'), elemProps?.className),
      }}
      {...rest}
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
