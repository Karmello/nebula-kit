import { useNavigateTo } from 'client/services'
import { Box, Button, Flex, Section, Spacer, Text, Link, Grid, MarkerList } from 'lib/components'

export const PricingPage = () => {
  const navigateTo = useNavigateTo()

  const coreBundleLink = (
    <Link
      href="/pricing/core"
      onClick={() => {
        navigateTo('/pricing/core')
      }}
    >
      <Text>Core bundle included</Text>
    </Link>
  )

  const proBundleLink = (
    <Link
      href="/pricing/pro"
      onClick={() => {
        navigateTo('/pricing/pro')
      }}
    >
      <Text>Pro bundle included</Text>
    </Link>
  )

  return (
    <Box paddingTop={15} paddingInline={{ base: 20, lg: 50 }}>
      <Section heading="Plans & Pricing" intent="neutral" iconName="credit-card">
        <Text>Choose the plan that fits your workflow.</Text>
        <Spacer blockSize={50} />
        <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }} gap={20}>
          <Section heading="Free" variant="outline" iconName="leaf" interactive disableActiveState>
            <Text intent="neutral" bold>
              For newcomers.
            </Text>
            <Spacer />
            <Text typography="h6">$0</Text>
            <Spacer />
            <Text intent="neutral">
              Access the essential NebulaKit components to start building right away. Perfect for hobby
              projects, learning or exploring before committing.
            </Text>
            <Spacer />
            <MarkerList rowGap={7} intent="neutral">
              <MarkerList.Item>{coreBundleLink}</MarkerList.Item>
            </MarkerList>
            <Spacer blockSize={40} />
            <Flex justifyContent="center">
              <Link
                href="/foundations/overview/get-started/installation"
                onClick={() => {
                  navigateTo('/foundations/overview/get-started/installation')
                }}
              >
                <Button size="sm" intent="highlight">
                  Get started
                </Button>
              </Link>
            </Flex>
          </Section>
          <Section
            heading="Professional"
            variant="outline"
            intent="inverse"
            iconName="zap"
            interactive
            disableActiveState
          >
            <Text intent="neutral" bold>
              For individual developers.
            </Text>
            <Spacer />
            <Text typography="h6">$19 / month</Text>
            <Spacer />
            <Text intent="neutral">
              Unlock NebulaKit's full component library built on the core primitives. Perfect for individual
              developers and freelancers who want complete access to every building block.
            </Text>
            <Spacer />
            <MarkerList rowGap={7} intent="neutral">
              <MarkerList.Item>{coreBundleLink}</MarkerList.Item>
              <MarkerList.Item>{proBundleLink}</MarkerList.Item>
              <MarkerList.Item>
                <Text>Direct support available</Text>
              </MarkerList.Item>
            </MarkerList>
            <Spacer blockSize={40} />
            <Flex justifyContent="center">
              <Link
                href="/foundations/overview/get-started/installation"
                onClick={() => {
                  navigateTo('/foundations/overview/get-started/installation')
                }}
              >
                <Button size="sm" intent="inverse">
                  Choose
                </Button>
              </Link>
            </Flex>
          </Section>
          <Section
            heading="Business"
            variant="outline"
            intent="info"
            iconName="users"
            interactive
            disableActiveState
          >
            <Text intent="neutral" bold>
              For small teams up to 10 members.
            </Text>
            <Spacer />
            <Text typography="h6">$49 / month</Text>
            <Spacer />
            <Text intent="neutral">
              Ideal for small teams building together under one license. Includes everything from the
              Professional plan.
            </Text>
            <Spacer />
            <MarkerList rowGap={7} intent="neutral">
              <MarkerList.Item>{coreBundleLink}</MarkerList.Item>
              <MarkerList.Item>{proBundleLink}</MarkerList.Item>
              <MarkerList.Item>
                <Text>Higher priority support available</Text>
              </MarkerList.Item>
            </MarkerList>
            <Spacer blockSize={40} />
            <Flex justifyContent="center">
              <Link
                href="/foundations/overview/get-started/installation"
                onClick={() => {
                  navigateTo('/foundations/overview/get-started/installation')
                }}
              >
                <Button size="sm" intent="info">
                  Choose
                </Button>
              </Link>
            </Flex>
          </Section>
          <Section
            heading="Enterprise"
            variant="outline"
            intent="danger"
            iconName="globe"
            interactive
            disableActiveState
          >
            <Text intent="neutral" bold>
              For large organizations.
            </Text>
            <Spacer />
            <Text typography="h6">From $199 / month</Text>
            <Spacer />
            <Text intent="neutral">
              Tailored for large organizations and specialized use cases that need flexible agreements.
              Includes everything from the Business plan.
            </Text>
            <Spacer />
            <MarkerList rowGap={7} intent="neutral">
              <MarkerList.Item>{coreBundleLink}</MarkerList.Item>
              <MarkerList.Item>{proBundleLink}</MarkerList.Item>
              <MarkerList.Item>
                <Text>Top-priority support available</Text>
              </MarkerList.Item>
              <MarkerList.Item>
                <Text>Feature influence on the library's development</Text>
              </MarkerList.Item>
            </MarkerList>
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
