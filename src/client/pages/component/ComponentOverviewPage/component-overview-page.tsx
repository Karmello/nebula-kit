import { pascalCase } from 'change-case'

import meta from 'client/meta'
import { useCorePageStore, useProPageStore } from 'client/store'
import { ComponentMeta, PageKey } from 'client/definitions'
import { CodeSnippet } from 'client/components'
import { convertElemToString } from 'client/helpers'
import { useNavigateTo } from 'client/hooks'
import { Text, Box, Spacer, Section, Button, Link, Flex } from 'lib/components'

import { ListWithHeading } from './ListWithHeading'
import { ListWithChips } from './ListWithChips'

const SingleOverview = ({ meta }: { meta: ComponentMeta<object> }) => {
  const navigateTo = useNavigateTo()

  const {
    overview: { name, title, description, features, composedOf, topLevelTags, slots, hooks, readMoreLink },
    examples,
    props,
  } = meta

  const content = (
    <Flex flexDirection="column" alignItems="stretch" gap="30px">
      <Box>
        <Text typography="lead" bold>
          {title}
        </Text>
        {examples?.[0] ? (
          <Box marginBlock="sm">
            <CodeSnippet lang="tsx" code={examples[0].code || convertElemToString(examples[0].jsx)} />
          </Box>
        ) : null}
      </Box>
      {description ? (
        <Section size="xs" heading="Description" iconName="arrow-down">
          <Text>{description}</Text>
        </Section>
      ) : null}
      {features ? <ListWithHeading heading="Features" items={features} /> : null}
      {composedOf ? (
        <Section size="xs" heading="Composed of" iconName="arrow-down">
          <ListWithChips items={composedOf} color="red" />
        </Section>
      ) : null}
      {topLevelTags ? (
        <Section size="xs" heading={topLevelTags.length > 1 ? 'Root tags' : 'Root tag'} iconName="arrow-down">
          <ListWithChips items={topLevelTags as string[]} color="amber" />
        </Section>
      ) : null}
      {props ? (
        <Section size="xs" heading="Props" iconName="arrow-down">
          <ListWithChips items={Object.keys(props).sort((a, b) => a.localeCompare(b))} />
        </Section>
      ) : null}
      {slots ? (
        <Section size="xs" heading="Slots" iconName="arrow-down">
          <ListWithChips items={slots} color="gray" />
        </Section>
      ) : null}
      {hooks ? (
        <Section size="xs" heading="Hooks" iconName="arrow-down">
          <ListWithChips items={hooks} color="green" />
        </Section>
      ) : null}
      {readMoreLink ? (
        <Box marginTop="sm">
          <Link
            href={readMoreLink.href}
            onClick={() => {
              navigateTo(readMoreLink.href)
            }}
          >
            <Button variant="ghost" color="blue" intent="primary" iconName="arrow-right" iconPlacement="right">
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
      <Spacer blockSize="lg" />
    </>
  )
}

export const ComponentOverviewPage = ({ pageKey }: { pageKey: PageKey.core | PageKey.pro }) => {
  const corePageItemKey = useCorePageStore(state => state.itemKey)
  const proPageItemKey = useProPageStore(state => state.itemKey)

  const itemKeyPascal = pascalCase((pageKey === PageKey.core ? corePageItemKey : proPageItemKey) || '')

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
