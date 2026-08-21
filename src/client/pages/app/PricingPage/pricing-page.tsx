import { useLayoutEffect } from 'react'

import { Box, Flex, Grid, Loader, NEB_LENGTH, Section, Spacer, Text } from 'lib/components'
import { useGetUser } from 'client/api'
import { useAppStore } from 'client/store'

import { PricingPlanCard } from './components/PricingPlanCard'
import { PRICING_DATA } from './definitions'

export const PricingPage = () => {
  const user = useAppStore(state => state.user)

  const getUser = useGetUser()

  useLayoutEffect(() => {
    if (user && !getUser.data) {
      getUser.sendRequest()
    }
  }, [user])

  return (
    <Box paddingTop={NEB_LENGTH.px_016} paddingInline={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }}>
      <Section size="lg" heading="Pricing plans" iconName="credit-card">
        <Text>Choose the plan that fits your workflow.</Text>
        <Spacer blockSize={NEB_LENGTH.px_048} />
        {getUser.isMakingRequest ? (
          <Loader centered size={NEB_LENGTH.px_024} color="blue" />
        ) : (
          <>
            <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' }} gap={NEB_LENGTH.px_016}>
              <PricingPlanCard
                plan={PRICING_DATA.plans.free.id as never}
                activePlan={getUser.data?.user.plan}
                color="gray"
                iconName="leaf"
                title={PRICING_DATA.plans.free.title}
                headline={PRICING_DATA.plans.free.headline}
                priceInfo={PRICING_DATA.plans.free.price}
                description={PRICING_DATA.plans.free.description}
                options={PRICING_DATA.plans.free.whatYouGet}
              />
              <PricingPlanCard
                plan={PRICING_DATA.plans.premium.id as never}
                activePlan={getUser.data?.user.plan}
                color="green"
                iconName="zap"
                title={PRICING_DATA.plans.premium.title}
                headline={PRICING_DATA.plans.premium.headline}
                priceInfo={PRICING_DATA.plans.premium.price}
                description={PRICING_DATA.plans.premium.description}
                options={PRICING_DATA.plans.premium.whatYouGet}
              />
              <PricingPlanCard
                plan={PRICING_DATA.plans.business.id as never}
                activePlan={getUser.data?.user.plan}
                color="blue"
                iconName="users"
                title={PRICING_DATA.plans.business.title}
                headline={PRICING_DATA.plans.business.headline}
                priceInfo={PRICING_DATA.plans.business.price}
                description={PRICING_DATA.plans.business.description}
                options={PRICING_DATA.plans.business.whatYouGet}
              />
              <PricingPlanCard
                plan={PRICING_DATA.plans.enterprise.id as never}
                activePlan={getUser.data?.user.plan}
                color="red"
                iconName="globe"
                title={PRICING_DATA.plans.enterprise.title}
                headline={PRICING_DATA.plans.enterprise.headline}
                priceInfo={PRICING_DATA.plans.enterprise.price}
                description={PRICING_DATA.plans.enterprise.description}
                options={PRICING_DATA.plans.enterprise.whatYouGet}
              />
            </Grid>
            <Spacer blockSize={NEB_LENGTH.px_048} />
            <Flex flexDirection="column" rowGap={NEB_LENGTH.px_004}>
              {PRICING_DATA.additionalInfo.map((info, key) => (
                <Text key={key} italic>
                  {info}
                </Text>
              ))}
            </Flex>
          </>
        )}
      </Section>
    </Box>
  )
}
