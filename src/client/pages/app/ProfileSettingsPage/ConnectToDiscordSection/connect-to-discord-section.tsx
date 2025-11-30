import { Section, Button, Text, Spacer, Flex } from 'lib/components'

import { useConnectToDiscord } from 'client/api'

export const ConnectToDiscordSection = ({
  userPlan,
  discordUserId,
}: {
  userPlan: string
  discordUserId: string
}) => {
  const connectToDiscord = useConnectToDiscord()

  return (
    <Section heading="Connect to Discord" variant="soft-outline" borderIntent="muted">
      <Text>
        Connect your Discord account to receive your NebulaKit role and priority badge in the community. This
        helps other members identify your plan and ensures your messages get priority attention.
      </Text>
      <Spacer blockSize={30} />
      <Flex alignItems="center" columnGap={20}>
        <Button
          tagAttrs={{
            onClick: async () => {
              const res = await connectToDiscord.sendRequest()
              if (res.data) {
                window.location.href = res.data.url
              }
            },
          }}
          size="sm"
          intent="primary"
          color="blue"
          iconName="plug"
          loading={connectToDiscord.isMakingRequest}
          disabled={userPlan === 'free' || !!discordUserId}
        >
          Connect
        </Button>
        {userPlan === 'free' ? (
          <Text intent="secondary" italic>
            * For paid users
          </Text>
        ) : discordUserId ? (
          <Text intent="secondary" italic iconName="check" iconPosition="right">
            Done
          </Text>
        ) : null}
      </Flex>
      <Spacer blockSize={7} />
    </Section>
  )
}
