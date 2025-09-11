import { Grid } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'
import { DEFAULT_SIDE_PANEL_LAYOUT_SIDE_WITH_DESKTOP, HorizontalPosition } from 'lib/definitions'

import { SidePanelLayoutProvider } from './SidePanelLayoutProvider'
import { SidePanelLayoutProps } from './definitions'

export const SidePanelLayout = ({
  children,
  sidePosition = HorizontalPosition[0],
  sideWidthDesktop = DEFAULT_SIDE_PANEL_LAYOUT_SIDE_WITH_DESKTOP,
}: SidePanelLayoutProps) => {
  return (
    <WithSlots
      componentName="SidePanelLayout"
      main="required"
      sideDesktop="required"
      sideMobile="required"
      header="optional"
      childrenToVerify={children}
    >
      {slots => {
        return (
          <SidePanelLayoutProvider
            sidePosition={sidePosition}
            sideWidthDesktop={sideWidthDesktop}
            slots={slots}
          >
            <Grid
              elemProps={{ className: withPrefix('side-panel-layout') }}
              gridTemplateColumns={{
                md: sidePosition === 'left' ? 'auto minmax(0, 1fr)' : 'minmax(0, 1fr) auto',
              }}
            >
              {sidePosition === 'right' ? slots.Main : null}
              {slots.SideDesktop}
              {sidePosition === 'left' ? slots.Main : null}
              {slots.SideMobile}
            </Grid>
          </SidePanelLayoutProvider>
        )
      }}
    </WithSlots>
  )
}
