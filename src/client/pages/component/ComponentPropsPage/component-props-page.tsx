import { pascalCase } from 'change-case'

import { useCorePageStore, useProPageStore } from 'client/store'
import { PageKey } from 'client/definitions'
import meta from 'client/meta'

import { PropsTable } from './PropsTable'

export const ComponentPropsPage = ({ pageKey }: { pageKey: PageKey.core | PageKey.pro }) => {
  const corePageItemKey = useCorePageStore(state => state.itemKey)
  const proPageItemKey = useProPageStore(state => state.itemKey)

  const itemKeyPascal = pascalCase((pageKey === PageKey.core ? corePageItemKey : proPageItemKey) || '')

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
