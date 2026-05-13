import { Section, Button, Text, Spacer, Flex, WithIcon } from 'lib/components'
import { useConnectToGithub } from 'client/api'

export const ConnectToGithubSection = ({ userPlan, githubUsername }: { userPlan: string; githubUsername: string }) => {
  const connectToGithub = useConnectToGithub()

  return (
    <Section heading="GitHub" variant="outline" intent="tertiary">
      <Text>
        Connect your GitHub account to unlock access to the private NebulaKit roadmap. This lets you follow upcoming features,
        track progress and stay aligned with what's being built next.
      </Text>
      <Spacer blockSize="md" />
      <Flex alignItems="center" columnGap="sm">
        <Button
          tagAttrs={{
            onClick: async () => {
              const res = await connectToGithub.sendRequest()
              if (res.ok) {
                window.location.href = res.data.url
              }
            },
          }}
          size="sm"
          intent="primary"
          color="blue"
          iconName="plug"
          loading={connectToGithub.isMakingRequest}
          disabled={userPlan === 'free' || !!githubUsername || !!connectToGithub.data}
        >
          Connect
        </Button>
        {userPlan === 'free' ? (
          <Text intent="secondary" color="gray" italic>
            * For paid users
          </Text>
        ) : githubUsername ? (
          <WithIcon iconName="check" iconPlacement="right">
            <Text intent="secondary" color="gray" italic>
              Done
            </Text>
          </WithIcon>
        ) : null}
      </Flex>
      <Spacer blockSize="xs" />
    </Section>
  )
}
