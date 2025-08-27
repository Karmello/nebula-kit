import { ReactNode, useLayoutEffect } from 'react'

import { Box, Grid, IconButton, WithSlots, HAlign } from 'lib/components'
import { withPrefix, useScreen, scale } from 'lib/helpers'
import { ScaleValue, Slot } from 'lib/definitions'

import { PageNavLayoutProvider, usePageNavLayout } from './PageNavLayoutProvider'

export type PageNavLayoutOwnProps = {
  children: ReactNode
  sideWidthDesktop?: ScaleValue | string
}

const PageNavLayoutBase = ({ children, sideWidthDesktop = '225px' }: PageNavLayoutOwnProps) => {
  const { isMobile, isDesktop } = useScreen()

  const { sideOpen, setSideOpen } = usePageNavLayout()

  useLayoutEffect(() => {
    if (isMobile) {
      setSideOpen(false)
    }
  }, [isMobile])

  useLayoutEffect(() => {
    if (isDesktop) {
      setSideOpen(true)
    }
  }, [isDesktop])

  return (
    <WithSlots
      componentName="PageNavLayout"
      slotNames={[Slot.main, Slot.sideMobile, Slot.sideDesktop]}
      childrenToVerify={children}
    >
      {slots => {
        return (
          <Grid
            className={withPrefix('page-nav-layout')}
            rows={{ md: 'auto 1fr' }}
            columns={{ md: 'auto minmax(0, 1fr)' }}
            minBlockSize="100dvh"
          >
            <Box />
            <Box m={10}>
              <IconButton
                iconName={sideOpen ? 'panel-right-open' : 'panel-left-open'}
                intent="tertiary"
                size="sm"
                onClick={() => setSideOpen(!sideOpen)}
              />
            </Box>
            {slots.SideDesktop ? (
              <Box
                as="aside"
                aria-label="Section navigation"
                className={withPrefix('page-nav-layout-side-desktop')}
                inlineSize={isDesktop && sideOpen ? scale(sideWidthDesktop) : 0}
                blockSize={isMobile ? 0 : undefined}
                overflowX="hidden"
              >
                {slots.SideDesktop}
              </Box>
            ) : null}
            {slots.SideMobile ? (
              <Box
                as="aside"
                aria-label="Section navigation"
                className={withPrefix('page-nav-layout-side-mobile')}
                position="fixed"
                top={0}
                left={0}
                inlineSize={isMobile && sideOpen ? 'min(85vw, 320px)' : 0}
                minBlockSize="100dvh"
                variant="solid"
                intent="secondary"
                overflowY="auto"
                style={{ zIndex: 20 }}
              >
                <HAlign position="right">
                  <IconButton iconName="close" variant="ghost" size="sm" onClick={() => setSideOpen(false)} />
                </HAlign>
                {slots.SideMobile}
              </Box>
            ) : null}
            {slots.Main ? (
              <Box
                as="section"
                className={withPrefix('page-nav-layout-main')}
                minBlockSize={0}
                overflowX="auto"
                m={10}
              >
                {slots.Main}
              </Box>
            ) : null}
          </Grid>
        )
      }}
    </WithSlots>
  )
}

export const PageNavLayout = (props: PageNavLayoutOwnProps) => (
  <PageNavLayoutProvider>
    <PageNavLayoutBase {...props} />
  </PageNavLayoutProvider>
)
