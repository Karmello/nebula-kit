import { ReactNode, useLayoutEffect } from 'react'
import { useNavigateTo } from 'client/hooks'
import { useGetUser } from 'client/api'
import { Box, Flex, Section, Spacer, Text, Link, Grid, Loader, Icon } from 'lib/components'

import { PricingPlanButton } from './components/PricingPlanButton'

const OptionIncluded = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Flex alignItems="center" columnGap={10}>
        <Icon name="check" intent="primary" color="blue" />
        {children}
      </Flex>
      <Spacer blockSize={5} />
    </>
  )
}

export const PricingPage = () => {
  const navigateTo = useNavigateTo()

  const getUser = useGetUser()

  useLayoutEffect(() => {
    getUser.sendRequest()
  }, [])

  const coreBundleLink = (
    <Link
      href="/pricing/core"
      onClick={() => {
        navigateTo('/pricing/core')
      }}
    >
      <Text color="blue" intent="primary">
        CORE bundle
      </Text>
    </Link>
  )

  const proBundleLink = (
    <Link
      href="/pricing/pro"
      onClick={() => {
        navigateTo('/pricing/pro')
      }}
    >
      <Text color="blue" intent="primary">
        PRO bundle
      </Text>
    </Link>
  )

  return (
    <Box paddingTop={15} paddingInline={{ base: 20, lg: 50 }}>
      <Section heading="Pricing plans" intent="neutral" iconName="credit-card">
        <Text>Choose the plan that fits your workflow.</Text>
        <Spacer blockSize={50} />
        <Box position="relative">
          {getUser.isMakingRequest ? (
            <Loader centered size="lg" color="blue" />
          ) : (
            <>
              <Grid
                gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
                gap={20}
              >
                <Section heading="Free" variant="outline" intent="muted" iconName="leaf" interactive>
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
                  <Text bold>What you get</Text>
                  <Spacer blockSize={10} />
                  <OptionIncluded>{coreBundleLink}</OptionIncluded>
                  <OptionIncluded>
                    <Text>community access</Text>
                  </OptionIncluded>
                  <Spacer blockSize={40} />
                  <Flex justifyContent="center">
                    <PricingPlanButton plan="free" activePlan={getUser.data?.user.plan} />
                  </Flex>
                  <Spacer blockSize={12} />
                </Section>
                <Section
                  heading="Premium"
                  variant="outline"
                  intent="primary"
                  color="green"
                  iconName="zap"
                  interactive
                >
                  <Text intent="neutral" bold>
                    For individual developers.
                  </Text>
                  <Spacer />
                  <Text typography="h6">$19 / month</Text>
                  <Spacer />
                  <Text intent="neutral">
                    Unlock NebulaKit's full component library built on the core primitives. Perfect for
                    individual developers and freelancers who want complete access to every building block.
                  </Text>
                  <Spacer />
                  <Text bold>What you get</Text>
                  <Spacer blockSize={10} />
                  <OptionIncluded>{coreBundleLink}</OptionIncluded>
                  <OptionIncluded>{proBundleLink}</OptionIncluded>
                  <OptionIncluded>
                    <Text>community access</Text>
                  </OptionIncluded>
                  <OptionIncluded>
                    <Text>community support with priority responses</Text>
                  </OptionIncluded>
                  <Spacer blockSize={40} />
                  <Flex justifyContent="center">
                    <PricingPlanButton plan="premium" activePlan={getUser.data?.user.plan} color="green" />
                  </Flex>
                  <Spacer blockSize={12} />
                </Section>
                <Section
                  heading="Business"
                  variant="outline"
                  color="blue"
                  intent="primary"
                  iconName="users"
                  interactive
                >
                  <Text intent="neutral" bold>
                    For small teams up to 10 members.
                  </Text>
                  <Spacer />
                  <Text typography="h6">$49 / month</Text>
                  <Spacer />
                  <Text intent="neutral">
                    Ideal for small teams building together under one license. Includes everything from the
                    Premium plan.
                  </Text>
                  <Spacer />
                  <Text bold>What you get</Text>
                  <Spacer blockSize={10} />
                  <OptionIncluded>{coreBundleLink}</OptionIncluded>
                  <OptionIncluded>{proBundleLink}</OptionIncluded>
                  <OptionIncluded>
                    <Text>community access</Text>
                  </OptionIncluded>
                  <OptionIncluded>
                    <Text>community support with faster priority responses</Text>
                  </OptionIncluded>
                  <Spacer blockSize={40} />
                  <Flex justifyContent="center">
                    <PricingPlanButton plan="business" activePlan={getUser.data?.user.plan} color="blue" />
                  </Flex>
                  <Spacer blockSize={12} />
                </Section>
                <Section
                  heading="Enterprise"
                  variant="outline"
                  color="red"
                  intent="primary"
                  iconName="globe"
                  interactive
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
                  <Text bold>What you get</Text>
                  <Spacer blockSize={10} />
                  <OptionIncluded>{coreBundleLink}</OptionIncluded>
                  <OptionIncluded>{proBundleLink}</OptionIncluded>
                  <OptionIncluded>
                    <Text>community access</Text>
                  </OptionIncluded>
                  <OptionIncluded>
                    <Text>community support with highest priority responses</Text>
                  </OptionIncluded>
                  <OptionIncluded>
                    <Text>roadmap input with elevated consideration</Text>
                  </OptionIncluded>
                  <Spacer blockSize={40} />
                  <Flex justifyContent="center">
                    <PricingPlanButton plan="enterprise" activePlan={getUser.data?.user.plan} color="red" />
                  </Flex>
                  <Spacer blockSize={12} />
                </Section>
              </Grid>
              <Spacer blockSize={50} />
              <Flex flexDirection="column" rowGap={5}>
                <Text italic>
                  * NebulaKit uses a single-license model, one paid subscription = one shared license key for
                  unlocking the PRO bundle
                </Text>
                <Text italic>* community access is open to everyone</Text>
                <Text italic>* priority support applies to the paying account holder only</Text>
                <Text italic>* all prices in USD</Text>
              </Flex>
            </>
          )}
        </Box>
      </Section>
    </Box>
  )
}
