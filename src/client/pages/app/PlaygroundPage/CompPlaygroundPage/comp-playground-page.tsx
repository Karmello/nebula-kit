import { pascalCase } from 'change-case'

import { usePlaygroundPageStore } from 'client/store'
import { Divider, Spacer, Text } from 'lib/components'

export const CompPlaygroundPage = () => {
  const { itemKey } = usePlaygroundPageStore()

  let Component

  try {
    Component = require(`../../../playground/${pascalCase(itemKey)}Playground`)[
      `${pascalCase(itemKey)}Playground`
    ]
  } catch {
    Component = null
  }

  return (
    <>
      <Text typography="h3">{pascalCase(itemKey)}</Text>
      <Divider />
      <Spacer size={10} />
      {Component ? <Component /> : null}
    </>
  )
}
