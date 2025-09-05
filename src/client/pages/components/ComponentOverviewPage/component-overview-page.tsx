import { memo } from 'react'

import { Text, List, Flex, Box } from 'lib/components'
import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'lib/definitions'
import { CodeSnippet } from 'client/components'
import { elemToStringService } from 'client/services'
import BOX_META from 'client/meta/box.meta'

const ListWithHeading = ({ heading, items }: { heading: string; items: string[] }) => (
  <Box>
    <Text marginBottom={7} bold>
      {heading}
    </Text>
    <List listStyle="circle">
      {items.map((s, i) => (
        <List.Item key={i} marginBottom={i < items.length - 1 ? 5 : 0}>
          {s}
        </List.Item>
      ))}
    </List>
  </Box>
)

const ListWithChips = ({ heading, items }: { heading: string; items: string[] }) => (
  <Box>
    <Text marginBottom={7} bold>
      {heading}
    </Text>
    <Flex flexDirection="row" flexWrap="wrap" gap={5}>
      {items.map((s, i) => (
        <Box key={i} variant="solid" intent="secondary" paddingInline={5} paddingBlock={3}>
          {s}
        </Box>
      ))}
    </Flex>
  </Box>
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

  return (
    <Flex flexDirection="column" alignItems="stretch" gap={20}>
      <Text typography="lead" maxInlineSize="100ch">
        {meta.overview.description}
      </Text>
      {meta.examples?.[0] ? <CodeSnippet code={elemToString(meta.examples[0].jsx)} /> : null}
      {meta.overview.responsibilities ? (
        <ListWithHeading heading="Responsibilities:" items={meta.overview.responsibilities} />
      ) : null}
      {meta.overview.useCases ? (
        <ListWithHeading heading="Use cases:" items={meta.overview.useCases} />
      ) : null}
      {meta.overview.defaultBehavior ? (
        <ListWithHeading heading="Default behavior:" items={meta.overview.defaultBehavior} />
      ) : null}
      {meta.overview.responsiveProps ? (
        <ListWithChips heading="Responsive props:" items={BOX_META.overview.responsiveProps} />
      ) : null}
    </Flex>
  )
})
