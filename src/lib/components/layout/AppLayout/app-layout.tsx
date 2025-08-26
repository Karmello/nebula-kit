import { ReactNode } from 'react'

import { Slot } from 'lib/definitions'
import { Box, Grid, WithSlots } from 'lib/components'
import { getDataAttrs, withPrefix } from 'lib/helpers'

import './app-layout.scss'

export type AppLayoutOwnProps = {
  children: ReactNode
  stickyHeader?: boolean
}

export const AppLayout = ({ children, stickyHeader = false }: AppLayoutOwnProps) => {
  return (
    <WithSlots
      componentName="AppLayout"
      slotNames={[Slot.header, Slot.main, Slot.footer]}
      childrenToVerify={children}
    >
      {slots => (
        <Grid
          rows="auto 1fr auto"
          className={withPrefix('app-layout')}
          {...getDataAttrs('app-layout', { stickyHeader })}
        >
          {slots.Header ? (
            <Box as="header" className={withPrefix('app-layout-header')} variant="solid" intent="tertiary">
              {slots.Header}
            </Box>
          ) : null}
          {slots.Main ? (
            <Box as="main" className={withPrefix('app-layout-main')}>
              {slots.Main}
            </Box>
          ) : null}
          {slots.Footer ? (
            <Box as="footer" className={withPrefix('app-layout-footer')}>
              {slots.Footer}
            </Box>
          ) : null}
        </Grid>
      )}
    </WithSlots>
  )
}
