import { useMemo } from 'react'

import {
  Box,
  MarkerList,
  Markup,
  NEB_LENGTH,
  Section,
  Spacer,
  Tabs,
  Text,
  Title,
} from 'lib/components'
import { RELEASE_INFO, ReleaseVersion } from 'client/definitions'
import meta from 'client/meta'

type Notes = { core: Record<string, string[]>; pro: Record<string, string[]> }

const Notes = ({ componentName, notes = [] }: { componentName?: string; notes: string[] }) => {
  if (!notes.length) return null

  const list = (
    <MarkerList intent="neutral">
      {notes.map((n, i) => {
        return (
          <MarkerList.Item key={i}>
            <Markup>
              <Text>{n}</Text>
            </Markup>
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
    <Box paddingInline={NEB_LENGTH.px_016} paddingBlock={NEB_LENGTH.px_024}>
      <Notes notes={bundleNotes} />
      {componentNames.map((name, i) => (
        <Box key={name}>
          <Notes componentName={name} notes={componentNotes[name]} />
          {i < componentNames.length - 1 ? <Spacer blockSize={NEB_LENGTH.px_048} /> : null}
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
      {releaseInfo.headline ? (
        <Box marginBottom={NEB_LENGTH.px_004}>
          <Text typography="h5">{releaseInfo.headline}</Text>
        </Box>
      ) : null}
      <Text italic intent="secondary">
        {new Date(releaseInfo.timestamp).toDateString()}
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_016} />
      {releaseInfo.changelog?.main ? (
        <>
          <Spacer blockSize={NEB_LENGTH.px_008} />
          <Notes notes={releaseInfo.changelog.main} />
        </>
      ) : null}
      {displayCoreNotes || displayProNotes ? (
        <>
          <Spacer blockSize={NEB_LENGTH.px_048} />
          <Tabs defaultValue={displayCoreNotes ? 'core' : 'pro'}>
            {displayCoreNotes ? (
              <Tabs.Tab value="core">
                <Title iconName="package">Core</Title>
              </Tabs.Tab>
            ) : null}
            {displayProNotes ? (
              <Tabs.Tab value="pro">
                <Title iconName="star">Pro</Title>
              </Tabs.Tab>
            ) : null}
            {displayCoreNotes ? (
              <Tabs.Panel value="core">
                <PanelContent
                  bundleNotes={releaseInfo.changelog?.core}
                  componentNotes={notes.core}
                />
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
