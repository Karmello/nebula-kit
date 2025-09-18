import { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { useLibStore } from 'lib/state'
import { AppFrame, Toolbar } from 'lib/components'
import { validateQueryParams } from 'client/services'

import { RootPage } from '../RootPage'

export const App = () => {
  const { pathname, search } = useLocation()
  const push = useNavigate()

  const { theme, setTheme } = useLibStore()

  useLayoutEffect(() => {
    const validated = validateQueryParams(search)
    setTheme(validated.theme)
  }, [])

  useLayoutEffect(() => {
    push(`${pathname}?theme=${theme}`, { replace: true })
  }, [theme])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <AppFrame stickyHeader>
      <AppFrame.Header intent="tertiary">
        <Toolbar>
          <Toolbar.Start>start</Toolbar.Start>
          <Toolbar.Main>main</Toolbar.Main>
          <Toolbar.End>end</Toolbar.End>
        </Toolbar>
      </AppFrame.Header>
      <AppFrame.Main paddingTop={{ base: 10, lg: 20 }} paddingBottom={40}>
        <RootPage />
      </AppFrame.Main>
      <AppFrame.Footer intent="tertiary">{''}</AppFrame.Footer>
    </AppFrame>
  )
}
