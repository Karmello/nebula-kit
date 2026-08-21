import { useCallback } from 'react'

import { DEFAULT_RESIZE_DURATION } from 'lib/components/core/Resize'
import { WithSlots } from 'lib/components/shared'
import { DEFAULT_SWITCH_BREAKPOINT } from 'lib/constants'
import { Box } from 'lib/index.core'

import { SPLIT_VIEW_SIDE_POSITIONS, type SplitViewProps } from './definitions'
import { SplitViewProvider, useSplitViewContext } from './SplitViewProvider'

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

  const finalChildren =
    typeof children === 'function' ? children({ setSideOpen: setSideOpenASync, mode }) : children

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
          <Box
            display="grid"
            tagRef={tagRef}
            tagAttrs={{
              ...tagAttrs,
              style: {
                ...tagAttrs?.style,
                blockSize: '100%',
              },
            }}
            gridTemplateColumns={
              sidePosition === 'left' ? 'auto minmax(0, 1fr)' : 'minmax(0, 1fr) auto'
            }
            gridTemplateRows="1fr"
          >
            {sidePosition === 'left' ? slotsByName['SplitView.Side'] : null}
            {slotsByName['SplitView.Main']}
            {sidePosition === 'right' ? slotsByName['SplitView.Side'] : null}
          </Box>
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
  switchAt = DEFAULT_SWITCH_BREAKPOINT,
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
