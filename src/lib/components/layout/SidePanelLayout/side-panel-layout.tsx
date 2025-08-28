import { ReactNode, useLayoutEffect } from 'react'

import {
  Box,
  Grid,
  IconButton,
  WithSlots,
  HAlign,
  Breadcrumb,
  Flex,
  BreadcrumbOwnProps,
} from 'lib/components'

import { withPrefix, useScreen, scale } from 'lib/helpers'
import { ScaleValue, Slot } from 'lib/definitions'

import { SidePanelLayoutProvider, useSidePanelLayout } from './SidePanelLayoutProvider'

export type SidePanelLayoutOwnProps = {
  children: ReactNode
  sideWidthDesktop?: ScaleValue | string
  breadcrumpItems?: BreadcrumbOwnProps['items']
}

const SidePanelLayoutBase = ({
  children,
  sideWidthDesktop = '225px',
  breadcrumpItems,
}: SidePanelLayoutOwnProps) => {
  const { isMobile, isDesktop } = useScreen()

  const { sideOpen, setSideOpen } = useSidePanelLayout()

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
      componentName="SidePanelLayout"
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
            <Flex direction="row" align="center" gap={10} m={10}>
              <IconButton
                iconName={sideOpen ? 'panel-right-open' : 'panel-left-open'}
                intent="tertiary"
                size="sm"
                onClick={() => setSideOpen(!sideOpen)}
              />
              <Breadcrumb items={breadcrumpItems} />
            </Flex>
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

/** SidePanelLayout arranges a persistent side panel together with the main content area. On desktop, the panel is fixed to the left or right with a defined width. On smaller screens it collapses into an overlaying drawer, so content remains the focus while navigation or utilities stay accessible. It supports breadcrumb navigation out of the box and gives you control over the panel’s width for desktop layouts. */
export const SidePanelLayout = (props: SidePanelLayoutOwnProps) => (
  <SidePanelLayoutProvider>
    <SidePanelLayoutBase {...props} />
  </SidePanelLayoutProvider>
)
