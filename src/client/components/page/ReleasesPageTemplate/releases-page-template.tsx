import { useMemo, useState } from 'react'
import { kebabCase } from 'change-case'

import meta from 'client/meta'
import { useNavigateTo } from 'client/hooks'
import { RELEASE_VERSIONS, RELEASE_INFO, ReleaseVersion, PAGE_SECTIONS } from 'client/definitions'
import { Box, Button, Flex, Link, MarkerList, Section, Select, Spacer, Text } from 'lib/components'

type ComponentNames = { created: string[]; updated: string[] }

const ReleaseSection = ({ heading, componentNames = [] }: { heading: string; componentNames: string[] }) => {
  const navigateTo = useNavigateTo()

  if (!componentNames.length) return null

  return (
    <>
      <Spacer blockSize="40px" />
      <Section heading={heading} size="sm">
        <Flex flexWrap="wrap" gap="5px">
          {componentNames.map(c => {
            const { pageKey, categoryKey, itemKey } = PAGE_SECTIONS.find(s => s.itemKey === kebabCase(c))

            const href = `/${pageKey}/${categoryKey}/${itemKey}/changelog`

            return (
              <Link
                key={c}
                href={href}
                onClick={() => {
                  navigateTo(href)
                }}
              >
                <Button intent="primary" color="red" size="sm" iconName="box">
                  {c}
                </Button>
              </Link>
            )
          })}
        </Flex>
      </Section>
    </>
  )
}

export const ReleasePageTemplate = ({ bundle }: { bundle: 'core' | 'pro' }) => {
  const [releaseVersion, setReleaseVersion] = useState<string>(RELEASE_VERSIONS[0])

  const componentNames: ComponentNames = useMemo(() => {
    const result: ComponentNames = { created: [], updated: [] }
    Object.keys(meta).map(key => {
      const changelog = meta[key][key].changelog
      if (changelog && meta[key][key].overview.bundle === bundle) {
        if (Object.keys(changelog).reverse()[0] === releaseVersion) {
          result.created.push(key)
        }
        if (Object.keys(changelog).reverse().slice(1).includes(releaseVersion)) {
          result.updated.push(key)
        }
      }
    })
    return result
  }, [releaseVersion])

  const { description, changes } = RELEASE_INFO[releaseVersion as ReleaseVersion]

  return (
    <Box maxInlineSize="55rem">
      <Flex flexWrap="wrap" alignItems="center" gap="20px">
        <Select inlineSize="150px" size="sm" value={releaseVersion} onChange={setReleaseVersion}>
          {RELEASE_VERSIONS.map(v => (
            <Select.Option key={v} value={v}>
              {`v${v}`}
            </Select.Option>
          ))}
        </Select>
        <Text>{new Date(RELEASE_INFO[releaseVersion as ReleaseVersion].timestamp).toDateString()}</Text>
      </Flex>
      {description ? (
        <>
          <Spacer blockSize="35px" />
          <Text>{description}</Text>
        </>
      ) : null}
      {changes[bundle] ? (
        <>
          <Spacer blockSize="35px" />
          <MarkerList>
            {changes[bundle].map((c, i) => (
              <MarkerList.Item key={i}>
                <Text>{c}</Text>
              </MarkerList.Item>
            ))}
          </MarkerList>
        </>
      ) : null}
      <ReleaseSection heading="New" componentNames={componentNames.created} />
      <ReleaseSection heading="Updated" componentNames={componentNames.updated} />
    </Box>
  )
}
