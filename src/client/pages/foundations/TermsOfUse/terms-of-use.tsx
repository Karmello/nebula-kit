import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { Box, Link, MarkerList, Spacer, Text } from 'lib/components'

export default () => {
  const navigateTo = useNavigateTo()

  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit is provided for developers building user interfaces and digital products. By installing,
        accessing or using NebulaKit or any related materials, you agree to be bound by the NebulaKit License.
      </Text>
      <Spacer />
      <Text>The license defines:</Text>
      <Spacer blockSize="10px" />
      <MarkerList>
        <MarkerList.Item>
          <Text>permitted and prohibited uses of the library</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>Core and Pro bundle terms</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>subscription and license key requirements</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>redistribution restrictions</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>ownership and intellectual property rights</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>liability and warranty disclaimers</Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer blockSize="10px" />
      <Text>If you do not agree to the license, you may not use NebulaKit.</Text>
      <Spacer blockSize="30px" />
      <Text>
        NebulaKit may evolve over time. Features, APIs and bundles may be added, modified or removed. Notable
        changes are documented in the changelog.
      </Text>
      <Spacer blockSize="10px" />
      <Text>
        <Text tag="span" space="end">
          For full legal terms, see the
        </Text>
        <Link
          href={`${PageKey.foundations}/other/legal/license`}
          onClick={() => {
            navigateTo(`${PageKey.foundations}/other/legal/license`)
          }}
        >
          <Text color="blue" intent="primary">
            License page
          </Text>
        </Link>
        .
      </Text>
      <Spacer blockSize="10px" />
      <Text>For questions regarding these terms, contact via email.</Text>
    </Box>
  )
}
