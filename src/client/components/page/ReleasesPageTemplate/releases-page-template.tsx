import { useState } from 'react'

import meta from 'client/meta'
import { RELEASE_VERSIONS, RELEASE_INFO, ReleaseVersion } from 'client/definitions'
import { Box, Flex, Section, Select, Spacer, Text } from 'lib/components'

export const ReleasePageTemplate = ({ bundle }: { bundle: 'core' | 'pro' }) => {
  const [releaseVersion, setReleaseVersion] = useState<string>(RELEASE_VERSIONS[0])

  const newComponents: string[] = []

  Object.keys(meta).map(key => {
    const changelog = meta[key][key].changelog
    if (
      changelog &&
      meta[key][key].overview.bundle === bundle &&
      Object.keys(changelog).reverse()[0] === releaseVersion
    ) {
      newComponents.push(key)
    }
  })

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
      <Spacer blockSize="50px" />
      <Section heading="New components" size="sm">
        <Flex flexWrap="wrap" gap="5px">
          {newComponents.map(c => (
            <Box
              key={c}
              drawable
              variant="outline"
              intent="primary"
              color="blue"
              paddingBlock="5px"
              paddingInline="10px"
            >
              {c}
            </Box>
          ))}
        </Flex>
      </Section>
    </Box>
  )
}
