import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'client/definitions'
import { CodeSnippet } from 'client/components'
import { elemToStringService } from 'client/services'
import { Text, Flex, Box, Spacer, Section } from 'lib/components'

import { ListWithHeading } from './ListWithHeading'
import { ListWithChips } from './ListWithChips'

const SingleOverview = ({ meta }: { meta: ComponentMeta<unknown> }) => {
  const elemToString = elemToStringService()

  const {
    overview: {
      title,
      description,
      responsibilities,
      characteristics,
      defaultBehavior,
      useCases,
      responsiveProps,
      composedOf,
    },
    examples,
  } = meta

  const content = (
    <>
      <Flex flexDirection="column" alignItems="stretch" gap={20}>
        <Text typography="lead">{description}</Text>
        {examples?.[0] ? <CodeSnippet code={elemToString(examples[0].jsx)} /> : null}
        {composedOf ? <ListWithChips heading="Composed of:" items={Object.keys(composedOf)} /> : null}
        {responsibilities ? <ListWithHeading heading="Responsibilities:" items={responsibilities} /> : null}
        {characteristics ? <ListWithHeading heading="Characteristics:" items={characteristics} /> : null}
        {defaultBehavior ? <ListWithHeading heading="Default behavior:" items={defaultBehavior} /> : null}
        {useCases ? <ListWithHeading heading="Use cases:" items={useCases} /> : null}
        {responsiveProps ? <ListWithChips heading="Responsive own props:" items={responsiveProps} /> : null}
        {composedOf
          ? Object.keys(composedOf).map(componentName =>
              composedOf[componentName]?.length ? (
                <ListWithChips
                  key={componentName}
                  heading={`Props inherited from ${componentName}:`}
                  items={composedOf[componentName]}
                />
              ) : null
            )
          : null}
      </Flex>
      <Spacer size={40} />
    </>
  )

  if (title) {
    return (
      <Section heading={title} headingProps={{ typography: 'h5' }}>
        {content}
      </Section>
    )
  } else {
    return content
  }
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

  const metaKeys = Object.keys(meta)

  return (
    <Box maxInlineSize="55rem">
      {metaKeys.map(key => (
        <SingleOverview key={key} meta={meta[key]} />
      ))}
    </Box>
  )
}
