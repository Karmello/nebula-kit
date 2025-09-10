import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'client/definitions'
import { CodeSnippet } from 'client/components'
import { elemToStringService } from 'client/services'
import { Text, Flex, Box } from 'lib/components'

import { ListWithHeading } from './ListWithHeading'
import { ListWithChips } from './ListWithChips'

const SingleOverview = (props: ComponentMeta<unknown>) => {
  const elemToString = elemToStringService()

  const {
    overview: {
      description,
      responsibilities,
      characteristics,
      defaultBehavior,
      useCases,
      responsiveProps,
      inheritedProps,
    },
    examples,
  } = props

  return (
    <Flex flexDirection="column" alignItems="stretch" gap={20}>
      <Text typography="lead">{description}</Text>
      {examples?.[0] ? <CodeSnippet code={elemToString(examples[0].jsx)} /> : null}
      {inheritedProps ? <ListWithChips heading="Inherits from:" items={Object.keys(inheritedProps)} /> : null}
      {responsibilities ? <ListWithHeading heading="Responsibilities:" items={responsibilities} /> : null}
      {characteristics ? <ListWithHeading heading="Characteristics:" items={characteristics} /> : null}
      {defaultBehavior ? <ListWithHeading heading="Default behavior:" items={defaultBehavior} /> : null}
      {useCases ? <ListWithHeading heading="Use cases:" items={useCases} /> : null}
      {responsiveProps ? <ListWithChips heading="Responsive own props:" items={responsiveProps} /> : null}
      {inheritedProps
        ? Object.keys(inheritedProps).map(componentName => (
            <ListWithChips
              key={componentName}
              heading={`Props inherited from ${componentName}:`}
              items={inheritedProps[componentName]}
            />
          ))
        : null}
    </Flex>
  )
}

export const ComponentOverviewPage = () => {
  const { itemKey } = useComponentsPageStore()

  let meta: Record<string, ComponentMeta<unknown>>

  try {
    meta = require(`../../../meta/${itemKey}.meta.tsx`).default
  } catch {
    meta = null
  }

  if (!meta) return null

  return (
    <Box maxInlineSize="55rem">
      {Object.keys(meta).map(key => (
        <SingleOverview key={key} {...meta[key]} />
      ))}
    </Box>
  )
}
