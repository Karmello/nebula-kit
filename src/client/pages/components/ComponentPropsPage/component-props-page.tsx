import { memo, useMemo } from 'react'

import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'lib/definitions'
import { Spacer, Text } from 'lib/components'

import { PropsTable } from './PropsTable'

export const ComponentPropsPage = memo(() => {
  const { itemKey } = useComponentsPageStore()

  let meta: ComponentMeta<unknown>

  try {
    meta = require(`../../../meta/${itemKey}.meta.tsx`).default
  } catch {
    meta = null
  }

  const groupedByCategory = Object.groupBy(meta?.props || [], prop => prop.category)

  const memorized = useMemo(() => {
    return Object.keys(groupedByCategory).map(category => (
      <PropsTable key={category} data={groupedByCategory[category]} />
    ))
  }, [groupedByCategory])

  if (!meta) {
    return null
  }

  return (
    <>
      {meta.overview.propsDescription ? (
        <>
          <Text intent="secondary">{meta.overview.propsDescription}</Text>
          <Spacer size={15} />
        </>
      ) : null}
      {memorized}
    </>
  )
})
