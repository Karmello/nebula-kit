import { memo } from 'react'

import { Text, List, Flex, Box } from 'lib/components'
import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'lib/definitions'
import { CodeSnippet } from 'client/components'
import { elemToStringService } from 'client/services'

const ListWithHeading = ({ heading, items }: { heading: string; items: string[] }) => (
  <Flex flexDirection="column" gap={5}>
    <Text bold>{heading}</Text>
    <List listStyle="circle">
      {items.map((s, i) => (
        <List.Item key={i} marginBottom={i < items.length - 1 ? 5 : 0}>
          {s}
        </List.Item>
      ))}
    </List>
  </Flex>
)

const ListWithChips = ({ heading, items }: { heading: string; items: readonly string[] }) => (
  <Flex flexDirection="column" gap={5}>
    <Text bold>{heading}</Text>
    <Flex flexDirection="row" flexWrap="wrap" gap={5}>
      {items.map((s, i) => (
        <Box key={i} variant="solid" intent="secondary" paddingInline={5} paddingBlock={3}>
          {s}
        </Box>
      ))}
    </Flex>
  </Flex>
)

export const ComponentOverviewPage = memo(() => {
  const { itemKey } = useComponentsPageStore()
  const elemToString = elemToStringService()

  let meta: ComponentMeta<unknown>

  try {
    meta = require(`../../../meta/${itemKey}.meta.tsx`).default
  } catch {
    meta = null
  }

  if (!meta) {
    return null
  }

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
  } = meta

  return (
    <Flex flexDirection="column" alignItems="stretch" gap={20} maxInlineSize="55rem">
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
})
