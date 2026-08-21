import { useLayoutEffect } from 'react'
import { sentenceCase } from 'change-case'

import { Box, Button, Flex, Link, Loader, NEB_LENGTH, Section, Spacer, Table, Text, Title } from 'lib/components'
import { useGetUser } from 'client/api'
import { CopyButton } from 'client/components'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'

export default () => {
  const getUser = useGetUser()
  const navigateTo = useNavigateTo()
  const user = useAppStore(state => state.user)

  useLayoutEffect(() => {
    if (user && !getUser.data) {
      getUser.sendRequest()
    }
  }, [user])

  const userData = getUser.data?.user

  const hasPaidPlan = userData?.plan !== 'free'

  const isDiscordConnected = !!userData?.discordUserId
  const isGithubConnected = !!userData?.githubUsername

  const discordStatusColor = hasPaidPlan ? (isDiscordConnected ? 'green' : 'red') : undefined

  const githubStatusColor = hasPaidPlan ? (isGithubConnected ? 'green' : 'red') : undefined

  const discordStatusText = hasPaidPlan ? (isDiscordConnected ? 'Connected' : 'Not connected') : '-'

  const githubStatusText = hasPaidPlan ? (isGithubConnected ? `Connected as ${userData?.githubUsername}` : 'Not connected') : '-'

  return (
    <Section heading="Details" size="sm" intent="primary" color="blue">
      <Spacer blockSize={NEB_LENGTH.px_008} />

      {!getUser.isMakingRequest ? (
        <Table layout="fixed" intent="neutral">
          <Table.Body intent="muted" paddingBlock={NEB_LENGTH.px_012} paddingInline={NEB_LENGTH.px_012}>
            <Table.Row>
              <Table.Cell>
                <Text lineHeight={1.2}>Email</Text>
              </Table.Cell>

              <Table.Cell colSpan={2}>
                <Text wordBreak="break-all">{userData?.email}</Text>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <Text lineHeight={1.2}>Registration date</Text>
              </Table.Cell>

              <Table.Cell colSpan={2}>
                <Text wordBreak="break-all">{userData ? new Date(userData.createdAt).toDateString() : ''}</Text>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <Text lineHeight={1.2}>Pricing plan</Text>
              </Table.Cell>

              <Table.Cell colSpan={2}>
                <Flex alignItems="center" flexWrap="wrap" rowGap={NEB_LENGTH.px_008} columnGap={NEB_LENGTH.px_016}>
                  <Text bold>{userData ? sentenceCase(userData.plan) : ''}</Text>

                  {!getUser.isMakingRequest ? (
                    <Link
                      href={PageKey.pricing}
                      onClick={() => {
                        navigateTo(PageKey.pricing)
                      }}
                    >
                      <Button scale="xs" variant="outline" intent="tertiary" color="blue">
                        {userData?.plan === 'free' ? 'Upgrade' : 'Details'}
                      </Button>
                    </Link>
                  ) : null}
                </Flex>
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <Text lineHeight={1.2}>License key</Text>
              </Table.Cell>

              <Table.Cell colSpan={2}>
                {userData ? (
                  <Flex alignItems="center" gap={NEB_LENGTH.px_008}>
                    <Text
                      intent={userData.licenseKey ? 'primary' : undefined}
                      color={userData.licenseKey ? 'blue' : undefined}
                      wordBreak="break-all"
                      lineHeight={1.2}
                      bold={!!userData.licenseKey}
                    >
                      {userData.licenseKey || '-'}
                    </Text>

                    {userData.licenseKey ? <CopyButton text={userData.licenseKey} /> : null}
                  </Flex>
                ) : (
                  ''
                )}
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <Text lineHeight={1.2}>Discord connection status</Text>
              </Table.Cell>

              <Table.Cell colSpan={2}>
                {userData ? (
                  <Title
                    iconName={hasPaidPlan ? (isDiscordConnected ? 'check' : undefined) : undefined}
                    iconPlacement="right"
                    color={discordStatusColor}
                    intent={hasPaidPlan ? 'primary' : undefined}
                  >
                    {discordStatusText}
                  </Title>
                ) : null}
              </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <Text lineHeight={1.2}>GitHub connection status</Text>
              </Table.Cell>

              <Table.Cell colSpan={2}>
                {userData ? (
                  <Flex alignItems="center" flexWrap="wrap" rowGap={NEB_LENGTH.px_008} columnGap={NEB_LENGTH.px_016}>
                    <Flex.Item alignSelf="auto">
                      <Title
                        iconName={hasPaidPlan ? (isGithubConnected ? 'check' : undefined) : undefined}
                        iconPlacement="right"
                        color={githubStatusColor}
                        intent={hasPaidPlan ? 'primary' : undefined}
                      >
                        {githubStatusText}
                      </Title>
                    </Flex.Item>

                    {isGithubConnected ? (
                      <Link href="https://github.com/orgs/nebula-kit/projects/1" target="_blank">
                        <Button
                          scale="xs"
                          variant="outline"
                          intent="secondary"
                          color="blue"
                          iconName="external-link"
                          iconPlacement="right"
                        >
                          Roadmap
                        </Button>
                      </Link>
                    ) : null}
                  </Flex>
                ) : null}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ) : (
        <Box position="relative" blockSize={NEB_LENGTH.px_064} drawable variant="solid" intent="muted">
          <Loader centered active color="blue" size={NEB_LENGTH.px_024} />
        </Box>
      )}
    </Section>
  )
}
