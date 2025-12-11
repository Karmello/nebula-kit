import { Section, Spacer, Text } from 'lib/components'

import { AccountDeactivationForm } from './account-deactivation-form'

export const AccountDeactivationSection = ({
  userEmail,
  userPlan,
  handleDeactivateSuccess,
}: {
  userEmail: string
  userPlan: string
  handleDeactivateSuccess: () => void
}) => {
  return (
    <Section
      heading="Account deactivation"
      variant="soft-outline"
      intent="primary"
      color="red"
      borderIntent="muted"
    >
      <Text>
        You can deactivate your account here if you no longer wish to use NebulaKit. Deactivation permanently
        removes your user data, disconnects any linked services and signs you out immediately. Your email
        becomes free to register a new account in the future, but your previous data cannot be restored once
        deleted.
      </Text>
      <Spacer blockSize="30px" />
      <AccountDeactivationForm
        userEmail={userEmail}
        userPlan={userPlan}
        handleDeactivateSuccess={handleDeactivateSuccess}
      />
    </Section>
  )
}
