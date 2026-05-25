import { useCallback } from 'react'

import { Grid } from 'lib/components'
import { DEFAULT_RESIZE_DURATION } from 'lib/components/core/Resize'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'
import { DEFAULT_SWITCH_AT } from 'lib/definitions'
import { buildStaticDataset } from 'lib/internals/dom'

import { SplitViewProvider, useSplitViewContext } from './SplitViewProvider'
import { SPLIT_VIEW_SIDE_POSITIONS, SplitViewProps } from './definitions'

import './split-view.scss'

const SplitViewComponent = ({
  // Grid
  children,
  tagAttrs,
  tagRef,
}: SplitViewProps) => {
  const { mode, setSideOpen, sidePosition } = useSplitViewContext()

  const setSideOpenASync = useCallback(
    async (sideOpen: boolean) =>
      new Promise<boolean>(resolve => {
        setSideOpen(sideOpen)
        setTimeout(() => resolve(sideOpen), DEFAULT_RESIZE_DURATION)
      }),
    []
  )

  const finalChildren = typeof children === 'function' ? children({ setSideOpen: setSideOpenASync, mode }) : children

  return (
    <WithSlots<'SplitView.Main' | 'SplitView.Side'>
      componentName="SplitView"
      slotsConfig={[
        { name: 'SplitView.Main', required: true },
        { name: 'SplitView.Side', required: true },
      ]}
      childrenToVerify={finalChildren}
    >
      {({ slotsByName }) => {
        return (
          <Grid
            tagAttrs={{
              ...tagAttrs,
              className: withPrefix('split-view'),
              ...buildStaticDataset('SplitView', { mode }),
            }}
            tagRef={tagRef}
            gridTemplateColumns={sidePosition === 'left' ? 'auto minmax(0, 1fr)' : 'minmax(0, 1fr) auto'}
            gridTemplateRows="1fr"
          >
            {sidePosition === 'left' ? slotsByName['SplitView.Side'] : null}
            {slotsByName['SplitView.Main']}
            {sidePosition === 'right' ? slotsByName['SplitView.Side'] : null}
          </Grid>
        )
      }}
    </WithSlots>
  )
}

export const SplitView = ({
  // Grid
  children,
  tagAttrs,
  tagRef,
  // own
  sidePosition = SPLIT_VIEW_SIDE_POSITIONS[0],
  switchAt = DEFAULT_SWITCH_AT,
}: SplitViewProps) => {
  return (
    <SplitViewProvider sidePosition={sidePosition} switchAt={switchAt}>
      <SplitViewComponent tagAttrs={tagAttrs} tagRef={tagRef}>
        {children}
      </SplitViewComponent>
    </SplitViewProvider>
  )
}

SplitView.displayName = 'SplitView'
