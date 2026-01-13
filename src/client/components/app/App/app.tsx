import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

import { getHtmlMetaData } from 'src/server/helpers'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { useGetUser, useLogoutUser } from 'client/api'
import { AppFrame, Box, Button, Link, Loader, Spacer, Toolbar } from 'lib/components'

import { RootPage } from '../RootPage'
import { PageNavigation } from './PageNavigation'
import { AppFooter } from './AppFooter'
import { UserActionMenu } from './UserActionMenu'
import { AppJump } from './AppJump'

export const App = () => {
  const { pathname } = useLocation()
  const navigateTo = useNavigateTo()

  const getUser = useGetUser(true, 1000)
  const logoutUser = useLogoutUser()

  const runAsync = async () => {
    if (pathname.startsWith(PageKey.confirmAction)) {
      await logoutUser.sendRequest()
    } else {
      const getUserRes = await getUser.sendRequest()

      if (!getUserRes.ok) {
        await logoutUser.sendRequest()
        if (pathname.startsWith('/profile')) {
          navigateTo(PageKey.authLogin, { replace: true })
        }
      } else {
        if (pathname.startsWith('/auth')) {
          navigateTo(PageKey.profileAccount, { replace: true })
        }
      }
    }
  }

  useLayoutEffect(() => {
    runAsync()
  }, [])

  useLayoutEffect(() => {
    document.title = getHtmlMetaData(pathname).title
    window.scrollTo(0, 0)
  }, [pathname])

  if (getUser.isMakingRequest || logoutUser.isMakingRequest) {
    return (
      <Box blockSize="100dvh">
        <Loader centered size="lg" color="blue" />
      </Box>
    )
  }

  if (pathname.startsWith(PageKey.confirmAction)) {
    return <RootPage />
  }

  return (
    <AppFrame stickyHeader>
      <AppFrame.Header>
        <Toolbar switchAt="xl">
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
                  <Button intent={pathname.startsWith(PageKey.home) ? 'secondary' : 'muted'}>
                    NebulaKit
                  </Button>
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
      <AppFrame.Main paddingBottom="80px">
        <AppJump />
        <Spacer blockSize={{ base: '20px', lg: '40px' }} />
        <RootPage />
      </AppFrame.Main>
      <AppFrame.Footer>
        <AppFooter />
      </AppFrame.Footer>
    </AppFrame>
  )
}
