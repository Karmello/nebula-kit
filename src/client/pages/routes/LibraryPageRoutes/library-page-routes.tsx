import { useMemo } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { Spacer } from 'lib/components/core/Spacer'
import { NEB_LENGTH } from 'lib/constants'
import { NextPageButton } from 'client/components/reusable/NextPageButton'
import { LIBRARY_CATEGORIES, PageKey } from 'client/definitions'
import {
  LibraryChangelogPage,
  LibraryExamplesPage,
  LibraryOverviewPage,
  LibraryPropsPage,
} from 'client/pages/library'

const PageResolver = ({ sectionKey }: { sectionKey: string }) => {
  switch (sectionKey) {
    case 'overview':
      return <LibraryOverviewPage />
    case 'props':
      return <LibraryPropsPage />
    case 'examples':
      return <LibraryExamplesPage />
    case 'changelog':
      return <LibraryChangelogPage />
    default:
      return null
  }
}

export const LibraryPageRoutes = ({
  pageKey,
}: {
  pageKey: PageKey.foundations | PageKey.library
}) => {
  const ROUTES = useMemo(() => {
    return LIBRARY_CATEGORIES.map(({ key: categoryKey, items }) =>
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
                  pathname: `${pageKey}/${LIBRARY_CATEGORIES[0].key}/${LIBRARY_CATEGORIES[0].items[0].key}/${LIBRARY_CATEGORIES[0].items[0].sections[0].key}`,
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
