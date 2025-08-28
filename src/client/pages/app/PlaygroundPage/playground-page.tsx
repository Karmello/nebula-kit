import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { sentenceCase, pascalCase } from 'change-case'

import { useLibStore } from 'lib/state'
import { SidePanelLayout, PageSideNav, Breadcrumb } from 'lib/components'
import { formatAsQueryString, useNavigateTo } from 'client/services'
import { usePlaygroundStore } from 'client/store'
import { PLAYGROUND_PAGES } from 'client/definitions'

const DEFAULT_PATHNAME = `${PLAYGROUND_PAGES[0].key}/${PLAYGROUND_PAGES[0].items[0].key}`

export const PlaygroundPage = () => {
  const { t } = useTranslation()
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
    <SidePanelLayout>
      <SidePanelLayout.Header>
        <Breadcrumb
          items={[
            t('common.playground'),
            sentenceCase(playgroundStore.categoryKey),
            pascalCase(playgroundStore.itemKey),
          ]}
        />
      </SidePanelLayout.Header>
      <SidePanelLayout.Main>
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
      </SidePanelLayout.Main>
      <SidePanelLayout.SideDesktop>
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
      </SidePanelLayout.SideDesktop>
      <SidePanelLayout.SideMobile>
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
            itemConfig={{
              default: { intent: 'secondary' },
              active: { intent: 'tertiary' },
            }}
          />
        )}
      </SidePanelLayout.SideMobile>
    </SidePanelLayout>
  )
}
