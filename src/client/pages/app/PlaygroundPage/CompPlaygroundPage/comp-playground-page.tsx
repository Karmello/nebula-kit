import { pascalCase } from 'change-case'

import { usePlaygroundPageStore } from 'client/store'
import { Section } from 'lib/components'

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
    <Section heading={pascalCase(itemKey)} headingProps={{ typography: 'h3' }}>
      {Component ? <Component /> : null}
    </Section>
  )
}
