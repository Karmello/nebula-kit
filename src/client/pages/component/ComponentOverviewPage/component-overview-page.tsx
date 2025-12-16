import { pascalCase } from 'change-case'

import meta from 'client/meta'
import { useCorePageStore, useProPageStore } from 'client/store'
import { ComponentMeta, PageKey } from 'client/definitions'
import { CodeSnippet } from 'client/components'
import { convertElemToString } from 'client/helpers'
import { useNavigateTo } from 'client/hooks'
import { Text, Flex, Box, Spacer, Section, Button, Link } from 'lib/components'

import { ListWithHeading } from './ListWithHeading'
import { ListWithChips } from './ListWithChips'

const SingleOverview = ({ meta }: { meta: ComponentMeta<object> }) => {
  const navigateTo = useNavigateTo()

  const {
    overview: { name, title, description, composedOf, rendersAs, slots, hooks, readMoreLink },
    examples,
    props,
  } = meta

  const content = (
    <Flex flexDirection="column" alignItems="stretch" gap="30px">
      <Text typography="lead">{title}</Text>
      {examples?.[0] ? (
        <CodeSnippet lang="tsx" code={examples[0].code || convertElemToString(examples[0].jsx)} />
      ) : null}
      {description ? <ListWithHeading heading="Description:" items={description} /> : null}
      {composedOf ? <ListWithChips heading="Composed of:" items={composedOf} color="red" /> : null}
      {rendersAs ? <ListWithChips heading="Renders as:" items={rendersAs as string[]} color="amber" /> : null}
      {props ? (
        <ListWithChips heading="Props:" items={Object.keys(props).sort((a, b) => a.localeCompare(b))} />
      ) : null}
      {slots ? <ListWithChips heading="Slots:" items={slots} color="gray" /> : null}
      {hooks ? <ListWithChips heading="Hooks:" items={hooks} color="green" /> : null}
      {readMoreLink ? (
        <Box>
          <Link
            href={readMoreLink.href}
            onClick={() => {
              navigateTo(readMoreLink.href)
            }}
          >
            <Button variant="ghost" color="blue" intent="primary" iconName="arrow-right" iconPosition="right">
              {readMoreLink.label}
            </Button>
          </Link>
        </Box>
      ) : null}
    </Flex>
  )

  return (
    <>
      {name ? (
        <Section heading={name} variant="outline" intent="tertiary">
          {content}
        </Section>
      ) : (
        content
      )}
      <Spacer blockSize="60px" />
    </>
  )
}

export const ComponentOverviewPage = ({ pageKey }: { pageKey: PageKey.core | PageKey.pro }) => {
  const corePageStore = useCorePageStore()
  const proPageStore = useProPageStore()

  const itemKeyPascal = pascalCase(
    (pageKey === PageKey.core ? corePageStore.itemKey : proPageStore.itemKey) || ''
  )

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
