import { PageKey } from 'client/definitions'
import { getCopyrightInfo } from 'client/helpers'
import { useNavigateTo } from 'client/hooks'
import { Button, Flex, Footer, Link, MarkerList, Spacer, Text } from 'lib/components'

export const AppFooter = () => {
  const navigateTo = useNavigateTo()

  return (
    <Footer switchAt="md" paddingBlock={15} paddingInline={25} paddingBottom={{ base: 15, lg: 35 }}>
      <Footer.Section>
        <Text scale="compact" bold>
          Project
        </Text>
        <Spacer blockSize={10} />
        <Text scale="compact">NebulaKit v0.1.0</Text>
        <Spacer blockSize={10} />
        <Text scale="compact" italic>
          This website is built entirely with NebulaKit components.
        </Text>
      </Footer.Section>
      <Footer.Section>
        <Text scale="compact" bold>
          Support
        </Text>
        <Spacer blockSize={10} />
        <Link href="mailto:contact@nebulakit.dev" target="_blank">
          <Text scale="compact" color="blue" intent="primary">
            contact@nebulakit.dev
          </Text>
        </Link>
        <Spacer />
        <Flex flexWrap="wrap" gap={10}>
          <Link href="https://discord.gg/HGE2gxYY" target="_blank">
            <Button color="purple" intent="primary" size="sm" iconName="external-link" iconPosition="right">
              NebulaKit on Discord
            </Button>
          </Link>
          <Link href="https://x.com/captainnebula" target="_blank">
            <Button intent="inverse" size="sm" iconName="external-link" iconPosition="right">
              NebulaKit on X
            </Button>
          </Link>
        </Flex>
      </Footer.Section>
      <Footer.Section>
        <Text scale="compact" bold>
          Legal
        </Text>
        <Spacer blockSize={10} />
        <MarkerList>
          <MarkerList.Item>
            <Link
              href={`${PageKey.foundations}/other/legal/license`}
              onClick={() => {
                navigateTo(`${PageKey.foundations}/other/legal/license`)
              }}
            >
              <Text scale="compact" color="blue" intent="primary">
                License
              </Text>
            </Link>
          </MarkerList.Item>
          <MarkerList.Item>
            <Link
              href={`${PageKey.foundations}/other/legal/terms-of-use`}
              onClick={() => {
                navigateTo(`${PageKey.foundations}/other/legal/terms-of-use`)
              }}
            >
              <Text scale="compact" color="blue" intent="primary">
                Terms of Use
              </Text>
            </Link>
          </MarkerList.Item>
          <MarkerList.Item>
            <Link
              href={`${PageKey.foundations}/other/legal/privacy-policy`}
              onClick={() => {
                navigateTo(`${PageKey.foundations}/other/legal/privacy-policy`)
              }}
            >
              <Text scale="compact" color="blue" intent="primary">
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
