import { pascalCase } from 'change-case'

import { Box } from 'lib/components/core/Box'
import { Button } from 'lib/components/core/Button'
import { Link } from 'lib/components/core/Link'
import { Section } from 'lib/components/core/Section'
import { Spacer } from 'lib/components/core/Spacer'
import { Text } from 'lib/components/core/Text'
import { NEB_LENGTH } from 'lib/constants'
import { CodeSnippet } from 'client/components/meta/CodeSnippet'
import { DocMeta } from 'client/definitions'
import { convertElemToString } from 'client/helpers'
import { useNavigateTo } from 'client/hooks'
import meta from 'client/meta'
import { useComponentsPageStore } from 'client/store'

import { ListWithChips } from './ListWithChips'
import { ListWithHeading } from './ListWithHeading'

const SingleOverview = ({ meta }: { meta: DocMeta<object> }) => {
  const navigateTo = useNavigateTo()

  const {
    overview: {
      name,
      title,
      description,
      features,
      guidelines,
      composedOf,
      exposedTags,
      slots,
      hooks,
      readMoreLink,
    },
    examples,
    props,
  } = meta

  const content = (
    <Box display="flex" flexDirection="column" alignItems="stretch" gap={NEB_LENGTH.px_032}>
      <Box>
        <Text typography="lead">{title}</Text>
        {examples?.[0] ? (
          <Box marginBlock={NEB_LENGTH.px_016}>
            <CodeSnippet
              lang="tsx"
              code={examples[0].code || convertElemToString(examples[0].jsx)}
            />
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
      {exposedTags ? (
        <ListWithChips
          heading={exposedTags.length > 1 ? 'Exposed tags' : 'Exposed tag'}
          items={exposedTags as string[]}
          color="amber"
        />
      ) : null}
      {props ? (
        <ListWithChips
          heading="Props"
          items={Object.keys(props).sort((a, b) => a.localeCompare(b))}
        />
      ) : null}
      {slots ? <ListWithChips heading="Slots" items={slots} color="gray" /> : null}
      {hooks ? <ListWithChips heading="Hooks" items={hooks} color="green" /> : null}
      {readMoreLink ? (
        <Box marginTop={NEB_LENGTH.px_016}>
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
    </Box>
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
      <Spacer blockSize={NEB_LENGTH.px_064} />
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
