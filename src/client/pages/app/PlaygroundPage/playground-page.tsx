import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { sentenceCase, pascalCase } from 'change-case'

import { useLibStore } from 'lib/state'
import { PageNavLayout, PageSideNav } from 'lib/components'
import { formatAsQueryString, useNavigateTo } from 'client/services'
import { usePlaygroundStore } from 'client/store'
import { PLAYGROUND_ROUTING_CONFIG } from 'client/definitions'

const PLAYGROUND_PAGES = PLAYGROUND_ROUTING_CONFIG.map(({ key, items }) => ({
  key,
  label: sentenceCase(key),
  items: items.map(key => ({ key, label: pascalCase(key) })),
}))

const DEFAULT_PATHNAME = `${PLAYGROUND_PAGES[0].key}/${PLAYGROUND_PAGES[0].items[0].key}`

export const PlaygroundPage = () => {
  const { pathname } = useLocation()

  const navigateTo = useNavigateTo()
  const { lang, theme } = useLibStore()
  const playgroundStore = usePlaygroundStore()

  useEffect(() => {
    const [, categoryKey, itemKey] = pathname.split('/').filter(s => s)
    playgroundStore.setCategoryKey(categoryKey as never)
    playgroundStore.setItemKey(itemKey as never)
  }, [pathname])

  return (
    <PageNavLayout>
      <PageNavLayout.SideMobile>
        {({ setSideOpen }) => (
          <PageSideNav
            groups={PLAYGROUND_PAGES.map(({ key: categoryKey, label }) => ({
              key: categoryKey,
              label,
              items: PLAYGROUND_PAGES.find(obj => obj.key === categoryKey).items.map(
                ({ key: itemKey, label }) => ({
                  key: itemKey,
                  label,
                  onClick: () => {
                    if (navigateTo(`/playground/${categoryKey}/${itemKey}`)) {
                      setSideOpen(false)
                    }
                  },
                })
              ),
            }))}
            activeItemKey={playgroundStore.itemKey}
          />
        )}
      </PageNavLayout.SideMobile>
      <PageNavLayout.SideDesktop>
        <PageSideNav
          groups={PLAYGROUND_PAGES.map(({ key: categoryKey, label }) => ({
            key: categoryKey,
            label,
            items: PLAYGROUND_PAGES.find(obj => obj.key === categoryKey).items.map(
              ({ key: itemKey, label }) => ({
                key: itemKey,
                label,
                onClick: () => {
                  navigateTo(`/playground/${categoryKey}/${itemKey}`)
                },
              })
            ),
          }))}
          activeItemKey={playgroundStore.itemKey}
        />
      </PageNavLayout.SideDesktop>
      <PageNavLayout.Main>
        <Routes>
          {PLAYGROUND_PAGES.flatMap(({ key: categoryKey, items }) =>
            items.map(({ key: itemKey }) => {
              let Component
              try {
                Component = require(`../../playground/${pascalCase(itemKey)}Playground`)[
                  `${pascalCase(itemKey)}Playground`
                ]
              } catch {
                Component = null
              }
              return <Route key={itemKey} path={`${categoryKey}/${itemKey}`} Component={Component} />
            })
          )}
          <Route
            path="*"
            element={
              <Navigate to={{ pathname: DEFAULT_PATHNAME, search: formatAsQueryString({ lang, theme }) }} />
            }
          />
        </Routes>
      </PageNavLayout.Main>
    </PageNavLayout>
  )
}
