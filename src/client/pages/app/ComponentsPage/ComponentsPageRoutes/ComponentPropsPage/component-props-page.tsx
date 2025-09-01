import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'lib/definitions'
import { Spacer, Text } from 'lib/components'

import { PropsTable } from './PropsTable'

export const ComponentPropsPage = () => {
  const { itemKey } = useComponentsPageStore()

  let meta: ComponentMeta<unknown>

  try {
    meta = require(`../../../../../meta/${itemKey}.meta.ts`).default
  } catch {
    meta = null
  }

  if (!meta) {
    return null
  }

  const groupedByCategory = Object.groupBy(meta.props, prop => prop.category)

  return (
    <>
      {meta.propsInfo ? (
        <>
          <Text intent="secondary">{meta.propsInfo}</Text>
          <Spacer size={15} />
        </>
      ) : null}
      {Object.keys(groupedByCategory).map(category => (
        <PropsTable key={category} data={groupedByCategory[category]} />
      ))}
    </>
  )
}
