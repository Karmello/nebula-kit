import { Box, HorizontalRule, Link, MarkerList, NEB_LENGTH, Spacer, Text } from 'lib/components'
import { PageKey } from 'client/definitions'
import { getCopyrightInfo } from 'client/helpers'
import { useNavigateTo } from 'client/hooks'

export default () => {
  const navigateTo = useNavigateTo()

  return (
    <Box maxInlineSize="55rem">
      <Text>NebulaKit is provided under a proprietary license.</Text>
      <Spacer blockSize={NEB_LENGTH.px_008} />
      <Text>
        You are granted a non-exclusive, non-transferable license to use NebulaKit in personal and
        commercial projects, subject to the terms described below.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_032} />
      <Box display="flex" flexDirection="column" rowGap={NEB_LENGTH.px_032}>
        <Box>
          <Text typography="h6" bold color="blue" intent="primary">
            Permitted use
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
          <Text>You may:</Text>
          <Spacer blockSize={NEB_LENGTH.px_008} />
          <MarkerList>
            <MarkerList.Item>
              <Text>
                use NebulaKit to build, develop and deploy personal or commercial applications
              </Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>
                distribute applications that include NebulaKit as part of their bundled output
              </Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>use NebulaKit internally within your organization or team</Text>
            </MarkerList.Item>
          </MarkerList>
        </Box>
        <Box>
          <Text typography="h6" bold color="blue" intent="primary">
            Restrictions
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
          <Text>You may not:</Text>
          <Spacer blockSize={NEB_LENGTH.px_008} />
          <MarkerList>
            <MarkerList.Item>
              <Text>redistribute, resell, sublicense or repackage NebulaKit itself</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>publish NebulaKit as a standalone library, framework or dependency</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>host NebulaKit publicly or make it available for third-party download</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>circumvent licensing, access control or usage restrictions</Text>
            </MarkerList.Item>
          </MarkerList>
        </Box>
        <Box>
          <Text typography="h6" bold color="blue" intent="primary">
            Core and Pro bundles
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
          <Text>NebulaKit is distributed in two bundles, both are subject to this license.</Text>
          <Spacer blockSize={NEB_LENGTH.px_012} />
          <MarkerList gap={NEB_LENGTH.px_008}>
            <MarkerList.Item>
              <Text>
                <Text tag="span" bold space="end">
                  Core
                </Text>
                - publicly available
              </Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>
                <Text tag="span" bold space="end">
                  Pro
                </Text>
                <Text tag="span" space="end">
                  - includes additional components and features and requires an active subscription
                  and a valid license key, pricing details are available on
                </Text>
                <Link
                  href={PageKey.pricing}
                  onClick={() => {
                    navigateTo(PageKey.pricing)
                  }}
                >
                  <Text color="blue" intent="primary">
                    Pricing page
                  </Text>
                </Link>
              </Text>
            </MarkerList.Item>
          </MarkerList>
          <Spacer blockSize={NEB_LENGTH.px_012} />
          <Text>
            Access to Pro features is granted only while a valid license key is active. If the
            license key is revoked access to Pro components ends immediately.
          </Text>
        </Box>
        <Box>
          <Text typography="h6" bold color="blue" intent="primary">
            Ownership
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
          <Text>
            All rights, title and interest in NebulaKit, including its source code, documentation
            and related assets, remain the exclusive property of the author.
          </Text>
        </Box>
        <Box>
          <Text typography="h6" bold color="blue" intent="primary">
            No warranty
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
          <Text>
            NebulaKit is provided "as is", without warranty of any kind, express or implied. You
            assume all risk associated with its use.
          </Text>
        </Box>
        <Box>
          <Text typography="h6" bold color="blue" intent="primary">
            Changes
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
          <Text>
            License terms may be updated over time. Continued use of NebulaKit constitutes
            acceptance of the current license terms.
          </Text>
        </Box>
      </Box>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Text italic>{getCopyrightInfo()}</Text>
    </Box>
  )
}
