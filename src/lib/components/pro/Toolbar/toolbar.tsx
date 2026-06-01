import { useCallback } from 'react'
import classNames from 'classnames'

import { WithSlots } from 'lib/components/shared'
import { Grid } from 'lib/components'
import { DEFAULT_RESIZE_DURATION } from 'lib/components/core/Resize'
import { withPrefix } from 'lib/helpers'
import { DEFAULT_SWITCH_AT } from 'lib/constants'

import { ToolbarProvider, useToolbarContext } from './ToolbarProvider'
import { ToolbarToggle } from './ToolbarToggle'
import { ToolbarProps } from './definitions'

import './toolbar.scss'

const ToolbarComponent = ({ children, tagAttrs, tagRef }: ToolbarProps) => {
  const { mainOpen, setMainOpen } = useToolbarContext()

  const setMainOpenAsync = useCallback(
    async (mainOpen: boolean) =>
      new Promise<boolean>(resolve => {
        setMainOpen(mainOpen)
        setTimeout(() => resolve(mainOpen), DEFAULT_RESIZE_DURATION)
      }),
    []
  )

  const finalChildren = typeof children === 'function' ? children({ setMainOpen: setMainOpenAsync, mainOpen }) : children

  return (
    <WithSlots<'Toolbar.Start' | 'Toolbar.Main' | 'Toolbar.End'>
      componentName="Toolbar"
      slotsConfig={[{ name: 'Toolbar.Start' }, { name: 'Toolbar.Main', required: true }, { name: 'Toolbar.End' }]}
      childrenToVerify={finalChildren}
    >
      {({ slotsByName }) => (
        <Grid
          tag="nav"
          tagAttrs={{
            ...tagAttrs,
            className: classNames(withPrefix('toolbar'), tagAttrs?.className),
          }}
          tagRef={tagRef}
          gridTemplateColumns="auto auto 1fr auto"
          gridAutoFlow="row"
        >
          <ToolbarToggle />
          {slotsByName['Toolbar.Start']}
          {slotsByName['Toolbar.Main']}
          {slotsByName['Toolbar.End']}
        </Grid>
      )}
    </WithSlots>
  )
}

export const Toolbar = ({ children, tagAttrs, tagRef, switchAt = DEFAULT_SWITCH_AT }: ToolbarProps) => {
  return (
    <ToolbarProvider switchAt={switchAt}>
      <ToolbarComponent tagAttrs={tagAttrs} tagRef={tagRef} switchAt={switchAt}>
        {children}
      </ToolbarComponent>
    </ToolbarProvider>
  )
}

Toolbar.displayName = 'Toolbar'
