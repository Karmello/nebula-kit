import { useCallback, useLayoutEffect } from 'react'
import classNames from 'classnames'

import { Grid, Animate } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { DEFAULT_ANIMATE_DURATION } from 'lib/components/utility/Animate/definitions'

import { ToolbarMainProps } from './definitions'
import { useToolbarContext } from '../../ToolbarProvider'

export const ToolbarMain = ({ children, tagAttrs, tagRef }: ToolbarMainProps) => {
  const { switchAt, mainOpen, setMainOpen, isSwitchAtHit } = useToolbarContext()

  useLayoutEffect(() => {
    setMainOpen(isSwitchAtHit)
  }, [isSwitchAtHit])

  const setMainOpenAsync = useCallback(
    async (mainOpen: boolean) =>
      new Promise<boolean>(resolve => {
        setMainOpen(mainOpen)
        setTimeout(() => resolve(mainOpen), DEFAULT_ANIMATE_DURATION)
      }),
    []
  )

  return (
    <Grid.Item
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('toolbar-main'), tagAttrs?.className),
        style: {
          ...tagAttrs?.style,
          minInlineSize: 0,
        },
        inert: !isSwitchAtHit && !mainOpen,
      }}
      tagRef={tagRef}
      gridRow={{ base: '2 / 3', [String(switchAt)]: '1 / 2' }}
      gridColumn={{ base: '1 / -1', [String(switchAt)]: '3 / 4' }}
      alignSelf="center"
    >
      {!isSwitchAtHit ? (
        <Animate property="blockSize" visible={mainOpen}>
          {typeof children === 'function' ? children({ setMainOpen: setMainOpenAsync, mainOpen }) : children}
        </Animate>
      ) : typeof children === 'function' ? (
        children({ setMainOpen: setMainOpenAsync, mainOpen })
      ) : (
        children
      )}
    </Grid.Item>
  )
}

ToolbarMain.displayName = 'Toolbar.Main'
