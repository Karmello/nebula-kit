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

/** SidePanelLayout arranges a persistent side panel together with the main content area. On desktop, the panel is fixed to the left or right with a defined width. On smaller screens it collapses into an overlaying drawer, so content remains the focus while navigation or utilities stay accessible. It supports breadcrumb navigation out of the box and gives you control over the panel’s width for desktop layouts. */
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
              className={withPrefix('page-nav-layout')}
              columns={{ md: sidePosition === 'left' ? 'auto minmax(0, 1fr)' : 'minmax(0, 1fr) auto' }}
              minBlockSize="100dvh"
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
