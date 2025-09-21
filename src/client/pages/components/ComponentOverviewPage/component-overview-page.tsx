import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'client/definitions'
import { CodeSnippet } from 'client/components'
import { elemToStringService } from 'client/services'
import meta from 'client/meta'
import { Text, Flex, Box, Spacer, Section } from 'lib/components'

import { ListWithHeading } from './ListWithHeading'
import { ListWithChips } from './ListWithChips'

const SingleOverview = ({ meta }: { meta: ComponentMeta<object> }) => {
  const elemToString = elemToStringService()

  const {
    overview: { title, description, role, behavior, byDefault, examplesOfUse, composedOf, rendersAs },
    examples,
    props,
  } = meta

  const content = (
    <Flex flexDirection="column" alignItems="stretch" gap={15}>
      <Text typography="lead">{description}</Text>
      {examples?.[0] ? <CodeSnippet code={elemToString(examples[0].jsx)} /> : null}
      {composedOf ? (
        <ListWithChips heading="Composed of:" items={Object.keys(composedOf)} intent="warning" />
      ) : null}
      {rendersAs ? <ListWithChips heading="Renders as:" items={rendersAs} intent="danger" /> : null}
      {role ? <ListWithHeading heading="Role:" items={role} /> : null}
      {behavior ? <ListWithHeading heading="Behavior:" items={behavior} /> : null}
      {byDefault ? <ListWithHeading heading="By default:" items={byDefault} /> : null}
      {examplesOfUse ? <ListWithHeading heading="Examples of use:" items={examplesOfUse} /> : null}
      {props ? (
        <ListWithChips heading="Props:" items={Object.values<any>(props).map(prop => prop.name)} />
      ) : null}
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
        <Section heading={<Text typography="h5">{title}</Text>} variant="outline" padding={10}>
          {content}
        </Section>
      ) : (
        content
      )}
      <Spacer blockSize={30} />
    </>
  )
}

export const ComponentOverviewPage = () => {
  const { itemKey } = useComponentsPageStore()

  if (!meta[itemKey]) return null

  const metaKeys = Object.keys(meta[itemKey])

  return (
    <Box maxInlineSize="55rem">
      {metaKeys.map(key => (
        <SingleOverview key={key} meta={meta[itemKey][key]} />
      ))}
    </Box>
  )
}
