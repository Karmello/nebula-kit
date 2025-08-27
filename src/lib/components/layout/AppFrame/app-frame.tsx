import { ReactNode } from 'react'

import { Slot } from 'lib/definitions'
import { Box, Grid, WithSlots } from 'lib/components'
import { getDataAttrs, withPrefix } from 'lib/helpers'

import './app-frame.scss'

export type AppFrameOwnProps = {
  children: ReactNode
  stickyHeader?: boolean
}

/** This component gives your app a skeleton to live in. AppFrame arranges the classic trio - header, main content, and footer - into a responsive grid, handling their structure so you can focus on what goes inside. It supports an optional sticky header and provides named slots, making it easy to compose a consistent layout across pages. */
export const AppFrame = ({ children, stickyHeader = false }: AppFrameOwnProps) => {
  return (
    <WithSlots
      componentName="AppFrame"
      slotNames={[Slot.header, Slot.main, Slot.footer]}
      childrenToVerify={children}
    >
      {slots => (
        <Grid
          rows="auto 1fr auto"
          className={withPrefix('app-frame')}
          {...getDataAttrs('app-frame', { stickyHeader })}
        >
          {slots.Header ? (
            <Box as="header" className={withPrefix('app-frame-header')} variant="solid" intent="tertiary">
              {slots.Header}
            </Box>
          ) : null}
          {slots.Main ? (
            <Box as="main" className={withPrefix('app-frame-main')}>
              {slots.Main}
            </Box>
          ) : null}
          {slots.Footer ? (
            <Box as="footer" className={withPrefix('app-frame-footer')}>
              {slots.Footer}
            </Box>
          ) : null}
        </Grid>
      )}
    </WithSlots>
  )
}
