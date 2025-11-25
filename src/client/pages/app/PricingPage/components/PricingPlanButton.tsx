import { useState } from 'react'

import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/services'
import { useAppStore } from 'client/store'
import { Button, Link, Text } from 'lib/components'
import { Color } from 'lib/definitions'

const makeCheckoutRequest = (plan: string, token: string) => {
  fetch(process.env.API_URL + '/payment/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ plan }),
  })
    .then(res => res.json())
    .then(data => {
      if (data.url) {
        window.location.href = data.url
      } else {
        console.error('Failed to start payment:', data)
      }
    })
}

type PricingPlanButtonProps = {
  plan: string
  activePlan?: string
  color?: Color
}

export const PricingPlanButton = ({ plan, activePlan, color }: PricingPlanButtonProps) => {
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false)

  const navigateTo = useNavigateTo()
  const { token } = useAppStore()

  if (plan === 'free') {
    if (!activePlan || activePlan === 'free') {
      return (
        <Link
          href="/foundations/overview/get-started/installation"
          onClick={() => {
            navigateTo('/foundations/overview/get-started/installation')
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
    if (!token) {
      return (
        <Link
          href={`/${PageKey.authRegister}`}
          onClick={() => {
            navigateTo(`/${PageKey.authRegister}`)
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
                makeCheckoutRequest(plan, token)
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
            <Text iconName="check" iconPosition="right" intent="primary" color="purple">
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
