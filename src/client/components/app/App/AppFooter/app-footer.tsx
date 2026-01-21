import { PageKey, RELEASE_VERSIONS } from 'client/definitions'
import { getCopyrightInfo } from 'client/helpers'
import { useNavigateTo } from 'client/hooks'
import { Button, Divider, Flex, Footer, Link, MarkerList, Spacer, Text } from 'lib/components'

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
        <Text scale="compact" typography="lead" bold>
          About the website
        </Text>
        <Divider marginBottom="10px" />
        <Text scale="compact" italic color="gray" intent="primary">
          This website is built entirely with NebulaKit components. It serves as both documentation and a live
          showcase of the system in real use.
        </Text>
        <Spacer blockSize="10px" />
        <Link
          href={`${PageKey.foundations}/resources/changelog/v${RELEASE_VERSIONS[0]}`}
          onClick={() => {
            navigateTo(`${PageKey.foundations}/resources/changelog/v${RELEASE_VERSIONS[0]}`)
          }}
        >
          <Text scale="compact" color="blue" intent="primary">
            NebulaKit v{RELEASE_VERSIONS[0]}
          </Text>
        </Link>
      </Footer.Section>
      <Footer.Section>
        <Text scale="compact" typography="lead" bold>
          Community & Support
        </Text>
        <Divider marginBottom="15px" />
        <Flex flexDirection="column" flexWrap="nowrap" gap="7px">
          <Link href="https://x.com/captainnebula" target="_blank">
            <Button color="gray" intent="inverse" size="sm" iconName="external-link" iconPlacement="right">
              X profile
            </Button>
          </Link>
          <Link href="https://discord.gg/BgezCRDN8H" target="_blank">
            <Button color="purple" intent="primary" size="sm" iconName="external-link" iconPlacement="right">
              Discord server
            </Button>
          </Link>
          <Link href="https://www.npmjs.com/package/@nebula-kit/core" target="_blank">
            <Button color="red" intent="primary" size="sm" iconName="external-link" iconPlacement="right">
              @nebula-kit/core
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
        <Text scale="compact" typography="lead" bold>
          Legal information
        </Text>
        <Divider marginBottom="10px" />
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
