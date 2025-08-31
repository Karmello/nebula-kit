import { Navigate, Route, Routes } from 'react-router-dom'
import { pascalCase } from 'change-case'

import { COMPONENT_CATEGORIES, PageKey } from 'client/definitions'
import { formatAsQueryString } from 'client/services'
import { useLibStore } from 'lib/state'

import { ComponentPropsPage } from './ComponentPropsPage'

export const ComponentsPageRoutes = () => {
  const { lang, theme } = useLibStore()

  return (
    <Routes>
      {COMPONENT_CATEGORIES.map(({ key: categoryKey, items }) =>
        items.map(({ key: itemKey, sections }) =>
          sections.map(({ key: sectionKey }) => {
            return (
              <Route
                key={`${categoryKey}/${itemKey}/${sectionKey}`}
                path={`${categoryKey}/${itemKey}/${sectionKey}`}
                Component={
                  sectionKey === 'props'
                    ? ComponentPropsPage
                    : () => {
                        let Component
                        try {
                          Component = require(
                            `../../../components/${pascalCase(itemKey)}/${itemKey}-${sectionKey}-page`
                          ).default
                        } catch {
                          Component = null
                        }
                        return Component ? <Component /> : null
                      }
                }
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
              pathname: `/${PageKey.components}/${COMPONENT_CATEGORIES[0].key}/${COMPONENT_CATEGORIES[0].items[0].key}/${COMPONENT_CATEGORIES[0].items[0].sections[0].key}`,
              search: formatAsQueryString({ lang, theme }),
            }}
            replace
          />
        }
      />
    </Routes>
  )
}
