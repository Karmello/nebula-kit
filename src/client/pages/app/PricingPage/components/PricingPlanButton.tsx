import { useLayoutEffect, useState } from 'react'

import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'
import { useCheckoutPaidPlan } from 'client/api'
import { Box, Button, Link, Text } from 'lib/components'
import { BoxColor } from 'lib/components/core/base/Box'

type PricingPlanButtonProps = {
  plan: string
  activePlan?: string
  color?: BoxColor
}

export const PricingPlanButton = ({ plan, activePlan, color }: PricingPlanButtonProps) => {
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false)

  useLayoutEffect(() => {
    setIsRedirecting(false)
  }, [])

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
            <Box
              drawable
              variant="outline"
              intent="tertiary"
              color="purple"
              paddingBlock="5px"
              paddingInline="10px"
            >
              <Text iconName="check" iconPlacement="right" intent="primary" color="purple">
                This is the plan you are on
              </Text>
            </Box>
          )
        } else {
          return null
        }
      }
    }
  }
}
