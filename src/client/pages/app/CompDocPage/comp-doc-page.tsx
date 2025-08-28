import { Navigate, Route, Routes } from 'react-router-dom'
import { pascalCase } from 'change-case'

import { useDocsPageStore } from 'client/store'
import { DOCS_PAGES } from 'client/definitions'
import { formatAsQueryString } from 'client/services'
import { useLibStore } from 'lib/state'
import { CompMetaRenderer } from 'client/components'
import { ComponentMeta } from 'lib/definitions'

const DEFAULT_PATHNAME = `${DOCS_PAGES[0].key}/${DOCS_PAGES[0].items[0].key}`

export const CompDocPage = () => {
  const { lang, theme } = useLibStore()
  const docsPageStore = useDocsPageStore()

  let META_DATA: ComponentMeta

  try {
    META_DATA = require(`../../../../meta/${docsPageStore.itemKey}.json`) as ComponentMeta
  } catch {
    META_DATA = null
  }

  return (
    <>
      <CompMetaRenderer data={META_DATA} />
      <Routes>
        {DOCS_PAGES.flatMap(({ key: categoryKey, items }) =>
          items.map(({ key: itemKey }) => {
            let Component
            try {
              Component = require(`../../docs/${pascalCase(itemKey)}Docs`)[`${pascalCase(itemKey)}Docs`]
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
