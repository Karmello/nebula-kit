import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { sentenceCase, pascalCase } from 'change-case'

import { useLibStore } from 'lib/state'
import { Button, Spacer } from 'lib/components'
import { BOX_INTENTS, BOX_VARIANTS, BoxIntent, BoxVariant } from 'lib/definitions'
import { formatAsQueryString, useNavigateTo } from 'client/services'
import { usePlaygroundStore } from 'client/store'
import { PLAYGROUND_ROUTING_CONFIG } from 'client/definitions'

const PLAYGROUND_PAGES = PLAYGROUND_ROUTING_CONFIG.map(({ key, items }) => ({
  key,
  label: sentenceCase(key),
  items: items.map(key => ({ key, label: pascalCase(key) })),
}))

const DEFAULT_PATHNAME = `${PLAYGROUND_PAGES[0].key}/${PLAYGROUND_PAGES[0].items[0].key}`

export const PlaygroundPage = () => {
  const { pathname } = useLocation()

  const navigateTo = useNavigateTo()
  const { lang, theme } = useLibStore()
  const playgroundStore = usePlaygroundStore()

  useEffect(() => {
    const [, categoryKey, itemKey] = pathname.split('/').filter(s => s)
    playgroundStore.setCategoryKey(categoryKey as never)
    playgroundStore.setItemKey(itemKey as never)
  }, [pathname])

  return (
    <>
      <nav>
        {PLAYGROUND_PAGES.map(({ key, label }) => (
          <Button
            key={key}
            intent={playgroundStore.categoryKey === key ? 'primary' : 'neutral'}
            onClick={() =>
              navigateTo(`/playground/${key}/${PLAYGROUND_PAGES.find(p => p.key === key).items[0].key}`)
            }
          >
            {label}
          </Button>
        ))}
      </nav>
      <Spacer size={20} />
      <nav>
        {PLAYGROUND_PAGES.find(obj => obj.key === playgroundStore.categoryKey).items.map(({ key, label }) => (
          <Button
            key={key}
            intent={playgroundStore.itemKey === key ? 'primary' : 'neutral'}
            onClick={() => navigateTo(`/playground/${playgroundStore.categoryKey}/${key}`)}
          >
            {label}
          </Button>
        ))}
      </nav>
      <Spacer size={10} />
      <select
        value={playgroundStore.variant}
        onChange={e => playgroundStore.setVariant(e.target.value as BoxVariant)}
      >
        {BOX_VARIANTS.map(v => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
      <select
        value={playgroundStore.intent}
        onChange={e => playgroundStore.setIntent(e.target.value as BoxIntent)}
      >
        {BOX_INTENTS.map(v => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
      <Routes>
        {PLAYGROUND_PAGES.flatMap(({ key: categoryKey, items }) =>
          items.map(({ key: itemKey }) => {
            let Component
            try {
              Component = require(`../../playground/${pascalCase(itemKey)}Playground`)[
                `${pascalCase(itemKey)}Playground`
              ]
            } catch {
              Component = null
            }
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
    </>
  )
}
