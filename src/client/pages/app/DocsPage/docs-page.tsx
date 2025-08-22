import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { pascalCase, sentenceCase } from 'change-case'

import { useLibStore } from 'lib/state'
import { useDocsStore } from 'client/store'
import { formatAsQueryString } from 'client/services'
import { DOCS_ROUTING_CONFIG, RoutingCategoryKey, RoutingItemKey } from 'client/definitions'

const DOCS_PAGES = DOCS_ROUTING_CONFIG.map(({ key, items }, index) => ({
  key,
  label: sentenceCase(key),
  items: items.map(key => {
    return {
      key,
      label: index < 2 ? sentenceCase(key) : pascalCase(key),
      Component: require(`../../docs/${pascalCase(key)}Docs`)[`${pascalCase(key)}Docs`],
    }
  }),
}))

const DEFAULT_PATHNAME = `${DOCS_PAGES[0].key}/${DOCS_PAGES[0].items[0].key}`

export const DocsPage = () => {
  const { pathname } = useLocation()

  const { setCategoryKey, setItemKey } = useDocsStore()
  const { lang, theme } = useLibStore()

  useEffect(() => {
    const [, categoryKey, itemKey] = pathname.split('/').filter(s => s)
    setCategoryKey(categoryKey as RoutingCategoryKey)
    setItemKey(itemKey as RoutingItemKey)
  }, [pathname])

  return (
    <Routes>
      {DOCS_PAGES.flatMap(({ key: categoryKey, items }, index) =>
        items.map(({ key: itemKey, Component }) => {
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
  )
}
