import { useEffect } from 'react'
import { useLocation } from 'react-router'

import { AppFrame, Box, Toolbar } from 'lib/components'

import { RootPage } from '../RootPage'
import { PageNavigation } from './PageNavigation'

export const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <AppFrame stickyHeader>
      <AppFrame.Header intent="tertiary">
        <Toolbar switchAt="md">
          <Toolbar.Start>
            <Box marginInline={10} intent="primary">
              NebulaKit
            </Box>
          </Toolbar.Start>
          <Toolbar.Main>
            {({ setMainOpen, mainOpen }) => <PageNavigation setMainOpen={setMainOpen} mainOpen={mainOpen} />}
          </Toolbar.Main>
        </Toolbar>
      </AppFrame.Header>
      <AppFrame.Main paddingTop={{ base: 10, lg: 20 }} paddingBottom={40}>
        <RootPage />
      </AppFrame.Main>
      <AppFrame.Footer intent="tertiary">{''}</AppFrame.Footer>
    </AppFrame>
  )
}
