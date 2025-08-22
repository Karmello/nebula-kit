import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { sentenceCase, pascalCase } from 'change-case'

import { useLibStore } from 'lib/state'
import { formatAsQueryString } from 'client/services'
import { usePlaygroundStore } from 'client/store'
import { PLAYGROUND_ROUTING_CONFIG } from 'client/definitions'

const PLAYGROUND_PAGES = PLAYGROUND_ROUTING_CONFIG.map(({ key, items }) => ({
  key,
  label: sentenceCase(key),
  items: items.map(key => {
    return {
      key,
      label: pascalCase(key),
      Component: require(`../../playground/${pascalCase(key)}Playground`)[`${pascalCase(key)}Playground`],
    }
  }),
}))

const DEFAULT_PATHNAME = `${PLAYGROUND_PAGES[0].key}/${PLAYGROUND_PAGES[0].items[0].key}`

export const PlaygroundPage = () => {
  const { pathname } = useLocation()

  const { lang, theme } = useLibStore()
  const { setCategoryKey, setItemKey } = usePlaygroundStore()

  useEffect(() => {
    const [, categoryKey, itemKey] = pathname.split('/').filter(s => s)
    setCategoryKey(categoryKey as never)
    setItemKey(itemKey as never)
  }, [pathname])

  return (
    <Routes>
      {PLAYGROUND_PAGES.flatMap(({ key: categoryKey, items }) =>
        items.map(({ key: itemKey, Component }) => {
          return <Route key={itemKey} path={`${categoryKey}/${itemKey}`} Component={Component} />
        })
      )}
      <Route
        path="*"
        element={
          <Navigate to={{ pathname: DEFAULT_PATHNAME, search: formatAsQueryString({ lang, theme }) }} />
        }
      />
    </Routes>
  )
}
