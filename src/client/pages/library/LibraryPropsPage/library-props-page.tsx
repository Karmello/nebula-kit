import { Fragment } from 'react'

import { NEB_LENGTH } from 'lib/constants'
import { Spacer } from 'lib/index.core'
import { LIBRARY_ITEM_LABEL_BY_KEY } from 'client/definitions'
import meta from 'client/meta'
import { useLibraryPageStore } from 'client/store'

import { PropsTable } from './PropsTable'

export const LibraryPropsPage = () => {
  const libraryPageItemKey = useLibraryPageStore(state => state.itemKey)

  const itemLabel = LIBRARY_ITEM_LABEL_BY_KEY[libraryPageItemKey] || ''

  if (!meta[itemLabel]) return null

  const metaKeys = Object.keys(meta[itemLabel] || [])

  return metaKeys.map(key =>
    meta[itemLabel][key].props ? (
      <Fragment key={key}>
        <PropsTable
          data={meta[itemLabel][key].props}
          category={metaKeys.length > 1 ? meta[itemLabel][key].overview.name : undefined}
        />
        <Spacer blockSize={NEB_LENGTH.px_048} />
      </Fragment>
    ) : null
  )
}
