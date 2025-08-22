import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Section, BrowseView } from 'lib/components'
import { useStore } from 'lib/state'
import { formatAsQueryString } from 'client/services'
import { useAppStore, usePlaygroundStore } from 'client/store'
import { PlaygroundContentSection, DistractionFreeModeCheckbox } from 'client/components'
import { RoutingCategoryKey, RoutingItemKey } from 'client/types'

import { getPlaygroundCategories } from './config'

const CATEGORIES = getPlaygroundCategories()
const DEFAULT_PATHNAME = `${CATEGORIES[0].key}/${CATEGORIES[0].items[0].key}`

export const PlaygroundPage = () => {
  const { t } = useTranslation()
  const push = useNavigate()
  const { pathname } = useLocation()

  const { lang, theme } = useStore()
  const { distractionFreeMode } = useAppStore()
  const { categoryKey, itemKey, setCategoryKey, setItemKey } = usePlaygroundStore()

  useEffect(() => {
    const [, categoryKey, itemKey] = pathname.split('/').filter(s => s)
    setCategoryKey(categoryKey as never)
    setItemKey(itemKey as never)
  }, [pathname])

  const Content = (
    <PlaygroundContentSection>
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
    </PlaygroundContentSection>
  )

  return (
    <Section
      headingText={t('common.playground')}
      surfaceProps={{ size: 'xl' }}
      iconName="fly"
      iconColor="blue-3"
      topDividerSize="xs"
      RightSlot={DistractionFreeModeCheckbox}
    >
      {!distractionFreeMode ? (
        <BrowseView<RoutingCategoryKey, RoutingItemKey>
          categories={CATEGORIES}
          activeCategoryKey={categoryKey}
          activeItemKey={itemKey}
          onNavigate={({ categoryKey, itemKey }) => {
            push(`/playground/${categoryKey}/${itemKey}?${formatAsQueryString({ lang, theme })}`)
          }}
          categoriesLabel={t('common.componentsCategory')}
        >
          {Content}
        </BrowseView>
      ) : (
        Content
      )}
    </Section>
  )
}
