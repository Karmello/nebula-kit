import { useComponentsPageStore } from 'client/store'
import meta from 'client/meta'

import { PropsTable } from './PropsTable'

export const ComponentPropsPage = () => {
  const { itemKey } = useComponentsPageStore()

  if (!meta[itemKey]) return null

  const metaKeys = Object.keys(meta[itemKey] || [])

  return metaKeys.map(key =>
    meta[itemKey][key].ownProps ? (
      <PropsTable
        key={key}
        category={metaKeys.length > 1 ? meta[itemKey][key].overview.title : undefined}
        data={meta[itemKey][key].ownProps}
      />
    ) : null
  )
}
