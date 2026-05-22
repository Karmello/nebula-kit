import { pascalCase } from 'change-case'

import { useComponentsPageStore } from 'client/store'
import meta from 'client/meta'

import { PropsTable } from './PropsTable'

export const ComponentPropsPage = () => {
  const componentsPageItemKey = useComponentsPageStore(state => state.itemKey)

  const itemKeyPascal = pascalCase(componentsPageItemKey || '')

  if (!meta[itemKeyPascal]) return null

  const metaKeys = Object.keys(meta[itemKeyPascal] || [])

  return metaKeys.map(key =>
    meta[itemKeyPascal][key].props ? (
      <PropsTable
        key={key}
        category={metaKeys.length > 1 ? meta[itemKeyPascal][key].overview.name : undefined}
        data={meta[itemKeyPascal][key].props}
      />
    ) : null
  )
}
