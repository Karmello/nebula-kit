import { useLayoutEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import { pascalCase, kebabCase } from 'change-case'

import { FOUNDATIONS_CATEGORIES, FOUNDATIONS_SECTIONS, PageKey } from 'client/definitions'
import { NextPageButton } from 'client/components'
import { Spacer } from 'lib/components'

const SingleFoundationPage = ({ sectionKey }: { sectionKey: string }) => {
  const [Component, setComponent] = useState(null)

  useLayoutEffect(() => {
    import(`../../foundations/${pascalCase(sectionKey)}/${kebabCase(sectionKey)}.tsx`)
      .then(mod => {
        setComponent(() => mod.default)
      })
      .catch(ex => {
        console.warn(ex)
      })
  }, [])

  if (!Component) return null

  return (
    <>
      <Component />
      <Spacer blockSize="60px" />
      <NextPageButton pageKey={PageKey.foundations} />
    </>
  )
}

const ROUTES = FOUNDATIONS_SECTIONS.map(({ categoryKey, itemKey, sectionKey }) => (
  <Route
    key={`${categoryKey}/${itemKey}/${sectionKey}`}
    path={`${categoryKey}/${itemKey}/${sectionKey}`}
    Component={() => <SingleFoundationPage sectionKey={sectionKey} />}
  />
))

export const FoundationsPageRoutes = () => {
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
