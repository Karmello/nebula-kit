import { useMemo } from 'react'
import { Route, Routes } from 'react-router'
import { pascalCase } from 'change-case'

import * as FOUNDATION_COMPONENTS from 'client/pages/foundations'
import { FOUNDATIONS_SECTIONS, PageKey } from 'client/definitions'
import { NextPageButton } from 'client/components'
import { Spacer } from 'lib/components'

export const FoundationsPageRoutes = () => {
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
              <Component />
              <Spacer blockSize="60px" />
              <NextPageButton pageKey={PageKey.foundations} />
            </>
          )}
        />
      )
    })
  }, [])

  return (
    <>
      <Spacer blockSize="20px" />
      <Routes>{ROUTES}</Routes>
    </>
  )
}
