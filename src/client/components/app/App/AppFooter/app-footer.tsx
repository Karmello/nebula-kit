import { PageKey, RELEASE_VERSIONS } from 'client/definitions'
import { getCopyrightInfo } from 'client/helpers'
import { useNavigateTo } from 'client/hooks'
import { Button, Flex, Footer, Link, MarkerList, Spacer, Text } from 'lib/components'

export const AppFooter = () => {
  const navigateTo = useNavigateTo()

  return (
    <Footer
      switchAt="md"
      paddingBlock="15px"
      paddingInline="25px"
      paddingBottom={{ base: '15px', lg: '35px' }}
    >
      <Footer.Section>
        <Text bold typography="caption">
          About the library
        </Text>
        <Spacer blockSize="20px" />
        <Link
          href="/foundations/resources/changelog/core-releases"
          onClick={() => {
            navigateTo('/foundations/resources/changelog/core-releases')
          }}
        >
          <Text scale="compact" color="blue" intent="primary">
            NebulaKit v{RELEASE_VERSIONS[0]}
          </Text>
        </Link>
        <Spacer blockSize="10px" />
        <Text scale="compact" italic color="gray" intent="primary">
          This website is built entirely with NebulaKit components.
        </Text>
      </Footer.Section>
      <Footer.Section>
        <Text bold typography="caption">
          Community & Support
        </Text>
        <Spacer blockSize="20px" />
        <Flex flexDirection="column" gap="10px">
          <Link href="https://x.com/captainnebula" target="_blank">
            <Button color="gray" intent="inverse" size="sm" iconName="external-link" iconPlacement="right">
              NebulaKit on X
            </Button>
          </Link>
          <Link href="https://discord.gg/BgezCRDN8H" target="_blank">
            <Button color="purple" intent="primary" size="sm" iconName="external-link" iconPlacement="right">
              NebulaKit on Discord
            </Button>
          </Link>
          <Link href="mailto:contact@nebulakit.dev" target="_blank">
            <Button color="blue" intent="primary" variant="outline" size="sm" iconName="mail">
              contact@nebulakit.dev
            </Button>
          </Link>
        </Flex>
      </Footer.Section>
      <Footer.Section>
        <Text bold typography="caption">
          Legal information
        </Text>
        <Spacer blockSize="20px" />
        <MarkerList>
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
        <Text scale="compact" typography="caption" intent="primary" color="gray">
          {getCopyrightInfo()}
        </Text>
      </Footer.Section>
    </Footer>
  )
}
