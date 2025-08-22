import { useEffect } from 'react'
import { Navigate, Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Section, BrowseView } from 'lib/components'
import { useStore } from 'lib/state'
import { useDocsStore } from 'client/store'
import { formatAsQueryString } from 'client/services'
import { RoutingCategoryKey, RoutingItemKey } from 'client/types'

import { Doc } from './Doc'
import { getDocsCategories } from './config'

const CATEGORIES = getDocsCategories()
const DEFAULT_PATHNAME = `${CATEGORIES[0].key}/${CATEGORIES[0].items[0].key}`

export const DocsPage = () => {
  const { t } = useTranslation()
  const push = useNavigate()
  const { pathname } = useLocation()

  const { categoryKey, itemKey, setCategoryKey, setItemKey } = useDocsStore()
  const { lang, theme } = useStore()

  useEffect(() => {
    const [, categoryKey, itemKey] = pathname.split('/').filter(s => s)
    setCategoryKey(categoryKey as RoutingCategoryKey)
    setItemKey(itemKey as RoutingItemKey)
  }, [pathname])

  return (
    <Section
      headingText={t('common.docs')}
      surfaceProps={{ size: 'xl' }}
      iconName="book"
      iconColor="blue-3"
      topDividerSize="xs"
    >
      <BrowseView<RoutingCategoryKey, RoutingItemKey>
        categories={CATEGORIES}
        categoriesLabel={t('common.categories')}
        activeCategoryKey={categoryKey}
        activeItemKey={itemKey}
        onNavigate={({ categoryKey, itemKey }) => {
          push(`/docs/${categoryKey}/${itemKey}?${formatAsQueryString({ lang, theme })}`)
        }}
      >
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
      </BrowseView>
    </Section>
  )
}
