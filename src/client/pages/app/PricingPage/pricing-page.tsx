import { useLayoutEffect } from 'react'

import { useGetUser } from 'client/api'
import { useAppStore } from 'client/store'
import { Box, Flex, Section, Spacer, Text, Grid, Loader } from 'lib/components'

import { PricingPlanCard } from './components/PricingPlanCard'

export const PricingPage = () => {
  const user = useAppStore(state => state.user)

  const getUser = useGetUser()

  useLayoutEffect(() => {
    if (user && !getUser.data) {
      getUser.sendRequest()
    }
  }, [user])

  return (
    <Box paddingTop="15px" paddingInline={{ base: '20px', lg: '50px' }}>
      <Section heading="Pricing plans" iconName="credit-card">
        <Text>Choose the plan that fits your workflow.</Text>
        <Spacer blockSize="50px" />
        {getUser.isMakingRequest ? (
          <Loader centered size="lg" color="blue" />
        ) : (
          <>
            <Grid
              gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }}
              gap="20px"
            >
              <PricingPlanCard
                plan="free"
                activePlan={getUser.data?.user.plan}
                color="gray"
                iconName="leaf"
                title="Free"
                headline="For newcomers."
                priceInfo="$0"
                description="Access the essential NebulaKit components to start building right away. Perfect for hobby
                  projects, learning or exploring before committing."
                options={['Discord access']}
              />
              <PricingPlanCard
                plan="premium"
                activePlan={getUser.data?.user.plan}
                color="green"
                iconName="zap"
                title="Premium"
                headline="For individual developers."
                priceInfo="$19 / month"
                description="Unlock NebulaKit's full component library built on the core primitives. Perfect for
    individual developers and freelancers who want complete access to every building block."
                options={['Discord access with moderate chat support', 'Github roadmap access']}
              />
              <PricingPlanCard
                plan="business"
                activePlan={getUser.data?.user.plan}
                color="blue"
                iconName="users"
                title="Business"
                headline="For small teams up to 10 members."
                priceInfo="$49 / month"
                description="Ideal for small teams building together under one license. Includes everything from the
    Premium plan."
                options={['Discord access with chat support', 'Github roadmap access']}
              />
              <PricingPlanCard
                plan="enterprise"
                activePlan={getUser.data?.user.plan}
                color="red"
                iconName="globe"
                title="Enterprise"
                headline="For large organizations."
                priceInfo="From $199 / month"
                description="Tailored for large organizations and specialized use cases that need flexible agreements.
    Includes everything from the Business plan."
                options={[
                  'Discord access with high priority chat support',
                  'Github roadmap access + elevated input consideration',
                ]}
              />
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
                * as NebulaKit grows with more components and features, pricing may be adjusted slightly over
                time to reflect increased value, any updates will always be communicated in advance
              </Text>
              <Text italic>* all prices in USD</Text>
            </Flex>
          </>
        )}
      </Section>
    </Box>
  )
}
