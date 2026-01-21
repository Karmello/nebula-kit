import { useMemo } from 'react'

import meta from 'client/meta'
import { RELEASE_INFO, ReleaseVersion } from 'client/definitions'
import { Box, MarkerList, Section, Spacer, Text, Tabs } from 'lib/components'

type Notes = { core: Record<string, string[]>; pro: Record<string, string[]> }

const ComponentNotes = ({ componentName, notes = [] }: { componentName: string; notes: string[] }) => {
  if (!notes.length) return null

  return (
    <Section heading={componentName} color="blue" intent="primary" size="sm">
      <MarkerList intent="neutral">
        {notes.map((n, i) => {
          return (
            <MarkerList.Item key={i}>
              <Text>{n}</Text>
            </MarkerList.Item>
          )
        })}
      </MarkerList>
    </Section>
  )
}

const PanelContent = ({ notes }: { notes: Record<string, string[]> }) => {
  const componentNames = Object.keys(notes)

  return (
    <Box paddingInline="15px" paddingBlock="25px">
      {componentNames.map((name, i) => (
        <Box key={name}>
          <ComponentNotes componentName={name} notes={notes[name]} />
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
          <PanelContent notes={notes.core} />
        </Tabs.Panel>
        <Tabs.Panel value="pro">
          <PanelContent notes={notes.pro} />
        </Tabs.Panel>
      </Tabs>
    </Box>
  )
}
