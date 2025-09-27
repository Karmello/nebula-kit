import { Grid } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix, useScreen } from 'lib/helpers'
import { BREAKPOINTS, DEFAULT_SWITCH_AT } from 'lib/definitions'
import { applyStaticDataset } from 'lib/service'

import { SplitViewMode, SplitViewProvider } from './SplitViewProvider'
import { SplitViewProps, SplitViewSidePosition } from './definitions'

import './split-view.scss'

export const SplitView = ({
  // Grid
  children,
  tagAttrs,
  tagRef,
  // own
  sidePosition = SplitViewSidePosition[0],
  switchAt = DEFAULT_SWITCH_AT,
}: SplitViewProps) => {
  const { bp } = useScreen()

  const mode: SplitViewMode = BREAKPOINTS.slice(0, BREAKPOINTS.indexOf(switchAt)).includes(bp)
    ? 'overlay'
    : 'inline'

  return (
    <WithSlots<'SplitView.Main' | 'SplitView.MainBar' | 'SplitView.Side'>
      componentName="SplitView"
      slotsConfig={[
        { name: 'SplitView.Main', required: true },
        { name: 'SplitView.MainBar' },
        { name: 'SplitView.Side', required: true },
      ]}
      childrenToVerify={children}
    >
      {({ slots }) => {
        return (
          <SplitViewProvider slots={slots} mode={mode} sidePosition={sidePosition} switchAt={switchAt}>
            <Grid
              tagAttrs={{
                ...tagAttrs,
                className: withPrefix('split-view'),
                ...applyStaticDataset('split-view', { mode }),
              }}
              tagRef={tagRef}
              gridTemplateColumns={sidePosition === 'left' ? 'auto minmax(0, 1fr)' : 'minmax(0, 1fr) auto'}
              gridTemplateRows="1fr"
            >
              {sidePosition === 'right' ? slots['SplitView.Main'] : null}
              {slots['SplitView.Side']}
              {sidePosition === 'left' ? slots['SplitView.Main'] : null}
            </Grid>
          </SplitViewProvider>
        )
      }}
    </WithSlots>
  )
}

SplitView.displayName = 'SplitView'
