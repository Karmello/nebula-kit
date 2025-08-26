import { ReactNode } from 'react'

import { Box, Grid, WithSlots } from 'lib/components'
import { getDataAttrs, withPrefix } from 'lib/helpers'

import './app-layout.scss'

export type AppLayoutOwnProps = {
  children: ReactNode
  stickyHeader?: boolean
}

export const AppLayout = ({ children, stickyHeader = false }: AppLayoutOwnProps) => {
  return (
    <WithSlots componentName="AppLayout" slotNames={['header', 'main', 'footer']} childrenToVerify={children}>
      {slots => (
        <Grid
          rows="auto 1fr auto"
          className={withPrefix('app-layout')}
          {...getDataAttrs('app-layout', { stickyHeader })}
        >
          {slots.header ? (
            <Box as="header" className={withPrefix('app-layout-header')} variant="solid" intent="tertiary">
              {slots.header}
            </Box>
          ) : null}
          {slots.main ? (
            <Box as="main" className={withPrefix('app-layout-main')}>
              {slots.main}
            </Box>
          ) : null}
          {slots.footer ? (
            <Box as="footer" className={withPrefix('app-layout-footer')}>
              {slots.footer}
            </Box>
          ) : null}
        </Grid>
      )}
    </WithSlots>
  )
}
