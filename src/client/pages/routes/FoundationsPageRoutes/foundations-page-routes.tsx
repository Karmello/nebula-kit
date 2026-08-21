import { useMemo } from 'react'
import { pascalCase } from 'change-case'
import { Navigate, Route, Routes, useLocation } from 'react-router'

import { NEB_LENGTH, Spacer } from 'lib/components'
import { NextPageButton } from 'client/components'
import { FOUNDATIONS_CATEGORIES, FOUNDATIONS_SECTIONS, PageKey } from 'client/definitions'
import * as FOUNDATION_COMPONENTS from 'client/pages/foundations'

export const FoundationsPageRoutes = () => {
  const { pathname } = useLocation()

  const ROUTES = useMemo(() => {
    return FOUNDATIONS_SECTIONS.map(({ categoryKey, itemKey, sectionKey }) => {
      const componentKey = itemKey === 'changelog' ? itemKey : sectionKey
      const Component = FOUNDATION_COMPONENTS[pascalCase(componentKey) as never] as any

      if (!Component) {
        return null
      }

      return (
        <Route
          key={`${categoryKey}/${itemKey}/${sectionKey}`}
          path={`${categoryKey}/${itemKey}/${sectionKey}`}
          Component={() => (
            <>
              <Component pathname={pathname} />
              <Spacer blockSize={NEB_LENGTH.px_048} />
              <NextPageButton pageKey={PageKey.foundations} />
            </>
          )}
        />
      )
    })
  }, [pathname])

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
