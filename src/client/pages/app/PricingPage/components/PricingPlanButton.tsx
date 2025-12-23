import { useState } from 'react'

import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'
import { useCheckoutPaidPlan } from 'client/api'
import { Button, Link, Text } from 'lib/components'
import { Color } from 'lib/definitions'

type PricingPlanButtonProps = {
  plan: string
  activePlan?: string
  color?: Color
}

export const PricingPlanButton = ({ plan, activePlan, color }: PricingPlanButtonProps) => {
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false)

  const navigateTo = useNavigateTo()
  const { user } = useAppStore()
  const checkoutPaidPlan = useCheckoutPaidPlan()

  if (plan === 'free') {
    if (!activePlan || activePlan === 'free') {
      return (
        <Link
          href={`${PageKey.foundations}/overview/getting-started/installation`}
          onClick={() => {
            navigateTo(`${PageKey.foundations}/overview/getting-started/installation`)
          }}
        >
          <Button size="sm" color={color} intent="primary">
            Get started
          </Button>
        </Link>
      )
    } else {
      return null
    }
  } else {
    if (!user) {
      return (
        <Link
          href={PageKey.authRegister}
          onClick={() => {
            navigateTo(PageKey.authRegister)
          }}
        >
          <Button size="sm" intent="primary" color={color}>
            Subscribe
          </Button>
        </Link>
      )
    } else {
      if (activePlan === 'free') {
        return (
          <Button
            tagAttrs={{
              onClick: () => {
                setIsRedirecting(true)
                checkoutPaidPlan.sendRequest({ plan })
              },
            }}
            size="sm"
            intent="primary"
            color={color}
            loading={isRedirecting}
          >
            Subscribe
          </Button>
        )
      } else {
        if (plan === activePlan) {
          return (
            <Text iconName="check" iconPlacement="right" intent="primary" color="purple">
              This is the plan you are on
            </Text>
          )
        } else {
          return null
        }
      }
    }
  }
}
