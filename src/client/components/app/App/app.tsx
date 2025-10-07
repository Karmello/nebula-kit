import { useEffect } from 'react'
import { useLocation } from 'react-router'

import { AppFrame, Toolbar } from 'lib/components'

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
          <Toolbar.Main>{({ setMainOpen }) => <PageNavigation setMainOpen={setMainOpen} />}</Toolbar.Main>
        </Toolbar>
      </AppFrame.Header>
      <AppFrame.Main paddingTop={{ base: 10, lg: 20 }} paddingBottom={40}>
        <RootPage />
      </AppFrame.Main>
      <AppFrame.Footer intent="tertiary">{''}</AppFrame.Footer>
    </AppFrame>
  )
}
