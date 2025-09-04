import { Navigate, Route, Routes } from 'react-router-dom'
import { pascalCase } from 'change-case'

import { FOUNDATION_CATEGORIES, PageKey } from 'client/definitions'
import { formatAsQueryString } from 'client/services'
import { useLibStore } from 'lib/state'

export const FoundationsPageRoutes = () => {
  const { lang, theme } = useLibStore()

  return (
    <Routes>
      {FOUNDATION_CATEGORIES.map(({ key: categoryKey, items }) =>
        items.map(({ key: itemKey, sections }) =>
          sections.map(({ key: sectionKey }) => {
            return (
              <Route
                key={`${categoryKey}/${itemKey}/${sectionKey}`}
                path={`${categoryKey}/${itemKey}/${sectionKey}`}
                Component={() => {
                  let Component
                  try {
                    Component = require(`../../foundations/${pascalCase(sectionKey)}/${sectionKey}`).default
                  } catch {
                    Component = null
                  }
                  return Component ? <Component /> : null
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
              pathname: `/${PageKey.foundations}/${FOUNDATION_CATEGORIES[0].key}/${FOUNDATION_CATEGORIES[0].items[0].key}/${FOUNDATION_CATEGORIES[0].items[0].sections[0].key}`,
              search: formatAsQueryString({ lang, theme }),
            }}
            replace
          />
        }
      />
    </Routes>
  )
}
