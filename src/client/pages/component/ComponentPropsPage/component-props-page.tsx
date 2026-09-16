import { Fragment } from 'react'
import { pascalCase } from 'change-case'

import { NEB_LENGTH } from 'lib/constants'
import { Spacer } from 'lib/index.core'
import meta from 'client/meta'
import { useComponentsPageStore } from 'client/store'

import { PropsTable } from './PropsTable'

export const ComponentPropsPage = () => {
  const componentsPageItemKey = useComponentsPageStore(state => state.itemKey)

  const itemKeyPascal = pascalCase(componentsPageItemKey || '')

  if (!meta[itemKeyPascal]) return null

  const metaKeys = Object.keys(meta[itemKeyPascal] || [])

  return metaKeys.map(key =>
    meta[itemKeyPascal][key].props ? (
      <Fragment key={key}>
        <PropsTable
          data={meta[itemKeyPascal][key].props}
          category={metaKeys.length > 1 ? meta[itemKeyPascal][key].overview.name : undefined}
        />
        <Spacer blockSize={NEB_LENGTH.px_048} />
      </Fragment>
    ) : null
  )
}
