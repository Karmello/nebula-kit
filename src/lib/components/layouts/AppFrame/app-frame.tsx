import { ReactNode } from 'react'

import { Grid, WithSlots } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { AppFrameProvider } from './AppFrameProvider'

export type AppFrameOwnProps = {
  children: ReactNode
  stickyHeader?: boolean
}

/** This component gives your app a skeleton to live in. AppFrame arranges the classic trio - header, main content, and footer - into a responsive grid, handling their structure so you can focus on what goes inside. It supports an optional sticky header and provides named slots, making it easy to compose a consistent layout across pages. */
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
          <Grid gridTemplateRows="auto 1fr auto" className={withPrefix('app-frame')} minBlockSize="100dvh">
            {slots.Header}
            {slots.Main}
            {slots.Footer}
          </Grid>
        )}
      </WithSlots>
    </AppFrameProvider>
  )
}
