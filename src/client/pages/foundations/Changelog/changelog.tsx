import { useMemo } from 'react'

import meta from 'client/meta'
import { RELEASE_INFO, ReleaseVersion } from 'client/definitions'
import { Box, MarkerList, Section, Spacer, Text, Tabs } from 'lib/components'

type Notes = { core: Record<string, string[]>; pro: Record<string, string[]> }

const Notes = ({ componentName, notes = [] }: { componentName?: string; notes: string[] }) => {
  if (!notes.length) return null

  const list = (
    <MarkerList intent="neutral">
      {notes.map((n, i) => {
        return (
          <MarkerList.Item key={i}>
            <Text>{n}</Text>
          </MarkerList.Item>
        )
      })}
    </MarkerList>
  )

  if (!componentName) {
    return list
  }

  return (
    <Section heading={componentName} color="blue" intent="primary" size="sm">
      {list}
    </Section>
  )
}

const PanelContent = ({
  bundleNotes,
  componentNotes,
}: {
  bundleNotes?: string[]
  componentNotes: Record<string, string[]>
}) => {
  const componentNames = Object.keys(componentNotes)

  return (
    <Box paddingInline="15px" paddingBlock="25px">
      <Notes notes={bundleNotes} />
      {componentNames.map((name, i) => (
        <Box key={name}>
          <Notes componentName={name} notes={componentNotes[name]} />
          {i < componentNames.length - 1 ? <Spacer blockSize="40px" /> : null}
        </Box>
      ))}
    </Box>
  )
}

export default ({ pathname }: { pathname: string }) => {
  const [, , , sectionKey] = pathname.split('/').filter(s => s)

  const releaseVersion = sectionKey.replace('v', '')

  const notes: Notes = useMemo(() => {
    const notes = { core: {}, pro: {} } as Notes
    Object.keys(meta).map(key => {
      const {
        changelog,
        overview: { bundle },
      } = meta[key][key]
      if (changelog && Object.keys(changelog).includes(releaseVersion)) {
        notes[bundle][key] = changelog[releaseVersion as never]
      }
    })
    return notes
  }, [releaseVersion])

  return (
    <Box maxInlineSize="55rem">
      <Text>{new Date(RELEASE_INFO[releaseVersion as ReleaseVersion].timestamp).toDateString()}</Text>
      <Spacer blockSize="30px" />
      <Text typography="h6">Release notes</Text>
      <Spacer blockSize="10px" />
      <Tabs defaultValue="core" inlineSize="100%">
        <Tabs.Tab value="core" iconName="package">
          Core
        </Tabs.Tab>
        <Tabs.Tab value="pro" iconName="star">
          Pro
        </Tabs.Tab>
        <Tabs.Panel value="core">
          <PanelContent
            bundleNotes={RELEASE_INFO[releaseVersion as ReleaseVersion].changelog?.core}
            componentNotes={notes.core}
          />
        </Tabs.Panel>
        <Tabs.Panel value="pro">
          <PanelContent
            bundleNotes={RELEASE_INFO[releaseVersion as ReleaseVersion].changelog?.pro}
            componentNotes={notes.pro}
          />
        </Tabs.Panel>
      </Tabs>
    </Box>
  )
}
