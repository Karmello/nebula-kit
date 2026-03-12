import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'
import { useCheckoutPaidPlan } from 'client/api'
import { Box, Button, Link, Text } from 'lib/components'
import { BoxColor } from 'lib/components/core/base/Box'

type PricingPlanButtonProps = {
  plan: string
  activePlan?: string
  color: BoxColor
}

export const PricingPlanButton = ({ plan, activePlan, color }: PricingPlanButtonProps) => {
  const navigateTo = useNavigateTo()
  const user = useAppStore(state => state.user)
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
                checkoutPaidPlan.sendRequest({ plan })
              },
            }}
            size="sm"
            intent="primary"
            color={color}
          >
            Subscribe
          </Button>
        )
      } else {
        if (plan === activePlan) {
          return (
            <Box drawable variant="solid" intent="secondary" color={color} paddingBlock="10px" paddingInline="14px">
              <Text iconName="check" iconPlacement="right" bold>
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
