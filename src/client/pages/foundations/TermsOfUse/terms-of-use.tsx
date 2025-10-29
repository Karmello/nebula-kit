import { Box, MarkerList, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit is provided for developers building user interfaces and digital products. By using the
        library or related materials, you agree to these terms.
      </Text>
      <Spacer />
      <MarkerList rowGap={10}>
        <MarkerList.Item>
          <Text bold>Use of the library</Text>
          <Text>
            You may use NebulaKit in your own projects under the terms described in the License page.
            Redistribution, resale or public hosting of the package itself is not allowed.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Ownership</Text>
          <Text>
            All components, documentation and related assets remain the intellectual property of the author.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Liability</Text>
          <Text>
            The library is provided "as is." The author makes no guarantees about its performance, reliability
            or suitability for any specific purpose. You assume all responsibility for its use in your
            projects.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Modifications and updates</Text>
          <Text>
            NebulaKit evolves over time. Features may be added, adjusted or removed as the library develops.
            All notable changes are documented in the version changelog.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Third-party dependencies</Text>
          <Text>
            NebulaKit relies on third-party tools and packages that are each governed by their own licenses.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Contact</Text>
          <Text>For questions about these terms, reach out through the contact form or listed email.</Text>
        </MarkerList.Item>
      </MarkerList>
    </Box>
  )
}
