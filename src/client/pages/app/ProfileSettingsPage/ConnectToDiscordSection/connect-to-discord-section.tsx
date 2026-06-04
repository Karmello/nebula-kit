import { Button, Flex, Section, Spacer, Text, Title } from 'lib/components'
import { useConnectToDiscord } from 'client/api'

export const ConnectToDiscordSection = ({ userPlan, discordUserId }: { userPlan: string; discordUserId: string }) => {
  const connectToDiscord = useConnectToDiscord()

  return (
    <Section heading="Discord" variant="outline" intent="tertiary">
      <Text>
        Connect your Discord account to receive your NebulaKit role and priority badge in the community. This helps us recognize
        your plan and provide the right level of support.
      </Text>
      <Spacer blockSize="md" />
      <Flex alignItems="center" columnGap="sm">
        <Button
          tagAttrs={{
            onClick: async () => {
              const res = await connectToDiscord.sendRequest()
              if (res.ok) {
                window.location.href = res.data.url
              }
            },
          }}
          size="sm"
          intent="primary"
          color="blue"
          iconName="plug"
          loading={connectToDiscord.isMakingRequest}
          disabled={userPlan === 'free' || !!discordUserId || !!connectToDiscord.data}
        >
          Connect
        </Button>
        {userPlan === 'free' ? (
          <Text intent="secondary" color="gray" italic>
            * For paid users
          </Text>
        ) : discordUserId ? (
          <Title iconName="check" iconPlacement="right">
            <Text intent="secondary" color="gray" italic>
              Done
            </Text>
          </Title>
        ) : null}
      </Flex>
      <Spacer blockSize="xs" />
    </Section>
  )
}
