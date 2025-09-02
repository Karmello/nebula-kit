import { ReactNode } from 'react'

import { Grid, WithSlots } from 'lib/components'
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
          <Grid
            elemProps={{
              className: withPrefix('app-frame'),
            }}
          >
            {slots.Header}
            {slots.Main}
            {slots.Footer}
          </Grid>
        )}
      </WithSlots>
    </AppFrameProvider>
  )
}
