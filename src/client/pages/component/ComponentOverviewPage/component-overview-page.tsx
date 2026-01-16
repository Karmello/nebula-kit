import { pascalCase } from 'change-case'

import meta from 'client/meta'
import { useCorePageStore, useProPageStore } from 'client/store'
import { ComponentMeta, PageKey } from 'client/definitions'
import { CodeSnippet } from 'client/components'
import { convertElemToString } from 'client/helpers'
import { useNavigateTo } from 'client/hooks'
import { Text, Box, Spacer, Section, Button, Link, Table } from 'lib/components'

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
    <>
      <Text typography="lead">{title}</Text>
      <Spacer />
      {examples?.[0] ? (
        <>
          <CodeSnippet lang="tsx" code={examples[0].code || convertElemToString(examples[0].jsx)} />
          <Spacer blockSize="40px" />
        </>
      ) : null}
      {description ? (
        <>
          <Section heading="Description" size="sm">
            <Text>{description}</Text>
          </Section>
          <Spacer blockSize="40px" />
        </>
      ) : null}
      {features ? (
        <>
          <ListWithHeading heading="Features" items={features} />
          <Spacer blockSize="40px" />
        </>
      ) : null}
      <Table intent="neutral">
        <Table.Body intent="muted" color="gray">
          {composedOf ? (
            <Table.Row>
              <Table.Cell>
                <Text bold noWrap>
                  Composed of
                </Text>
              </Table.Cell>
              <Table.Cell>
                <ListWithChips items={composedOf} color="red" />
              </Table.Cell>
            </Table.Row>
          ) : null}
          {topLevelTags ? (
            <Table.Row>
              <Table.Cell>
                <Text bold noWrap>
                  {topLevelTags.length > 1 ? 'Root tags' : 'Root tag'}
                </Text>
              </Table.Cell>
              <Table.Cell>
                <ListWithChips items={topLevelTags as string[]} color="amber" />
              </Table.Cell>
            </Table.Row>
          ) : null}
          {props ? (
            <Table.Row>
              <Table.Cell>
                <Text bold noWrap>
                  Props
                </Text>
              </Table.Cell>
              <Table.Cell>
                <ListWithChips items={Object.keys(props).sort((a, b) => a.localeCompare(b))} />
              </Table.Cell>
            </Table.Row>
          ) : null}
          {slots ? (
            <Table.Row>
              <Table.Cell>
                <Text bold noWrap>
                  Slots
                </Text>
              </Table.Cell>
              <Table.Cell>
                <ListWithChips items={slots} color="gray" />
              </Table.Cell>
            </Table.Row>
          ) : null}
          {hooks ? (
            <Table.Row>
              <Table.Cell>
                <Text bold noWrap>
                  Hooks
                </Text>
              </Table.Cell>
              <Table.Cell>
                <ListWithChips items={hooks} color="green" />
              </Table.Cell>
            </Table.Row>
          ) : null}
        </Table.Body>
      </Table>
      {readMoreLink ? (
        <Box marginTop="20px">
          <Link
            href={readMoreLink.href}
            onClick={() => {
              navigateTo(readMoreLink.href)
            }}
          >
            <Button
              variant="ghost"
              color="blue"
              intent="primary"
              iconName="arrow-right"
              iconPlacement="right"
            >
              {readMoreLink.label}
            </Button>
          </Link>
        </Box>
      ) : null}
    </>
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
