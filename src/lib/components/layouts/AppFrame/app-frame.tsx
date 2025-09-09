import { ReactNode } from 'react'

import { Grid } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { AppFrameProvider } from './AppFrameProvider'

import './app-frame.scss'

export type AppFrameOwnProps = {
  children: ReactNode
  stickyHeader?: boolean
}

export const AppFrame = ({ children, stickyHeader = false }: AppFrameOwnProps) => {
  return (
    <AppFrameProvider stickyHeader={stickyHeader}>
      <WithSlots
        componentName="AppFrame"
        header="required"
        main="required"
        footer="optional"
        childrenToVerify={children}
      >
        {slots => (
          <Grid elemProps={{ className: withPrefix('app-frame') }}>
            {slots.Header || <div />}
            {slots.Main || <div />}
            {slots.Footer}
          </Grid>
        )}
      </WithSlots>
    </AppFrameProvider>
  )
}
