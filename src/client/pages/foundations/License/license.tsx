import { Box, Link, MarkerList, Section, Spacer, Text } from 'lib/components'
import { PageKey } from 'client/definitions'
import { getCopyrightInfo } from 'client/helpers'
import { useNavigateTo } from 'client/hooks'

export default () => {
  const navigateTo = useNavigateTo()

  return (
    <Box maxInlineSize="55rem">
      <Text>NebulaKit is provided under a proprietary license.</Text>
      <Spacer blockSize="8px" />
      <Text>
        You are granted a non-exclusive, non-transferable license to use NebulaKit in personal and commercial projects, subject to
        the terms described below.
      </Text>
      <Spacer blockSize="24px" />
      <Section heading="Permitted use" size="sm">
        <Text>You may:</Text>
        <Spacer blockSize="8px" />
        <MarkerList>
          <MarkerList.Item>
            <Text>use NebulaKit to build, develop and deploy personal or commercial applications</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>distribute applications that include NebulaKit as part of their bundled output</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>use NebulaKit internally within your organization or team</Text>
          </MarkerList.Item>
        </MarkerList>
      </Section>
      <Spacer blockSize="24px" />
      <Section heading="Restrictions" size="sm">
        <Text>You may not:</Text>
        <Spacer blockSize="8px" />
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
      </Section>
      <Spacer blockSize="24px" />
      <Section heading="Core and Pro bundles" size="sm">
        <Text>NebulaKit is distributed in two bundles, both are subject to this license.</Text>
        <Spacer blockSize="8px" />
        <MarkerList>
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
                - includes additional components and features and requires an active subscription and a valid license key, pricing
                details are available on
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
        <Spacer blockSize="8px" />
        <Text>
          Access to Pro features is granted only while a valid license key is active. If the license key is revoked access to Pro
          components ends immediately.
        </Text>
      </Section>
      <Spacer blockSize="24px" />
      <Section heading="Ownership" size="sm">
        <Text>
          All rights, title and interest in NebulaKit, including its source code, documentation and related assets, remain the
          exclusive property of the author.
        </Text>
      </Section>
      <Spacer blockSize="24px" />
      <Section heading="No warranty" size="sm">
        <Text>
          NebulaKit is provided "as is", without warranty of any kind, express or implied. You assume all risk associated with its
          use.
        </Text>
      </Section>
      <Spacer blockSize="24px" />
      <Section heading="Changes" size="sm">
        <Text>
          License terms may be updated over time. Continued use of NebulaKit constitutes acceptance of the current license terms.
        </Text>
      </Section>
      <Spacer blockSize="24px" />
      <Text italic>{getCopyrightInfo()}</Text>
    </Box>
  )
}
