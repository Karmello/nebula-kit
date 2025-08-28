import { Navigate, Route, Routes } from 'react-router-dom'

import { DOCS_CATEGORIES } from 'client/definitions'
import { formatAsQueryString } from 'client/services'
import { useLibStore } from 'lib/state'

import { CompOverviewPage } from './CompOverviewPage'
import { CompPropsPage } from './CompPropsPage'

export const DocPage = () => {
  const { lang, theme } = useLibStore()

  return (
    <>
      <Routes>
        {DOCS_CATEGORIES.map(({ key: categoryKey, items }) =>
          items.map(({ key: itemKey, sections }) =>
            sections.map(({ key: sectionKey }) => {
              return (
                <Route
                  key={`${categoryKey}/${itemKey}/${sectionKey}`}
                  path={`${categoryKey}/${itemKey}/${sectionKey}`}
                  Component={() => {
                    if (sectionKey === 'overview') {
                      return <CompOverviewPage />
                    } else if (sectionKey === 'props') {
                      return <CompPropsPage />
                    } else {
                      return null
                    }
                  }}
                />
              )
            })
          )
        )}
        <Route
          path="*"
          element={
            <Navigate
              to={{
                pathname: `/docs/${DOCS_CATEGORIES[0].key}/${DOCS_CATEGORIES[0].items[0].key}/${DOCS_CATEGORIES[0].items[0].sections[0].key}`,
                search: formatAsQueryString({ lang, theme }),
              }}
              replace
            />
          }
        />
      </Routes>
    </>
  )
}
