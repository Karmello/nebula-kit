import { Section, MarkerList, Spacer, Text } from 'lib/components'

import { ConfirmCancelForm } from './confirm-cancel-form'

export const ConfirmCancelSection = ({
  userEmail,
  userPlan,
  handleCancelSuccess,
}: {
  userEmail: string
  userPlan: string
  handleCancelSuccess: () => void
}) => {
  return (
    <Section heading="Subscription" variant="soft-outline" intent="primary" color="red" borderIntent="muted">
      <Text intent="neutral">
        This section allows you to cancel your active subscription and return to the free plan.
      </Text>
      <Text bold intent="neutral">
        <Spacer blockSize={30} />
        What happens when you cancel
      </Text>
      <Spacer blockSize={15} />
      <MarkerList intent="neutral" color="gray">
        <MarkerList.Item>
          <Text>your license key is immediately revoked</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>you lose access to the Pro components bundle</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>your account switches back to the free plan</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>unused time in your billing period is not refunded</Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer blockSize={15} />
      <Text intent="neutral">
        If you change your mind later, you can start a new subscription at any time and a fresh license key
        will be issued automatically.
      </Text>
      <Spacer blockSize={30} />
      <ConfirmCancelForm
        userEmail={userEmail}
        userPlan={userPlan}
        handleCancelSuccess={handleCancelSuccess}
      />
    </Section>
  )
}
