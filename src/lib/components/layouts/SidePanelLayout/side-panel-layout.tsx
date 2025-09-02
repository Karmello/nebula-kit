import { ReactNode } from 'react'

import { Grid, WithSlots } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { HorizontalPosition, ScaleValue } from 'lib/definitions'

import { SidePanelLayoutProvider } from './SidePanelLayoutProvider'

export type SidePanelLayoutOwnProps = {
  children: ReactNode
  sidePosition?: Extract<HorizontalPosition, 'left' | 'right'>
  sideWidthDesktop?: ScaleValue | string
}

export const SidePanelLayout = ({
  children,
  sidePosition = 'left',
  sideWidthDesktop = '225px',
}: SidePanelLayoutOwnProps) => {
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
