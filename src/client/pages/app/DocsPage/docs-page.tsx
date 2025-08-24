import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { pascalCase, sentenceCase } from 'change-case'

import { useLibStore } from 'lib/state'
import { Button, Spacer } from 'lib/components'
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
    <>
      <nav>
        {DOCS_PAGES.map(({ key, label }) => (
          <Button
            key={key}
            intent={docsStore.categoryKey === key ? 'primary' : 'neutral'}
            onClick={() => navigateTo(`/docs/${key}/${DOCS_PAGES.find(p => p.key === key).items[0].key}`)}
          >
            {label}
          </Button>
        ))}
      </nav>
      <Spacer size={20} />
      <nav>
        {DOCS_PAGES.find(obj => obj.key === docsStore.categoryKey).items.map(({ key, label }) => (
          <Button
            key={key}
            intent={docsStore.itemKey === key ? 'primary' : 'neutral'}
            onClick={() => navigateTo(`/docs/${docsStore.categoryKey}/${key}`)}
          >
            {label}
          </Button>
        ))}
      </nav>
      <Spacer size={10} />
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
    </>
  )
}
