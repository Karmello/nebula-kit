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
    overview: { title, description, role, behavior, byDefault, examplesOfUse, responsiveProps, composedOf },
    examples,
  } = meta

  const content = (
    <Flex flexDirection="column" alignItems="stretch" gap={20}>
      <Text typography="lead">{description}</Text>
      {examples?.[0] ? <CodeSnippet code={elemToString(examples[0].jsx)} /> : null}
      {composedOf ? <ListWithChips heading="Composed of:" items={Object.keys(composedOf)} /> : null}
      {role ? <ListWithHeading heading="Role:" items={role} /> : null}
      {behavior ? <ListWithHeading heading="Behavior:" items={behavior} /> : null}
      {byDefault ? <ListWithHeading heading="By default:" items={byDefault} /> : null}
      {examplesOfUse ? <ListWithHeading heading="Examples of use:" items={examplesOfUse} /> : null}
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
  )

  return (
    <>
      {title ? (
        <Section heading={title} headingProps={{ typography: 'h5' }} variant="outline" padding={10}>
          {content}
        </Section>
      ) : (
        content
      )}
      <Spacer size={30} />
    </>
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

  const metaKeys = Object.keys(meta)

  return (
    <Box maxInlineSize="55rem">
      {metaKeys.map(key => (
        <SingleOverview key={key} meta={meta[key]} />
      ))}
    </Box>
  )
}
