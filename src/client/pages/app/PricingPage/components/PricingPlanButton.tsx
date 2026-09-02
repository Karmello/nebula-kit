import { Box, Button, Link, NEB_LENGTH, Text, Title } from 'lib/components'
import { BoxColor } from 'lib/components/core/Box/types'
import { useCheckoutPaidPlan } from 'client/api'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'

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
          <Button scale="sm" color={color} intent="primary">
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
          <Button scale="sm" intent="primary" color={color}>
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
            scale="sm"
            intent="primary"
            color={color}
          >
            Subscribe
          </Button>
        )
      } else {
        if (plan === activePlan) {
          return (
            <Box
              drawable
              bgMode="filled"
              intent="secondary"
              color={color}
              paddingBlock={NEB_LENGTH.px_012}
              paddingInline={NEB_LENGTH.px_012}
            >
              <Title iconName="check" iconPlacement="right">
                <Text bold>This is the plan you are on</Text>
              </Title>
            </Box>
          )
        } else {
          return null
        }
      }
    }
  }
}
