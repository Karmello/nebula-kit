import { useLayoutEffect } from 'react'
import classNames from 'classnames'

import { Box, Flex, IconButton, Spacer, useSidePanelLayout } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { Slot } from 'lib/definitions'

import { SidePanelLayoutMainProps } from './definitions'
import { getToggleIconName } from '../../helpers'

export const Main = ({ children, elemProps, elemRef, ...paddings }: SidePanelLayoutMainProps) => {
  const { sideOpen, setSideOpen, sidePosition, slots, mode } = useSidePanelLayout()

  useLayoutEffect(() => {
    setSideOpen(mode === 'inline')
  }, [mode])

  return (
    <Box
      elem="section"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('side-panel-layout-main'), elemProps?.className),
      }}
      elemRef={elemRef}
      {...paddings}
    >
      <Flex alignItems="center" flexDirection={sidePosition === 'left' ? 'row' : 'row-reverse'} gap={7}>
        <IconButton
          elemProps={{
            onClick: () => setSideOpen(!sideOpen),
          }}
          iconName={getToggleIconName(sidePosition, sideOpen)}
          intent="tertiary"
          size="sm"
        />
        {slots.MainBar}
      </Flex>
      <Spacer size={5} />
      <Box>{children}</Box>
    </Box>
  )
}

Main.displayName = 'SidePanelLayout.Main'
Main.slotName = Slot.main
