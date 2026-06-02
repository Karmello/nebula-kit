import { ReactNode } from 'react'

import { Flex, Icon, Link, Section, Spacer, Text } from 'lib/components'
import { BoxColor } from 'lib/components/core/Box/types'
import { IconName } from 'lib/types'
import { Plan } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'

import { PricingPlanButton } from './PricingPlanButton'

type PricingPlanCardProps = {
  plan: Plan
  activePlan: Plan
  color: BoxColor
  iconName: IconName
  title: string
  headline: string
  priceInfo: string
  description: string
  options: string[]
}

export const PricingPlanCard = ({
  plan,
  activePlan,
  color,
  iconName,
  title,
  headline,
  priceInfo,
  description,
  options,
}: PricingPlanCardProps) => {
  const navigateTo = useNavigateTo()

  const OptionIncluded = ({ children }: { children: ReactNode }) => {
    return (
      <>
        <Flex alignItems="center" columnGap="sm">
          <Icon name="check" intent="primary" color={color} size="sm" />
          {children}
        </Flex>
        <Spacer blockSize="3xs" />
      </>
    )
  }

  return (
    <Section
      heading={title}
      variant={plan === 'free' ? 'outline' : 'soft-outline'}
      intent={plan === 'free' ? 'tertiary' : 'primary'}
      color={color}
      iconName={iconName}
      interactive
      size="lg"
    >
      <Text intent="neutral" bold>
        {headline}
      </Text>
      <Spacer />
      <Text typography="h5">{priceInfo}</Text>
      <Spacer />
      <Text intent="neutral">{description}</Text>
      <Spacer />
      <Text intent="neutral" bold>
        What you get:
      </Text>
      <Spacer blockSize="xs" />
      <OptionIncluded>
        <Link
          href="/pricing/core"
          onClick={() => {
            navigateTo('/pricing/core')
          }}
        >
          <Text intent="primary" color={color}>
            CORE bundle
          </Text>
        </Link>
      </OptionIncluded>
      {plan !== 'free' ? (
        <OptionIncluded>
          <Link
            href="/pricing/pro"
            onClick={() => {
              navigateTo('/pricing/pro')
            }}
          >
            <Text intent="primary" color={color}>
              PRO bundle
            </Text>
          </Link>
        </OptionIncluded>
      ) : null}
      {options.map((s, i) => (
        <OptionIncluded key={i}>
          <Text intent="neutral">{s}</Text>
        </OptionIncluded>
      ))}
      <Spacer blockSize="lg" />
      <Flex justifyContent="center">
        <PricingPlanButton plan={plan} activePlan={activePlan} color={color} />
      </Flex>
      <Spacer blockSize="sm" />
    </Section>
  )
}
