import { getCopyrightInfo } from 'client/helpers'
import { useNavigateTo } from 'client/services'
import { Footer, Link, MarkerList, Spacer, Text } from 'lib/components'

export const AppFooter = () => {
  const navigateTo = useNavigateTo()

  return (
    <Footer switchAt="md" paddingBlock={15} paddingInline={25} paddingBottom={{ base: 15, lg: 35 }}>
      <Footer.Section>
        <Text scale="compact" bold>
          Project
        </Text>
        <Spacer blockSize={10} />
        <Text scale="compact">NebulaKit - v0.0.1</Text>
        <Spacer blockSize={10} />
        <Text scale="compact" italic>
          This website is built entirely with NebulaKit components.
        </Text>
      </Footer.Section>
      <Footer.Section>
        <Text scale="compact" bold>
          Contact
        </Text>
        <Spacer blockSize={10} />
        <Link href="mailto:nebulakit@gmail.com">
          <Text scale="compact" intent="info">
            nebulakit@gmail.com
          </Text>
        </Link>
      </Footer.Section>
      <Footer.Section>
        <Text scale="compact" bold>
          Legal
        </Text>
        <Spacer blockSize={10} />
        <MarkerList>
          <MarkerList.Item>
            <Link
              href="/foundations/other/legal/license"
              onClick={() => {
                navigateTo('/foundations/other/legal/license')
              }}
            >
              <Text scale="compact" intent="info">
                License
              </Text>
            </Link>
          </MarkerList.Item>
          <MarkerList.Item>
            <Link
              href="/foundations/other/legal/terms-of-use"
              onClick={() => {
                navigateTo('/foundations/other/legal/terms-of-use')
              }}
            >
              <Text scale="compact" intent="info">
                Terms of Use
              </Text>
            </Link>
          </MarkerList.Item>
          <MarkerList.Item>
            <Link
              href="/foundations/other/legal/privacy-policy"
              onClick={() => {
                navigateTo('/foundations/other/legal/privacy-policy')
              }}
            >
              <Text scale="compact" intent="info">
                Privacy Policy
              </Text>
            </Link>
          </MarkerList.Item>
        </MarkerList>
        <Spacer />
        <Text scale="compact" typography="caption" intent="primary">
          {getCopyrightInfo()}
        </Text>
      </Footer.Section>
    </Footer>
  )
}
