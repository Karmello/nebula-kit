import { useNavigateTo } from 'client/services'
import { Box, Button, Flex, Section, Spacer, Text, Link, Grid } from 'lib/components'

export const PricingPage = () => {
  const navigateTo = useNavigateTo()

  return (
    <Box paddingTop={15} paddingInline={{ base: 20, lg: 50 }}>
      <Section heading="Plans & Pricing">
        <Text>Choose the plan that fits your workflow.</Text>
        <Spacer blockSize={50} />
        <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }} gap={20}>
          <Section heading="Free" variant="outline" iconName="leaf">
            <Text intent="neutral" bold>
              Get started with core components.
            </Text>
            <Spacer />
            <Text typography="h6">$0 / month</Text>
            <Spacer />
            <Text intent="neutral">
              Access the essential NebulaKit components and design tokens to start building right away.
              Perfect for hobby projects, learning or exploring the system before committing. Includes
              community support and regular updates to the core library.
            </Text>
            <Spacer blockSize={40} />
            <Flex justifyContent="center">
              <Link
                href="/foundations/overview/get-started/installation"
                onClick={() => {
                  navigateTo('/foundations/overview/get-started/installation')
                }}
              >
                <Button size="sm" intent="tertiary">
                  Get started
                </Button>
              </Link>
            </Flex>
          </Section>
          <Section heading="Professional" variant="outline" intent="inverse" iconName="zap">
            <Text intent="neutral" bold>
              Full component set for individuals.
            </Text>
            <Spacer />
            <Text typography="h6">$29 / month</Text>
            <Spacer />
            <Text intent="neutral">
              Unlock the complete component library, including advanced UI patterns and extended customization
              options. Designed for individual developers or freelancers who need production-ready quality and
              dedicated support. Includes priority bug fixes and early feature previews.
            </Text>
            <Spacer blockSize={40} />
            <Flex justifyContent="center">
              <Link
                href="/foundations/overview/get-started/installation"
                onClick={() => {
                  navigateTo('/foundations/overview/get-started/installation')
                }}
              >
                <Button size="sm" intent="inverse">
                  Buy now or upgrade
                </Button>
              </Link>
            </Flex>
          </Section>
          <Section heading="Business" variant="outline" intent="info" iconName="users">
            <Text intent="neutral" bold>
              For small teams who need support.
            </Text>
            <Spacer />
            <Text typography="h6">$49 / month</Text>
            <Spacer />
            <Text intent="neutral">
              Built for small teams that ship fast. Share access across your organization, manage licenses
              easily and receive responsive technical support. Includes everything in Professional plus
              collaboration-focused components and team-oriented updates.
            </Text>
            <Spacer blockSize={40} />
            <Flex justifyContent="center">
              <Link
                href="/foundations/overview/get-started/installation"
                onClick={() => {
                  navigateTo('/foundations/overview/get-started/installation')
                }}
              >
                <Button size="sm" intent="info">
                  Start team plan
                </Button>
              </Link>
            </Flex>
          </Section>
          <Section heading="Enterprise" variant="outline" intent="danger" iconName="globe">
            <Text intent="neutral" bold>
              Tailored for larger orgs and custom needs.
            </Text>
            <Spacer />
            <Text typography="h6">$199 / month</Text>
            <Spacer />
            <Text intent="neutral">
              Tailored for larger organizations with complex needs. Get full access to NebulaKit, custom
              licensing, invoicing and integration assistance. Includes direct communication with the
              maintainer and priority roadmap influence.
            </Text>
            <Spacer blockSize={40} />
            <Flex justifyContent="center">
              <Link
                href="/foundations/overview/get-started/installation"
                onClick={() => {
                  navigateTo('/foundations/overview/get-started/installation')
                }}
              >
                <Button size="sm" intent="danger">
                  Contact us
                </Button>
              </Link>
            </Flex>
          </Section>
        </Grid>
        <Spacer />
        <Text italic>* All prices in USD</Text>
      </Section>
    </Box>
  )
}
