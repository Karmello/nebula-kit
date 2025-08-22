import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useLibStore } from 'lib/state'
import { formatAsQueryString } from 'client/services'
import { useAppStore, usePlaygroundStore } from 'client/store'

import { getPlaygroundCategories } from './config'

const CATEGORIES = getPlaygroundCategories()
const DEFAULT_PATHNAME = `${CATEGORIES[0].key}/${CATEGORIES[0].items[0].key}`

export const PlaygroundPage = () => {
  const { t } = useTranslation()
  const push = useNavigate()
  const { pathname } = useLocation()

  const { lang, theme } = useLibStore()
  const { distractionFreeMode } = useAppStore()
  const { categoryKey, itemKey, setCategoryKey, setItemKey } = usePlaygroundStore()

  useEffect(() => {
    const [, categoryKey, itemKey] = pathname.split('/').filter(s => s)
    setCategoryKey(categoryKey as never)
    setItemKey(itemKey as never)
  }, [pathname])

  return (
    <Routes>
      {CATEGORIES.flatMap(({ key: categoryKey, items }) =>
        items.map(({ key: itemKey, Component }) => (
          <Route key={itemKey} path={`${categoryKey}/${itemKey}`} Component={Component} />
        ))
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
