import { ReactNode, useLayoutEffect } from 'react'
import { useNavigateTo } from 'client/hooks'
import { useGetUser } from 'client/api'
import { useAppStore } from 'client/store'
import { Box, Flex, Section, Spacer, Text, Link, Grid, Loader, Icon } from 'lib/components'

import { PricingPlanButton } from './components/PricingPlanButton'

const OptionIncluded = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Flex alignItems="center" columnGap="10px">
        <Icon name="check" intent="primary" color="blue" />
        {children}
      </Flex>
      <Spacer blockSize="5px" />
    </>
  )
}

export const PricingPage = () => {
  const navigateTo = useNavigateTo()
  const { user } = useAppStore()

  const getUser = useGetUser()

  useLayoutEffect(() => {
    if (user) {
      getUser.sendRequest()
    }
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
    <Box paddingTop="15px" paddingInline={{ base: '20px', lg: '50px' }}>
      <Section heading="Pricing plans" iconName="credit-card">
        <Text>Choose the plan that fits your workflow.</Text>
        <Spacer blockSize="50px" />
        <Box position="relative">
          {getUser.isMakingRequest ? (
            <Loader centered size="lg" color="blue" />
          ) : (
            <>
              <Grid
                gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
                gap="20px"
              >
                <Section heading="Free" variant="outline" intent="muted" iconName="leaf">
                  <Text intent="neutral" bold>
                    For newcomers.
                  </Text>
                  <Spacer />
                  <Text typography="h6" bold>
                    $0
                  </Text>
                  <Spacer />
                  <Text intent="neutral">
                    Access the essential NebulaKit components to start building right away. Perfect for hobby
                    projects, learning or exploring before committing.
                  </Text>
                  <Spacer />
                  <Text bold>What you get</Text>
                  <Spacer blockSize="10px" />
                  <OptionIncluded>{coreBundleLink}</OptionIncluded>
                  <OptionIncluded>
                    <Text>Discord access</Text>
                  </OptionIncluded>
                  <Spacer blockSize="40px" />
                  <Flex justifyContent="center">
                    <PricingPlanButton plan="free" activePlan={getUser.data?.user.plan} />
                  </Flex>
                  <Spacer blockSize="12px" />
                </Section>
                <Section
                  heading="Premium"
                  variant="soft-outline"
                  intent="primary"
                  color="green"
                  iconName="zap"
                >
                  <Text intent="neutral" bold>
                    For individual developers.
                  </Text>
                  <Spacer />
                  <Text typography="h6" color="green" intent="primary" bold>
                    $19 / month
                  </Text>
                  <Spacer />
                  <Text intent="neutral">
                    Unlock NebulaKit's full component library built on the core primitives. Perfect for
                    individual developers and freelancers who want complete access to every building block.
                  </Text>
                  <Spacer />
                  <Text bold intent="neutral">
                    What you get
                  </Text>
                  <Spacer blockSize="10px" />
                  <OptionIncluded>{coreBundleLink}</OptionIncluded>
                  <OptionIncluded>{proBundleLink}</OptionIncluded>
                  <OptionIncluded>
                    <Text intent="neutral">Discord access with moderate chat support</Text>
                  </OptionIncluded>
                  <OptionIncluded>
                    <Text intent="neutral">Github roadmap access</Text>
                  </OptionIncluded>
                  <Spacer blockSize="40px" />
                  <Flex justifyContent="center">
                    <PricingPlanButton plan="premium" activePlan={getUser.data?.user.plan} color="green" />
                  </Flex>
                  <Spacer blockSize="12px" />
                </Section>
                <Section
                  heading="Business"
                  variant="soft-outline"
                  color="blue"
                  intent="primary"
                  iconName="users"
                >
                  <Text intent="neutral" bold>
                    For small teams up to 10 members.
                  </Text>
                  <Spacer />
                  <Text typography="h6" color="blue" intent="primary" bold>
                    $49 / month
                  </Text>
                  <Spacer />
                  <Text intent="neutral">
                    Ideal for small teams building together under one license. Includes everything from the
                    Premium plan.
                  </Text>
                  <Spacer />
                  <Text bold intent="neutral">
                    What you get
                  </Text>
                  <Spacer blockSize="10px" />
                  <OptionIncluded>{coreBundleLink}</OptionIncluded>
                  <OptionIncluded>{proBundleLink}</OptionIncluded>
                  <OptionIncluded>
                    <Text intent="neutral">Discord access with chat support</Text>
                  </OptionIncluded>
                  <OptionIncluded>
                    <Text intent="neutral">Github roadmap access</Text>
                  </OptionIncluded>
                  <Spacer blockSize="40px" />
                  <Flex justifyContent="center">
                    <PricingPlanButton plan="business" activePlan={getUser.data?.user.plan} color="blue" />
                  </Flex>
                  <Spacer blockSize="12px" />
                </Section>
                <Section
                  heading="Enterprise"
                  variant="soft-outline"
                  color="red"
                  intent="primary"
                  iconName="globe"
                >
                  <Text intent="neutral" bold>
                    For large organizations.
                  </Text>
                  <Spacer />
                  <Text color="red" intent="primary" typography="h6" bold>
                    From $199 / month
                  </Text>
                  <Spacer />
                  <Text intent="neutral">
                    Tailored for large organizations and specialized use cases that need flexible agreements.
                    Includes everything from the Business plan.
                  </Text>
                  <Spacer />
                  <Text bold intent="neutral">
                    What you get
                  </Text>
                  <Spacer blockSize="10px" />
                  <OptionIncluded>{coreBundleLink}</OptionIncluded>
                  <OptionIncluded>{proBundleLink}</OptionIncluded>
                  <OptionIncluded>
                    <Text intent="neutral">Discord access with high priority chat support</Text>
                  </OptionIncluded>
                  <OptionIncluded>
                    <Text intent="neutral">Github roadmap access + elevated input consideration</Text>
                  </OptionIncluded>
                  <Spacer blockSize="40px" />
                  <Flex justifyContent="center">
                    <PricingPlanButton plan="enterprise" activePlan={getUser.data?.user.plan} color="red" />
                  </Flex>
                  <Spacer blockSize="12px" />
                </Section>
              </Grid>
              <Spacer blockSize="50px" />
              <Flex flexDirection="column" rowGap="5px">
                <Text italic>
                  * NebulaKit uses a single-license model, one paid subscription = one shared license key for
                  unlocking the PRO bundle
                </Text>
                <Text italic>
                  * Discord community access is open to everyone, chat support applies to the paying account
                  holder only
                </Text>
                <Text italic>
                  * as NebulaKit grows with more components and features, pricing may be adjusted slightly
                  over time to reflect increased value, any updates will always be communicated in advance
                </Text>
                <Text italic>* all prices in USD</Text>
              </Flex>
            </>
          )}
        </Box>
      </Section>
    </Box>
  )
}
