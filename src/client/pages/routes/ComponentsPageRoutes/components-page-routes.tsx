import { Navigate, Route, Routes } from 'react-router-dom'

import { ComponentOverviewPage, ComponentPropsPage, ComponentExamplesPage } from 'client/pages'
import { COMPONENT_CATEGORIES, PageKey } from 'client/definitions'
import { formatAsQueryString } from 'client/services'
import { useLibStore } from 'lib/state'
import { Spacer } from 'lib/components'

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
  const { theme } = useLibStore()

  return (
    <>
      <Spacer size={10} />
      <Routes>
        {COMPONENT_CATEGORIES.map(({ key: categoryKey, items }) =>
          items.map(({ key: itemKey, sections }) =>
            sections.map(({ key: sectionKey }) => {
              return (
                <Route
                  key={`${categoryKey}/${itemKey}/${sectionKey}`}
                  path={`${categoryKey}/${itemKey}/${sectionKey}`}
                  element={<PageResolver sectionKey={sectionKey} />}
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
                search: formatAsQueryString({ theme }),
              }}
              replace
            />
          }
        />
      </Routes>
    </>
  )
}
