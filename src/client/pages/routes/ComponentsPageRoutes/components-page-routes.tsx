import { useMemo } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { Spacer } from 'lib/components/core/Spacer'
import { NEB_LENGTH } from 'lib/constants'
import { NextPageButton } from 'client/components/page/NextPageButton'
import { COMPONENT_CATEGORIES, PageKey } from 'client/definitions'
import {
  ComponentChangelogPage,
  ComponentExamplesPage,
  ComponentOverviewPage,
  ComponentPropsPage,
} from 'client/pages/component'

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

export const ComponentsPageRoutes = ({
  pageKey,
}: {
  pageKey: PageKey.foundations | PageKey.library
}) => {
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
      <Spacer blockSize={NEB_LENGTH.px_016} />
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
