import { ReactNode, useState } from 'react'

import { Box, Grid, IconButton, WithSlots } from 'lib/components'
import { withPrefix, useCurrentBreakpoint } from 'lib/helpers'

export type PageNavLayoutOwnProps = {
  children: ReactNode
}

export const PageNavLayout = ({ children }: PageNavLayoutOwnProps) => {
  const [panelOpen, setPanelOpen] = useState<boolean>(false)

  const bp = useCurrentBreakpoint()

  return (
    <WithSlots componentName="PageNavLayout" slotNames={['main', 'side']} childrenToVerify={children}>
      {slots => {
        return (
          <Grid
            className={withPrefix('page-nav-layout')}
            rows={{ md: 'auto 1fr' }}
            columns={{ md: 'auto minmax(0, 1fr)' }}
            minBlockSize="100dvh"
          >
            <div>
              <IconButton
                iconName={panelOpen ? 'panel-right-open' : 'panel-left-open'}
                variant="ghost"
                intent="secondary"
                onClick={() => setPanelOpen(!panelOpen)}
              />
            </div>
            <div>hello</div>
            {slots.side ? (
              <Box
                as="aside"
                aria-label="Section navigation"
                className={withPrefix('page-nav-layout-side-desktop')}
                inlineSize={panelOpen ? '200px' : 0}
                style={{ overflow: 'hidden' }}
              >
                {slots.side}
              </Box>
            ) : null}
            {slots.side ? (
              <Box
                as="aside"
                aria-label="Section navigation"
                className={withPrefix('page-nav-layout-side-mobile')}
                intent="tertiary"
                display={{ md: 'none' }}
                position="fixed"
                top={0}
                left={0}
                inlineSize="min(85vw, 320px)"
                minBlockSize="100dvh"
                style={{ zIndex: 20, overflow: 'auto' }}
              >
                {slots.side}
              </Box>
            ) : null}
            {slots.main ? (
              <Box as="section" className={withPrefix('page-nav-layout-main')} minBlockSize={0}>
                {slots.main}
              </Box>
            ) : null}
          </Grid>
        )
      }}
    </WithSlots>
  )
}
