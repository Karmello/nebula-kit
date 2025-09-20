import { useLayoutEffect } from 'react'
import classNames from 'classnames'

import { Box, Grid } from 'lib/components'
import { Breakpoint, BREAKPOINTS } from 'lib/definitions'
import { useScreen, withPrefix } from 'lib/helpers'

import { ToolbarMainProps } from './definitions'
import { useToolbarContext } from '../../ToolbarProvider'

export const ToolbarMain = ({ children, elemProps, elemRef }: ToolbarMainProps) => {
  const { switchAt, mainOpen, setMainOpen } = useToolbarContext()
  const { bp } = useScreen()

  const isSwitchAtHit = BREAKPOINTS.indexOf(bp) >= BREAKPOINTS.indexOf(switchAt as Breakpoint)

  useLayoutEffect(() => {
    if (BREAKPOINTS.indexOf(bp) >= BREAKPOINTS.indexOf(switchAt as Breakpoint)) {
      setMainOpen(false)
    }
  }, [isSwitchAtHit])

  return (
    <Grid.Item
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('toolbar-main'), elemProps?.className),
        style: {
          ...elemProps?.style,
          minInlineSize: 0,
        },
      }}
      elemRef={elemRef}
      gridRow={{ base: '2 / 3', [String(switchAt)]: '1 / 2' }}
      gridColumn={{ base: '1 / -1', [String(switchAt)]: '3 / 4' }}
    >
      <Box display={mainOpen || isSwitchAtHit ? 'block' : 'none'}>{children}</Box>
    </Grid.Item>
  )
}

ToolbarMain.displayName = 'Toolbar.Main'
ToolbarMain.slotName = 'Main'
