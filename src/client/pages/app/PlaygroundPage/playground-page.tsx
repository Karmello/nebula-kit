import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useLibStore } from 'lib/state'
import { SidePanelLayout, SideNav, Breadcrumb } from 'lib/components'
import { formatAsQueryString, useNavigateTo } from 'client/services'
import { usePlaygroundPageStore } from 'client/store'
import { PLAYGROUND_CATEGORIES } from 'client/definitions'

import { CompPlaygroundPage } from './CompPlaygroundPage'

const DEFAULT_PATHNAME = `${PLAYGROUND_CATEGORIES[0].key}/${PLAYGROUND_CATEGORIES[0].items[0].key}`

export const PlaygroundPage = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const navigateTo = useNavigateTo()
  const { lang, theme } = useLibStore()
  const playgroundPageStore = usePlaygroundPageStore()

  useEffect(() => {
    const [, categoryKey, itemKey] = pathname.split('/').filter(s => s)
    playgroundPageStore.setCategoryKey(categoryKey as never)
    playgroundPageStore.setItemKey(itemKey as never)
  }, [pathname])

  const activeCategoryObj = PLAYGROUND_CATEGORIES.find(c => c.key === playgroundPageStore.categoryKey)
  const activeItemObj = activeCategoryObj.items.find(i => i.key === playgroundPageStore.itemKey)

  return (
    <SidePanelLayout>
      <SidePanelLayout.Header>
        <Breadcrumb items={[t('common.playground'), activeCategoryObj.label, activeItemObj.label]} />
      </SidePanelLayout.Header>
      <SidePanelLayout.Main mx={10}>
        <Routes>
          {PLAYGROUND_CATEGORIES.flatMap(({ key: categoryKey, items }) =>
            items.map(({ key: itemKey }) => (
              <Route key={itemKey} path={`${categoryKey}/${itemKey}`} Component={CompPlaygroundPage} />
            ))
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
        <SideNav
          groups={PLAYGROUND_CATEGORIES.map(({ key: categoryKey, label }) => ({
            key: categoryKey,
            label,
            items: PLAYGROUND_CATEGORIES.find(obj => obj.key === categoryKey).items.map(
              ({ key: itemKey, label }) => ({
                key: itemKey,
                label,
                onClick: () => {
                  navigateTo(`/playground/${categoryKey}/${itemKey}`)
                },
              })
            ),
          }))}
          activeKey={playgroundPageStore.itemKey}
        />
      </SidePanelLayout.SideDesktop>
      <SidePanelLayout.SideMobile>
        {({ setSideOpen }) => (
          <SideNav
            groups={PLAYGROUND_CATEGORIES.map(({ key: categoryKey, label }) => ({
              key: categoryKey,
              label,
              items: PLAYGROUND_CATEGORIES.find(obj => obj.key === categoryKey).items.map(
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
            activeKey={playgroundPageStore.itemKey}
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
