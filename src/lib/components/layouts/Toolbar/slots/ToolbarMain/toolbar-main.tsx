import { useLayoutEffect } from 'react'
import classNames from 'classnames'

import { Grid, Animate } from 'lib/components'
import { Breakpoint, BREAKPOINTS } from 'lib/definitions'
import { useScreen, withPrefix } from 'lib/helpers'

import { ToolbarMainProps } from './definitions'
import { useToolbarContext } from '../../ToolbarProvider'

export const ToolbarMain = ({ children, tagAttrs, tagRef }: ToolbarMainProps) => {
  const { switchAt, mainOpen, setMainOpen } = useToolbarContext()
  const { bp } = useScreen()

  const isSwitchAtHit = BREAKPOINTS.indexOf(bp) >= BREAKPOINTS.indexOf(switchAt as Breakpoint)

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
      tagRef={tagRef}
      gridRow={{ base: '2 / 3', [String(switchAt)]: '1 / 2' }}
      gridColumn={{ base: '1 / -1', [String(switchAt)]: '3 / 4' }}
      alignSelf="center"
    >
      {!isSwitchAtHit ? (
        <Animate property="blockSize" visible={mainOpen}>
          {children}
        </Animate>
      ) : (
        children
      )}
    </Grid.Item>
  )
}

ToolbarMain.displayName = 'Toolbar.Main'
