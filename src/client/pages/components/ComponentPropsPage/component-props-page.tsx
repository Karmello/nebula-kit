import { useComponentsPageStore } from 'client/store'
import { getMetaSync } from 'client/meta'

import { PropsTable } from './PropsTable'

export const ComponentPropsPage = () => {
  const { itemKey } = useComponentsPageStore()

  const meta = getMetaSync(itemKey)

  if (!meta) return null

  const metaKeys = Object.keys(meta || [])

  return metaKeys.map(key =>
    meta[key].ownProps ? (
      <PropsTable
        key={key}
        category={metaKeys.length > 1 ? meta[key].overview.title : undefined}
        data={meta[key].ownProps}
      />
    ) : null
  )
}
