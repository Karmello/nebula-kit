import { useMemo } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { ComponentOverviewPage, ComponentPropsPage, ComponentExamplesPage } from 'client/pages'
import { CORE_PAGE_CATEGORIES, PRO_PAGE_CATEGORIES, PageKey } from 'client/definitions'
import { NextPageButton } from 'client/components'
import { Spacer } from 'lib/components'

const PageResolver = ({
  pageKey,
  sectionKey,
}: {
  pageKey: Extract<keyof typeof PageKey, 'core' | 'pro'>
  sectionKey: string
}) => {
  switch (sectionKey) {
    case 'overview':
      return <ComponentOverviewPage pageKey={pageKey} />
    case 'props':
      return <ComponentPropsPage pageKey={pageKey} />
    case 'examples':
      return <ComponentExamplesPage pageKey={pageKey} />
    default:
      return null
  }
}

export const ComponentsPageRoutes = ({
  pageKey,
}: {
  pageKey: Extract<keyof typeof PageKey, 'core' | 'pro'>
}) => {
  const CATEGORIES = pageKey === 'core' ? CORE_PAGE_CATEGORIES : PRO_PAGE_CATEGORIES

  const ROUTES = useMemo(() => {
    return CATEGORIES.map(({ key: categoryKey, items }) =>
      items.map(({ key: itemKey, sections }) =>
        sections.map(({ key: sectionKey }) => {
          return (
            <Route
              key={`${categoryKey}/${itemKey}/${sectionKey}`}
              path={`${categoryKey}/${itemKey}/${sectionKey}`}
              element={
                <>
                  <PageResolver pageKey={pageKey} sectionKey={sectionKey} />
                  <NextPageButton pageKey={pageKey} />
                </>
              }
            />
          )
        })
      )
    )
  }, [])

  return (
    <>
      <Spacer blockSize={20} />
      <Routes>
        {ROUTES}
        <Route
          path="*"
          Component={() => {
            if (typeof window === 'undefined') return null
            return (
              <Navigate
                to={{
                  pathname: `/${pageKey}/${CATEGORIES[0].key}/${CATEGORIES[0].items[0].key}/${CATEGORIES[0].items[0].sections[0].key}`,
                }}
                replace
              />
            )
          }}
        />
      </Routes>
    </>
  )
}
