import { Navigate, Route, Routes } from 'react-router-dom'
import { sentenceCase } from 'change-case'

import { DOCS_CATEGORIES } from 'client/definitions'
import { formatAsQueryString } from 'client/services'
import { useLibStore } from 'lib/state'

export const DocPage = () => {
  const { lang, theme } = useLibStore()

  return (
    <Routes>
      {DOCS_CATEGORIES.map(({ key: categoryKey, items }) =>
        items.map(({ key: itemKey, sections }) =>
          sections.map(({ key: sectionKey }) => {
            return (
              <Route
                key={`${categoryKey}/${itemKey}/${sectionKey}`}
                path={`${categoryKey}/${itemKey}/${sectionKey}`}
                Component={() => {
                  let Component
                  try {
                    Component = require(`./Comp${sentenceCase(sectionKey)}Page`)[
                      `Comp${sentenceCase(sectionKey)}Page`
                    ]
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
              pathname: `/docs/${DOCS_CATEGORIES[0].key}/${DOCS_CATEGORIES[0].items[0].key}/${DOCS_CATEGORIES[0].items[0].sections[0].key}`,
              search: formatAsQueryString({ lang, theme }),
            }}
            replace
          />
        }
      />
    </Routes>
  )
}
