import { ComponentRef, useEffect, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, Grid } from 'lib/components'
import { Breakpoint, BREAKPOINTS } from 'lib/definitions'
import { useScreen, withPrefix } from 'lib/helpers'

import { ToolbarMainProps } from './definitions'
import { useToolbarContext } from '../../ToolbarProvider'

export const ToolbarMain = ({ children, tagAttrs, tagRef }: ToolbarMainProps) => {
  const ref = useRef<ComponentRef<'div'>>(null)
  const height = useRef<string>('')

  const { switchAt, mainOpen, setMainOpen } = useToolbarContext()
  const { bp } = useScreen()

  const isSwitchAtHit = BREAKPOINTS.indexOf(bp) >= BREAKPOINTS.indexOf(switchAt as Breakpoint)

  useEffect(() => {
    height.current = `${tagRef ? tagRef.current?.scrollHeight : ref.current?.scrollHeight}px`
  }, [])

  useLayoutEffect(() => {
    if (isSwitchAtHit) {
      setMainOpen(false)
    }
  }, [bp, isSwitchAtHit])

  return (
    <Grid.Item
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('toolbar-main'), tagAttrs?.className),
        style: {
          ...tagAttrs?.style,
          minInlineSize: 0,
        },
      }}
      tagRef={tagRef || ref}
      gridRow={{ base: '2 / 3', [String(switchAt)]: '1 / 2' }}
      gridColumn={{ base: '1 / -1', [String(switchAt)]: '3 / 4' }}
      alignSelf="center"
    >
      <Box blockSize={!isSwitchAtHit ? (mainOpen ? height.current : '0px') : 'auto'} overflowY="hidden">
        {children}
      </Box>
    </Grid.Item>
  )
}

ToolbarMain.displayName = 'Toolbar.Main'
ToolbarMain.slotName = 'Main'
