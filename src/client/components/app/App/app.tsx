import { useEffect } from 'react'
import { useLocation } from 'react-router'

import { AppFrame, Box, Button, Link, Loader, Toolbar } from 'lib/components'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'
import { useGetUser } from 'client/api'

import { RootPage } from '../RootPage'
import { PageNavigation } from './PageNavigation'
import { AppFooter } from './AppFooter'
import { UserActionMenu } from './UserActionMenu'

export const App = () => {
  const { pathname } = useLocation()
  const navigateTo = useNavigateTo()
  const { token, user } = useAppStore()

  const getUser = useGetUser(false, 1000)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    if (token && !user) {
      getUser.sendRequest()
    }
  }, [token])

  const currentPageKey = `/${pathname.split('/')[1]}`

  if (getUser.isMakingRequest) {
    return (
      <Box blockSize="100dvh">
        <Loader centered size="lg" color="blue" />
      </Box>
    )
  }

  return (
    <AppFrame stickyHeader>
      <AppFrame.Header>
        <Toolbar switchAt="md">
          {({ setMainOpen, mainOpen }) => (
            <>
              <Toolbar.Start>
                <Link
                  href={PageKey.home}
                  onClick={async () => {
                    if (mainOpen) await setMainOpen(false)
                    navigateTo(PageKey.home)
                  }}
                >
                  <Button intent={currentPageKey === PageKey.home ? 'secondary' : 'muted'}>NebulaKit</Button>
                </Link>
              </Toolbar.Start>
              <Toolbar.Main>
                <PageNavigation setMainOpen={setMainOpen} mainOpen={mainOpen} />
              </Toolbar.Main>
              <Toolbar.End>
                <UserActionMenu />
              </Toolbar.End>
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
