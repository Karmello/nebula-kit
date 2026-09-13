import { Box, HorizontalRule, NEB_LENGTH, Spacer, Text, Title } from 'lib/components'

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
    <Box
      drawable
      borderMode="filled"
      intent="primary"
      color="red"
      padding={NEB_LENGTH.px_016}
      overflowX="auto"
      overflowY="hidden"
      maxInlineSize="100%"
    >
      <Title typography="h5" color="red" intent="primary">
        Account deactivation
      </Title>
      <HorizontalRule color="red" marginTop={NEB_LENGTH.px_004} />
      <Spacer blockSize={NEB_LENGTH.px_008} />
      <Text>
        You can deactivate your account here if you no longer wish to use NebulaKit. Deactivation
        permanently removes your user data, disconnects any linked services and signs you out
        immediately. Your email becomes free to register a new account in the future.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <AccountDeactivationForm
        userEmail={userEmail}
        userPlan={userPlan}
        handleDeactivateSuccess={handleDeactivateSuccess}
      />
    </Box>
  )
}
