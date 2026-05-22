import { useMemo } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { ComponentOverviewPage, ComponentPropsPage, ComponentExamplesPage, ComponentChangelogPage } from 'client/pages'

import { COMPONENT_CATEGORIES, PageKey } from 'client/definitions'
import { NextPageButton } from 'client/components'
import { Spacer } from 'lib/components'

const PageResolver = ({ sectionKey }: { sectionKey: string }) => {
  switch (sectionKey) {
    case 'overview':
      return <ComponentOverviewPage />
    case 'props':
      return <ComponentPropsPage />
    case 'examples':
      return <ComponentExamplesPage />
    case 'changelog':
      return <ComponentChangelogPage />
    default:
      return null
  }
}

export const ComponentsPageRoutes = ({ pageKey }: { pageKey: PageKey.foundations | PageKey.components }) => {
  const ROUTES = useMemo(() => {
    return COMPONENT_CATEGORIES.map(({ key: categoryKey, items }) =>
      items.map(({ key: itemKey, sections }) =>
        sections.map(({ key: sectionKey }) => {
          return (
            <Route
              key={`${categoryKey}/${itemKey}/${sectionKey}`}
              path={`${categoryKey}/${itemKey}/${sectionKey}`}
              element={
                <>
                  <PageResolver sectionKey={sectionKey} />
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
      <Spacer blockSize="sm" />
      <Routes>
        {ROUTES}
        <Route
          path="*"
          Component={() => {
            if (typeof window === 'undefined') return null
            return (
              <Navigate
                to={{
                  pathname: `${pageKey}/${COMPONENT_CATEGORIES[0].key}/${COMPONENT_CATEGORIES[0].items[0].key}/${COMPONENT_CATEGORIES[0].items[0].sections[0].key}`,
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
