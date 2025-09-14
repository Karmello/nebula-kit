import { Grid } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix, getDataAttrs, useScreen } from 'lib/helpers'
import { BREAKPOINTS, DEFAULT_SIDE_PANEL_LAYOUT_SWITCH_AT, HorizontalPosition } from 'lib/definitions'

import { SidePanelLayoutMode, SidePanelLayoutProvider } from './SidePanelLayoutProvider'
import { SidePanelLayoutProps } from './definitions'

import './side-panel-layout.scss'

export const SidePanelLayout = ({
  // Grid
  children,
  elemProps,
  elemRef,
  // own
  sidePosition = HorizontalPosition[0],
  switchAt = DEFAULT_SIDE_PANEL_LAYOUT_SWITCH_AT,
}: SidePanelLayoutProps) => {
  const { bp } = useScreen()

  const mode: SidePanelLayoutMode = BREAKPOINTS.slice(0, BREAKPOINTS.indexOf(switchAt)).includes(bp)
    ? 'overlay'
    : 'inline'

  return (
    <WithSlots<'Main' | 'MainBar' | 'Side'>
      componentName="SidePanelLayout"
      slotsConfig={[{ name: 'Main', required: true }, { name: 'MainBar' }, { name: 'Side', required: true }]}
      childrenToVerify={children}
    >
      {slots => {
        return (
          <SidePanelLayoutProvider slots={slots} mode={mode} sidePosition={sidePosition} switchAt={switchAt}>
            <Grid
              elemProps={{
                ...elemProps,
                className: withPrefix('side-panel-layout'),
                ...getDataAttrs('side-panel-layout', { mode }),
              }}
              elemRef={elemRef}
              gridTemplateColumns={sidePosition === 'left' ? 'auto minmax(0, 1fr)' : 'minmax(0, 1fr) auto'}
              gridTemplateRows="1fr"
            >
              {sidePosition === 'right' ? slots.Main : null}
              {slots.Side}
              {sidePosition === 'left' ? slots.Main : null}
            </Grid>
          </SidePanelLayoutProvider>
        )
      }}
    </WithSlots>
  )
}
