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

const PanelContent = ({ bundleNotes, componentNotes }: { bundleNotes?: string[]; componentNotes: Record<string, string[]> }) => {
  const componentNames = Object.keys(componentNotes)

  return (
    <Box paddingInline="15px" paddingBlock="25px">
      <Notes notes={bundleNotes} />
      {componentNames.map((name, i) => (
        <Box key={name}>
          <Notes componentName={name} notes={componentNotes[name]} />
          {i < componentNames.length - 1 ? <Spacer blockSize="lg" /> : null}
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

  const releaseInfo = RELEASE_INFO[releaseVersion as ReleaseVersion]

  const displayCoreNotes = Object.keys(notes.core).length
  const displayProNotes = Object.keys(notes.pro).length

  return (
    <Box maxInlineSize="55rem">
      <Text italic>{new Date(releaseInfo.timestamp).toDateString()}</Text>
      {releaseInfo.changelog?.main ? (
        <>
          <Spacer blockSize="xs" />
          <Notes notes={releaseInfo.changelog.main} />
        </>
      ) : null}
      {displayCoreNotes || displayProNotes ? (
        <>
          <Spacer blockSize="lg" />
          <Tabs defaultValue={displayCoreNotes ? 'core' : 'pro'} inlineSize="100%">
            {displayCoreNotes ? (
              <Tabs.Tab value="core" iconName="package">
                Core
              </Tabs.Tab>
            ) : null}
            {displayProNotes ? (
              <Tabs.Tab value="pro" iconName="star">
                Pro
              </Tabs.Tab>
            ) : null}
            {displayCoreNotes ? (
              <Tabs.Panel value="core">
                <PanelContent bundleNotes={releaseInfo.changelog?.core} componentNotes={notes.core} />
              </Tabs.Panel>
            ) : null}
            <Tabs.Panel value="pro">
              <PanelContent bundleNotes={releaseInfo.changelog?.pro} componentNotes={notes.pro} />
            </Tabs.Panel>
          </Tabs>
        </>
      ) : null}
    </Box>
  )
}
