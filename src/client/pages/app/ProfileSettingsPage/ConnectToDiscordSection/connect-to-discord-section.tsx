import { Box, Button, HorizontalRule, NEB_LENGTH, Spacer, Text, Title } from 'lib/components'
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
    <Box
      drawable
      intent="tertiary"
      borderMode="tinted"
      padding={NEB_LENGTH.px_016}
      overflowX="auto"
      overflowY="hidden"
      maxInlineSize="100%"
    >
      <Title typography="h5">Discord</Title>
      <HorizontalRule marginTop={NEB_LENGTH.px_004} />
      <Spacer blockSize={NEB_LENGTH.px_008} />
      <Text>
        Connect your Discord account to receive your NebulaKit role and priority badge in the
        community. This helps us recognize your plan and provide the right level of support.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <Box display="flex" alignItems="center" columnGap={NEB_LENGTH.px_016}>
        <Button
          tagAttrs={{
            onClick: async () => {
              const res = await connectToDiscord.sendRequest()
              if (res.ok) {
                window.location.href = res.data.url
              }
            },
          }}
          scale="sm"
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
      </Box>
      <Spacer blockSize={NEB_LENGTH.px_008} />
    </Box>
  )
}
