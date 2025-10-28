import { useMemo } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { ComponentOverviewPage, ComponentPropsPage, ComponentExamplesPage } from 'client/pages'
import { COMPONENT_CATEGORIES, PageKey } from 'client/definitions'
import { Spacer } from 'lib/components'
import { NextPageButton } from 'client/components'

const PageResolver = ({ sectionKey }: { sectionKey: string }) => {
  switch (sectionKey) {
    case 'overview':
      return <ComponentOverviewPage />
    case 'props':
      return <ComponentPropsPage />
    case 'examples':
      return <ComponentExamplesPage />
    default:
      return null
  }
}

export const ComponentsPageRoutes = () => {
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
                  <NextPageButton pageKey="components" />
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
                  pathname: `/${PageKey.components}/${COMPONENT_CATEGORIES[0].key}/${COMPONENT_CATEGORIES[0].items[0].key}/${COMPONENT_CATEGORIES[0].items[0].sections[0].key}`,
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
