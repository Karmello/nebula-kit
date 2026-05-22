import { pascalCase } from 'change-case'

import meta from 'client/meta'
import { useComponentsPageStore } from 'client/store'
import { ComponentMeta } from 'client/definitions'
import { CodeSnippet } from 'client/components'
import { convertElemToString } from 'client/helpers'
import { useNavigateTo } from 'client/hooks'
import { Text, Box, Spacer, Section, Button, Link, Flex } from 'lib/components'

import { ListWithHeading } from './ListWithHeading'
import { ListWithChips } from './ListWithChips'

const SingleOverview = ({ meta }: { meta: ComponentMeta<object> }) => {
  const navigateTo = useNavigateTo()

  const {
    overview: { name, title, description, features, guidelines, composedOf, topLevelTags, slots, hooks, readMoreLink },
    examples,
    props,
  } = meta

  const content = (
    <Flex flexDirection="column" alignItems="stretch" gap="lg">
      <Box>
        <Text typography="lead">{title}</Text>
        {examples?.[0] ? (
          <Box marginBlock="sm">
            <CodeSnippet lang="tsx" code={examples[0].code || convertElemToString(examples[0].jsx)} />
          </Box>
        ) : null}
      </Box>
      {description ? (
        <Section size="sm" heading="Description">
          <Text>{description}</Text>
        </Section>
      ) : null}
      {features ? <ListWithHeading heading="Features" items={features} /> : null}
      {guidelines ? <ListWithHeading heading="Guidelines" items={guidelines} /> : null}
      {composedOf ? <ListWithChips heading="Composed of" items={composedOf} color="red" /> : null}
      {topLevelTags ? (
        <ListWithChips
          heading={topLevelTags.length > 1 ? 'Root tags' : 'Root tag'}
          items={topLevelTags as string[]}
          color="amber"
        />
      ) : null}
      {props ? <ListWithChips heading="Props" items={Object.keys(props).sort((a, b) => a.localeCompare(b))} /> : null}
      {slots ? <ListWithChips heading="Slots" items={slots} color="gray" /> : null}
      {hooks ? <ListWithChips heading="Hooks" items={hooks} color="green" /> : null}
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
        <Section size="lg" heading={name} variant="outline" intent="tertiary">
          {content}
        </Section>
      ) : (
        content
      )}
      <Spacer blockSize="2xl" />
    </>
  )
}

export const ComponentOverviewPage = () => {
  const componentsPageItemKey = useComponentsPageStore(state => state.itemKey)

  const itemKeyPascal = pascalCase(componentsPageItemKey || '')

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
