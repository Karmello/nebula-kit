import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { pascalCase, kebabCase } from 'change-case'

import { FOUNDATION_CATEGORIES, PageKey } from 'client/definitions'
import { formatAsQueryString } from 'client/services'
import { useLibStore } from 'lib/state'
import { Spacer } from 'lib/components'

export const FoundationsPageRoutes = () => {
  const { theme } = useLibStore()

  return (
    <>
      <Spacer blockSize={10} />
      <Routes>
        {FOUNDATION_CATEGORIES.map(({ key: categoryKey, items }) =>
          items.map(({ key: itemKey, sections }) =>
            sections.map(({ key: sectionKey }) => {
              const Component = () => {
                const [Component, setComponent] = useState(null)
                import(`../../foundations/${pascalCase(sectionKey)}/${kebabCase(sectionKey)}.tsx`)
                  .then(mod => {
                    setComponent(mod.default)
                  })
                  .catch(ex => {
                    console.warn(ex)
                  })
                return Component
              }

              return (
                <Route
                  key={`${categoryKey}/${itemKey}/${sectionKey}`}
                  path={`${categoryKey}/${itemKey}/${sectionKey}`}
                  Component={Component}
                />
              )
            })
          )
        )}
        <Route
          path="*"
          Component={() => {
            if (typeof window === 'undefined') return null
            return (
              <Navigate
                to={{
                  pathname: `/${PageKey.foundations}/${FOUNDATION_CATEGORIES[0].key}/${FOUNDATION_CATEGORIES[0].items[0].key}/${FOUNDATION_CATEGORIES[0].items[0].sections[0].key}`,
                  search: formatAsQueryString({ theme }),
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
