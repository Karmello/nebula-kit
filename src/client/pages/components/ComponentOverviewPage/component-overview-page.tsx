import { pascalCase } from 'change-case'

import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'client/definitions'
import { CodeSnippet } from 'client/components'
import { elemToStringService, useNavigateTo } from 'client/services'
import meta from 'client/meta'
import { Text, Flex, Box, Spacer, Section, LinkButton } from 'lib/components'

import { ListWithHeading } from './ListWithHeading'
import { ListWithChips } from './ListWithChips'

const SingleOverview = ({ meta }: { meta: ComponentMeta<object> }) => {
  const elemToString = elemToStringService()

  const navigateTo = useNavigateTo()

  const {
    overview: { name, title, description, composedOf, rendersAs, slots, readMoreLink },
    examples,
    props,
  } = meta

  const content = (
    <Flex flexDirection="column" alignItems="stretch" gap={15}>
      <Text typography="lead">{title}</Text>
      {examples?.[0] ? <CodeSnippet code={examples[0].code || elemToString(examples[0].jsx)} /> : null}
      {description ? <ListWithHeading heading="Description:" items={description} /> : null}
      {composedOf ? <ListWithChips heading="Composed of:" items={composedOf} intent="warning" /> : null}
      {rendersAs ? (
        <ListWithChips heading="Renders as:" items={rendersAs as string[]} intent="danger" />
      ) : null}
      {props ? (
        <ListWithChips heading="Props:" items={Object.keys(props).sort((a, b) => a.localeCompare(b))} />
      ) : null}
      {slots ? <ListWithChips heading="Slots:" items={slots} intent="inverse" /> : null}
      {readMoreLink ? (
        <Box>
          <LinkButton
            href={readMoreLink.href}
            intent="primary"
            iconName="arrow-right"
            onClick={() => {
              navigateTo(readMoreLink.href)
            }}
            variant="ghost"
          >
            {readMoreLink.label}
          </LinkButton>
        </Box>
      ) : null}
    </Flex>
  )

  return (
    <>
      {name ? (
        <Section heading={name} variant="outline" intent="secondary">
          <Box intent="neutral">{content}</Box>
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

  const itemKeyPascal = pascalCase(itemKey || '')

  if (!meta[itemKeyPascal]) return null

  const metaKeys = Object.keys(meta[itemKeyPascal])

  return (
    <Box maxInlineSize="55rem">
      {metaKeys.map(key => (
        <SingleOverview key={key} meta={meta[itemKeyPascal][key]} />
      ))}
    </Box>
  )
}
