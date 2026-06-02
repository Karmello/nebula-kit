import { MarkerList, Section, Spacer, Text } from 'lib/components'

import { PaymentCancelForm } from './payment-cancel-form'

export const PaymentCancelSection = ({
  userEmail,
  userPlan,
  handleCancelSuccess,
}: {
  userEmail: string
  userPlan: string
  handleCancelSuccess: () => void
}) => {
  return (
    <Section heading="Subscription" variant="soft-outline" intent="primary" color="red">
      <Text intent="neutral">This section allows you to cancel your active subscription and return to the free plan.</Text>
      <Spacer blockSize="md" />
      <Text bold intent="neutral">
        What happens when you cancel
      </Text>
      <Spacer blockSize="sm" />
      <MarkerList intent="neutral" color="gray">
        <MarkerList.Item>
          <Text intent="neutral">your account switches back to the free plan</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text intent="neutral">your license key is immediately revoked thus you lose access to the Pro components bundle</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text intent="neutral">you get disconnected from Discord thus you lose your badge</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text intent="neutral">you get disconnected from GitHub thus you lose access to the private roadmap</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text intent="neutral">unused time in your billing period is not refunded</Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer blockSize="sm" />
      <Text intent="neutral">
        If you change your mind later, you can start a new subscription at any time and a fresh license key will be issued
        automatically.
      </Text>
      <Spacer blockSize="md" />
      <PaymentCancelForm userEmail={userEmail} userPlan={userPlan} handleCancelSuccess={handleCancelSuccess} />
    </Section>
  )
}
