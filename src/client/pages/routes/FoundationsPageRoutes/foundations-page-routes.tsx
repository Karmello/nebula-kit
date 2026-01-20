import { Navigate, Route, Routes } from 'react-router'

import { FOUNDATIONS_CATEGORIES, FOUNDATIONS_SECTIONS, PageKey } from 'client/definitions'
import { NextPageButton } from 'client/components'
import { Spacer } from 'lib/components'

import { FOUNDATION_COMPONENTS } from './definitions'

export const FoundationsPageRoutes = () => {
  const ROUTES = FOUNDATIONS_SECTIONS.map(({ categoryKey, itemKey, sectionKey }) => (
    <Route
      key={`${categoryKey}/${itemKey}/${sectionKey}`}
      path={`${categoryKey}/${itemKey}/${sectionKey}`}
      Component={() => {
        const Component = FOUNDATION_COMPONENTS[sectionKey]
        // if (!Component) return null
        return (
          <>
            <Component />
            <Spacer blockSize="60px" />
            <NextPageButton pageKey={PageKey.foundations} />
          </>
        )
      }}
    />
  ))

  return (
    <>
      <Spacer blockSize="20px" />
      <Routes>
        {ROUTES}
        <Route
          path="*"
          Component={() => {
            if (typeof window === 'undefined') return null
            return (
              <Navigate
                to={{
                  pathname: `${PageKey.foundations}/${FOUNDATIONS_CATEGORIES[0].key}/${FOUNDATIONS_CATEGORIES[0].items[0].key}/${FOUNDATIONS_CATEGORIES[0].items[0].sections[0].key}`,
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
