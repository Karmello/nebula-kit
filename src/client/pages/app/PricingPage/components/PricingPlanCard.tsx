import { ReactNode } from 'react'

import { Box, Icon, Link, NEB_LENGTH, Section, Spacer, Text } from 'lib/components'
import type { BoxColor } from 'lib/components/core/Box/types'
import type { IconName } from 'lib/components/core/Icon/types'
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
        <Box display="flex" alignItems="center" columnGap={NEB_LENGTH.px_016}>
          <Icon name="check" intent="primary" color={color} size={NEB_LENGTH.px_024} />
          {children}
        </Box>
        <Spacer blockSize={NEB_LENGTH.px_002} />
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
      <Spacer blockSize={NEB_LENGTH.px_008} />
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
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Box display="flex" justifyContent="center">
        <PricingPlanButton plan={plan} activePlan={activePlan} color={color} />
      </Box>
      <Spacer blockSize={NEB_LENGTH.px_016} />
    </Section>
  )
}
