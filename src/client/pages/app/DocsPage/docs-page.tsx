import { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { pascalCase, sentenceCase } from 'change-case'

import { useLibStore } from 'lib/state'
import { useDocsStore } from 'client/store'
import { formatAsQueryString } from 'client/services'
import { DOCS_ROUTING_CONFIG, RoutingCategoryKey, RoutingItemKey } from 'client/definitions'

import { Doc } from './Doc'

const getDocsCategories = () => {
  return DOCS_ROUTING_CONFIG.map(({ key, items }, index) => ({
    key,
    label: sentenceCase(key),
    items: items.map(key => {
      return {
        key,
        label: index < 2 ? sentenceCase(key) : pascalCase(key),
      }
    }),
  }))
}

const CATEGORIES = getDocsCategories()
const DEFAULT_PATHNAME = `${CATEGORIES[0].key}/${CATEGORIES[0].items[0].key}`

export const DocsPage = () => {
  const { t } = useTranslation()
  const push = useNavigate()
  const { pathname } = useLocation()

  const { categoryKey, itemKey, setCategoryKey, setItemKey } = useDocsStore()
  const { lang, theme } = useLibStore()

  useEffect(() => {
    const [, categoryKey, itemKey] = pathname.split('/').filter(s => s)
    setCategoryKey(categoryKey as RoutingCategoryKey)
    setItemKey(itemKey as RoutingItemKey)
  }, [pathname])

  return (
    <Routes>
      {CATEGORIES.flatMap(({ key: categoryKey, items }, index) =>
        items.map(({ key: itemKey }) => {
          return (
            <Route
              key={itemKey}
              path={`${categoryKey}/${itemKey}`}
              element={<Doc index={index} categoryKey={categoryKey} itemKey={itemKey} />}
            />
          )
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
