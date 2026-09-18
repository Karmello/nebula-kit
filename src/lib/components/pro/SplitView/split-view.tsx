import { useCallback } from 'react'

import { Box } from 'lib/components/core/Box'
import { DEFAULT_RESIZE_DURATION } from 'lib/components/core/Resize'
import { DEFAULT_SWITCH_BREAKPOINT } from 'lib/constants'
import { useSlots } from 'lib/hooks'

import { SPLIT_VIEW_SIDE_POSITIONS } from './constants'
import { SplitViewProvider, useSplitViewContext } from './providers/SplitViewProvider'
import { type SplitViewProps } from './types'

const SplitViewComponent = ({
  // Grid
  children,
  elemAttrs,
  elemRef,
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

  const slots = useSlots<'SplitView.Main' | 'SplitView.Side'>({
    componentName: 'SplitView',
    slotsConfig: [
      { name: 'SplitView.Main', required: true },
      { name: 'SplitView.Side', required: true },
    ],
    childrenToVerify: finalChildren,
  })

  if (!slots) return null

  const { slotsByName } = slots

  return (
    <Box
      display="grid"
      elemRef={elemRef}
      elemAttrs={{
        ...elemAttrs,
        style: {
          ...elemAttrs?.style,
          blockSize: '100%',
        },
      }}
      gridTemplateColumns={sidePosition === 'left' ? 'auto minmax(0, 1fr)' : 'minmax(0, 1fr) auto'}
      gridTemplateRows="1fr"
    >
      {sidePosition === 'left' ? slotsByName['SplitView.Side'] : null}
      {slotsByName['SplitView.Main']}
      {sidePosition === 'right' ? slotsByName['SplitView.Side'] : null}
    </Box>
  )
}

export const SplitView = ({
  // Grid
  children,
  elemAttrs,
  elemRef,
  // own
  sidePosition = SPLIT_VIEW_SIDE_POSITIONS[0],
  switchAt = DEFAULT_SWITCH_BREAKPOINT,
}: SplitViewProps) => {
  return (
    <SplitViewProvider sidePosition={sidePosition} switchAt={switchAt}>
      <SplitViewComponent elemAttrs={elemAttrs} elemRef={elemRef}>
        {children}
      </SplitViewComponent>
    </SplitViewProvider>
  )
}

SplitView.displayName = 'SplitView'
