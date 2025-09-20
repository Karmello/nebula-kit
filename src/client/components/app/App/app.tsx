import { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { useLibStore } from 'lib/state'
import { AppFrame, Button, ButtonGroup, Toolbar, useToolbarContext } from 'lib/components'
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

  const ToolBarMainContent = () => {
    const currentPageKey = pathname.split('/')[1]

    const { setMainOpen } = useToolbarContext()

    useEffect(() => {
      setMainOpen(false)
    }, [currentPageKey])

    return (
      <ButtonGroup direction={{ base: 'column', md: 'row' }} attached stretch={{ base: true, md: false }}>
        <Button
          elem="a"
          elemProps={{
            href: `/${PageKey.home}`,
            onClick: e => {
              e.preventDefault()
              navigateTo(`/${PageKey.home}`)
            },
          }}
          intent={currentPageKey === PageKey.home ? 'secondary' : 'tertiary'}
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
          intent={currentPageKey === PageKey.foundations ? 'secondary' : 'tertiary'}
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
          intent={currentPageKey === PageKey.components ? 'secondary' : 'tertiary'}
        >
          Components
        </Button>
      </ButtonGroup>
    )
  }

  return (
    <AppFrame stickyHeader>
      <AppFrame.Header intent="tertiary">
        <Toolbar switchAt="md">
          <Toolbar.Main>
            <ToolBarMainContent />
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
