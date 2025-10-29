import { useEffect } from 'react'
import { useLocation } from 'react-router'

import { AppFrame, ButtonLink, Toolbar } from 'lib/components'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/services'

import { RootPage } from '../RootPage'
import { PageNavigation } from './PageNavigation'
import { AppFooter } from './AppFooter'

export const App = () => {
  const { pathname } = useLocation()

  const navigateTo = useNavigateTo()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const currentPageKey = pathname.split('/')[1]

  return (
    <AppFrame stickyHeader>
      <AppFrame.Header>
        <Toolbar switchAt="md">
          {({ setMainOpen, mainOpen }) => (
            <>
              <Toolbar.Start>
                <ButtonLink
                  href={`/${PageKey.home}`}
                  onClick={async () => {
                    if (mainOpen) await setMainOpen(false)
                    navigateTo(`/${PageKey.home}`)
                  }}
                  intent={currentPageKey === PageKey.home ? 'tertiary' : 'muted'}
                >
                  NebulaKit
                </ButtonLink>
              </Toolbar.Start>
              <Toolbar.Main>
                <PageNavigation setMainOpen={setMainOpen} mainOpen={mainOpen} />
              </Toolbar.Main>
            </>
          )}
        </Toolbar>
      </AppFrame.Header>
      <AppFrame.Main paddingTop={{ base: 20, lg: 40 }} paddingBottom={80}>
        <RootPage />
      </AppFrame.Main>
      <AppFrame.Footer>
        <AppFooter />
      </AppFrame.Footer>
    </AppFrame>
  )
}
