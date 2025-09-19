import { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { useLibStore } from 'lib/state'
import { AppFrame, Button, ButtonGroup, Toolbar } from 'lib/components'
import { useNavigateTo, validateQueryParams } from 'client/services'
import { PageKey } from 'client/definitions'
import { useFoundationsPageStore, useComponentsPageStore } from 'client/store'

import { RootPage } from '../RootPage'

export const App = () => {
  const { pathname, search } = useLocation()
  const push = useNavigate()
  const navigateTo = useNavigateTo()

  const { theme, setTheme } = useLibStore()

  const foundationsPageStore = useFoundationsPageStore()
  const componentsPageStore = useComponentsPageStore()

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
        <Toolbar switchAt="md">
          <Toolbar.Start>start</Toolbar.Start>
          <Toolbar.Main>
            <ButtonGroup attached flexDirection={{ base: 'column', md: 'row' }}>
              <Button
                elem="a"
                elemProps={{
                  href: `/${PageKey.home}`,
                  onClick: e => {
                    e.preventDefault()
                    navigateTo(`/${PageKey.home}`)
                  },
                }}
              >
                Home
              </Button>
              <Button
                elem="a"
                elemProps={{
                  href: `/${PageKey.foundations}`,
                  onClick: e => {
                    e.preventDefault()
                    navigateTo(
                      `/${PageKey.foundations}/${foundationsPageStore.categoryKey}/${foundationsPageStore.itemKey}/${foundationsPageStore.sectionKey}`
                    )
                  },
                }}
              >
                Foundations
              </Button>
              <Button
                elem="a"
                elemProps={{
                  href: `/${PageKey.components}`,
                  onClick: e => {
                    e.preventDefault()
                    navigateTo(
                      `/${PageKey.components}/${componentsPageStore.categoryKey}/${componentsPageStore.itemKey}/${componentsPageStore.sectionKey}`
                    )
                  },
                }}
              >
                Components
              </Button>
            </ButtonGroup>
          </Toolbar.Main>
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
