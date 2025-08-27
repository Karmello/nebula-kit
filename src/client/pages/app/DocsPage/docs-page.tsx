import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { pascalCase, sentenceCase } from 'change-case'

import { useLibStore } from 'lib/state'
import { PageNavLayout, PageSideNav } from 'lib/components'
import { ComponentMeta } from 'lib/definitions'
import { useDocsStore } from 'client/store'
import { formatAsQueryString, useNavigateTo } from 'client/services'
import { DOCS_ROUTING_CONFIG, RoutingCategoryKey, RoutingItemKey } from 'client/definitions'
import { CompMetaRenderer } from 'client/components'

const DOCS_PAGES = DOCS_ROUTING_CONFIG.map(({ key, items }) => ({
  key,
  label: sentenceCase(key),
  items: items.map(key => ({ key, label: pascalCase(key) })),
}))

const DEFAULT_PATHNAME = `${DOCS_PAGES[0].key}/${DOCS_PAGES[0].items[0].key}`

export const DocsPage = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const navigateTo = useNavigateTo()
  const docsStore = useDocsStore()
  const { lang, theme } = useLibStore()

  useEffect(() => {
    const [, categoryKey, itemKey] = pathname.split('/').filter(s => s)
    docsStore.setCategoryKey(categoryKey as RoutingCategoryKey)
    docsStore.setItemKey(itemKey as RoutingItemKey)
  }, [pathname])

  let META_DATA: ComponentMeta

  try {
    META_DATA = require(`../../../../meta/${docsStore.itemKey}.json`) as ComponentMeta
  } catch {
    META_DATA = null
  }

  return (
    <PageNavLayout
      breadcrumpItems={[
        t('common.docs'),
        sentenceCase(docsStore.categoryKey),
        sentenceCase(docsStore.itemKey),
      ]}
    >
      <PageNavLayout.SideMobile>
        {({ setSideOpen }) => (
          <PageSideNav
            groups={DOCS_PAGES.map(({ key: categoryKey, label }) => ({
              key: categoryKey,
              label,
              items: DOCS_PAGES.find(obj => obj.key === categoryKey).items.map(({ key: itemKey, label }) => ({
                key: itemKey,
                label,
                onClick: () => {
                  if (navigateTo(`/docs/${categoryKey}/${itemKey}`)) {
                    setSideOpen(false)
                  }
                },
              })),
            }))}
            activeItemKey={docsStore.itemKey}
            itemConfig={{
              default: { intent: 'secondary' },
              active: { intent: 'tertiary' },
            }}
          />
        )}
      </PageNavLayout.SideMobile>
      <PageNavLayout.SideDesktop>
        <PageSideNav
          groups={DOCS_PAGES.map(({ key: categoryKey, label }) => ({
            key: categoryKey,
            label,
            items: DOCS_PAGES.find(obj => obj.key === categoryKey).items.map(({ key: itemKey, label }) => ({
              key: itemKey,
              label,
              onClick: () => {
                navigateTo(`/docs/${categoryKey}/${itemKey}`)
              },
            })),
          }))}
          activeItemKey={docsStore.itemKey}
        />
      </PageNavLayout.SideDesktop>
      <PageNavLayout.Main>
        <CompMetaRenderer data={META_DATA} />
        <Routes>
          {DOCS_PAGES.flatMap(({ key: categoryKey, items }) =>
            items.map(({ key: itemKey }) => {
              let Component
              try {
                Component = require(`../../docs/${pascalCase(itemKey)}Docs`)[`${pascalCase(itemKey)}Docs`]
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
