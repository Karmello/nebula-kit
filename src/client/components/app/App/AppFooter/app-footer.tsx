import { Button, Divider, Flex, Footer, Link, MarkerList, Spacer, Text } from 'lib/components'
import { PageKey, RELEASE_VERSIONS } from 'client/definitions'
import { getCopyrightInfo } from 'client/helpers'
import { useNavigateTo } from 'client/hooks'

export const AppFooter = () => {
  const navigateTo = useNavigateTo()

  return (
    <Footer switchAt="lg" paddingBlock="sm" paddingInline="md" paddingBottom={{ base: 'sm', lg: 'lg' }}>
      <Footer.Section>
        <Text bold>Current release</Text>
        <Divider marginBottom="sm" intent="muted" />
        <Text typography="small" italic color="gray" intent="primary">
          NebulaKit is actively developed and released in incremental updates. Each release introduces improvements and
          refinements across the system.
        </Text>
        <Spacer blockSize="sm" />
        <Link
          href={`${PageKey.foundations}/resources/changelog/v${RELEASE_VERSIONS[0]}`}
          onClick={() => {
            navigateTo(`${PageKey.foundations}/resources/changelog/v${RELEASE_VERSIONS[0]}`)
          }}
        >
          <Text typography="small" color="blue" intent="primary">
            NebulaKit v{RELEASE_VERSIONS[0]}
          </Text>
        </Link>
        <Spacer blockSize="sm" />
        <Link href="https://www.npmjs.com/package/@nebula-kit/core" target="_blank">
          <Button color="red" intent="primary" size="xs" iconName="external-link" iconPlacement="right">
            @nebula-kit/core
          </Button>
        </Link>
      </Footer.Section>
      <Footer.Section>
        <Text bold>Community & Support</Text>
        <Divider marginBottom="sm" intent="muted" />
        <Text typography="small" italic color="gray" intent="primary">
          This is a closed-source project. There is no public GitHub repository. You can still follow updates, ask questions and
          join the community through the channels below.
        </Text>
        <Spacer blockSize="sm" />
        <Flex flexDirection="row" flexWrap="wrap" gap="2xs">
          <Link href="https://x.com/captainnebula" target="_blank">
            <Button color="gray" intent="inverse" size="xs" iconName="external-link" iconPlacement="right">
              X profile
            </Button>
          </Link>
          <Link href="https://discord.gg/BgezCRDN8H" target="_blank">
            <Button color="blue" intent="primary" size="xs" iconName="external-link" iconPlacement="right">
              Discord server
            </Button>
          </Link>
        </Flex>
      </Footer.Section>
      <Footer.Section>
        <Text bold>About the author</Text>
        <Divider marginBottom="sm" intent="muted" />
        <Text typography="small" italic color="gray" intent="primary">
          The product is designed and maintained by a solo software engineer focused on long-term UI architecture and system
          consistency.
        </Text>
        <Spacer blockSize="sm" />
        <Flex flexDirection="row" flexWrap="wrap" gap="2xs">
          <Link href="https://www.linkedin.com/in/nogakamil" target="_blank">
            <Button color="blue" intent="primary" size="xs" iconName="external-link" iconPlacement="right">
              LinkedIn
            </Button>
          </Link>
          <Link href="https://github.com/Karmello" target="_blank">
            <Button color="gray" intent="inverse" size="xs" iconName="external-link" iconPlacement="right">
              GitHub
            </Button>
          </Link>
        </Flex>
      </Footer.Section>
      <Footer.Section>
        <Text bold>Legal information</Text>
        <Divider marginBottom="sm" intent="muted" />
        <MarkerList gap="0px">
          <MarkerList.Item>
            <Link
              href={`${PageKey.foundations}/other/legal/terms-of-use`}
              onClick={() => {
                navigateTo(`${PageKey.foundations}/other/legal/terms-of-use`)
              }}
            >
              <Text typography="small" color="blue" intent="primary">
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
              <Text typography="small" color="blue" intent="primary">
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
              <Text typography="small" color="blue" intent="primary">
                Privacy Policy
              </Text>
            </Link>
          </MarkerList.Item>
        </MarkerList>
        <Spacer blockSize="sm" />
        <Link href="mailto:contact@nebulakit.dev" target="_blank">
          <Button color="blue" intent="secondary" variant="outline" size="xs" iconName="mail">
            contact@nebulakit.dev
          </Button>
        </Link>
        <Spacer blockSize="sm" />
        <Text typography="caption" intent="primary" color="gray">
          {getCopyrightInfo()}
        </Text>
      </Footer.Section>
    </Footer>
  )
}
