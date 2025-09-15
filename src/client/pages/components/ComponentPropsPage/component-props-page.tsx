import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'client/definitions'

import { PropsTable } from './PropsTable'
import { Spacer } from 'lib/components'

export const ComponentPropsPage = () => {
  const { itemKey } = useComponentsPageStore()

  let meta: Record<string, ComponentMeta<unknown>>

  try {
    meta = require(`../../../meta/${itemKey}.meta.tsx`).default
  } catch {
    meta = null
  }

  if (!meta) return null

  const metaKeys = Object.keys(meta || [])

  return metaKeys.map(key =>
    meta[key].ownProps ? (
      <>
        <PropsTable
          key={key}
          category={metaKeys.length > 1 ? meta[key].overview.title : undefined}
          data={meta[key].ownProps}
        />
        <Spacer blockSize={30} />
      </>
    ) : null
  )
}
