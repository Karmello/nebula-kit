import { useEffect } from 'react'
import { useLocation } from 'react-router'

import { AppFrame, LinkButton, Toolbar } from 'lib/components'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/services'

import { RootPage } from '../RootPage'
import { PageNavigation } from './PageNavigation'

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
                <LinkButton
                  href={`/${PageKey.home}`}
                  onClick={async () => {
                    if (mainOpen) await setMainOpen(false)
                    navigateTo(`/${PageKey.home}`)
                  }}
                  intent={currentPageKey === PageKey.home ? 'secondary' : 'tertiary'}
                >
                  NebulaKit
                </LinkButton>
              </Toolbar.Start>
              <Toolbar.Main>
                <PageNavigation setMainOpen={setMainOpen} mainOpen={mainOpen} />
              </Toolbar.Main>
            </>
          )}
        </Toolbar>
      </AppFrame.Header>
      <AppFrame.Main paddingTop={{ base: 10, lg: 20 }} paddingBottom={40}>
        <RootPage />
      </AppFrame.Main>
      <AppFrame.Footer>{''}</AppFrame.Footer>
    </AppFrame>
  )
}
