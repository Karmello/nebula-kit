import { useLayoutEffect } from 'react'
import { sentenceCase } from 'change-case'

import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { useGetUser } from 'client/api'
import { useAppStore } from 'client/store'
import { Loader, Table, Text, Flex, Link, Button, Box, Spacer, Section, WithIcon } from 'lib/components'
import { CopyButton } from 'client/components'

export default () => {
  const getUser = useGetUser()
  const navigateTo = useNavigateTo()
  const user = useAppStore(state => state.user)

  useLayoutEffect(() => {
    if (user && !getUser.data) {
      getUser.sendRequest()
    }
  }, [user])

  return (
    <Section heading="Details" size="sm" intent="primary" color="blue">
      <Spacer blockSize="xs" />
      {!getUser.isMakingRequest ? (
        <Table layout="fixed" intent="neutral">
          <Table.Body intent="muted" paddingBlock="10px" paddingInline="12px">
            <Table.Row>
              <Table.Cell colSpan={1}>
                <Text lineHeight={1.2}>Email</Text>
              </Table.Cell>
              <Table.Cell colSpan={2}>
                <Text wordBreak="break-all">{getUser.data?.user.email}</Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell colSpan={1}>
                <Text lineHeight={1.2}>Registration date</Text>
              </Table.Cell>
              <Table.Cell colSpan={2}>
                <Text wordBreak="break-all">{getUser.data ? new Date(getUser.data.user.createdAt).toDateString() : ''}</Text>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell colSpan={1}>
                <Text lineHeight={1.2}>Pricing plan</Text>
              </Table.Cell>
              <Table.Cell colSpan={2}>
                <Flex alignItems="center" flexWrap="wrap" rowGap="xs" columnGap="sm">
                  <Text bold>{getUser.data ? sentenceCase(getUser.data.user.plan) : ''}</Text>
                  {!getUser.isMakingRequest ? (
                    <Link
                      href={PageKey.pricing}
                      onClick={() => {
                        navigateTo(PageKey.pricing)
                      }}
                    >
                      <Button size="xs" variant="outline" intent="tertiary" color="blue">
                        {getUser.data?.user.plan === 'free' ? 'Upgrade' : 'Details'}
                      </Button>
                    </Link>
                  ) : null}
                </Flex>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell colSpan={1}>
                <Text lineHeight={1.2}>License key</Text>
              </Table.Cell>
              <Table.Cell colSpan={2}>
                {getUser.data ? (
                  <Flex alignItems="center" gap="xs">
                    <Text
                      intent={getUser.data.user.licenseKey ? 'primary' : undefined}
                      color={getUser.data.user.licenseKey ? 'blue' : undefined}
                      wordBreak="break-all"
                      lineHeight={1.2}
                      bold={!!getUser.data.user.licenseKey}
                    >
                      {getUser.data.user.licenseKey || '-'}
                    </Text>
                    {getUser.data.user.licenseKey ? <CopyButton text={getUser.data.user.licenseKey} /> : null}
                  </Flex>
                ) : (
                  ''
                )}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell colSpan={1}>
                <Text lineHeight={1.2}>Discord connection status</Text>
              </Table.Cell>
              <Table.Cell colSpan={2}>
                {getUser.data ? (
                  <WithIcon
                    iconName={
                      getUser.data.user.plan !== 'free' ? (!!getUser.data?.user.discordUserId ? 'check' : undefined) : undefined
                    }
                    iconPlacement="right"
                    iconColor={
                      getUser.data.user.plan !== 'free' ? (!!getUser.data?.user.discordUserId ? 'green' : 'red') : undefined
                    }
                    iconIntent={getUser.data.user.plan !== 'free' ? 'primary' : undefined}
                  >
                    <Text
                      color={
                        getUser.data.user.plan !== 'free' ? (!!getUser.data?.user.discordUserId ? 'green' : 'red') : undefined
                      }
                      intent={getUser.data.user.plan !== 'free' ? 'primary' : undefined}
                    >
                      {getUser.data.user.plan !== 'free'
                        ? !!getUser.data?.user.discordUserId
                          ? 'Connected'
                          : 'Not connected'
                        : '-'}
                    </Text>
                  </WithIcon>
                ) : null}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell colSpan={1}>
                <Text lineHeight={1.2}>GitHub connection status</Text>
              </Table.Cell>
              <Table.Cell colSpan={2}>
                {getUser.data ? (
                  <Flex alignItems="center" flexWrap="wrap" rowGap="xs" columnGap="sm">
                    <Flex.Item alignSelf="auto">
                      <WithIcon
                        iconName={
                          getUser.data.user.plan !== 'free'
                            ? !!getUser.data?.user.githubUsername
                              ? 'check'
                              : undefined
                            : undefined
                        }
                        iconPlacement="right"
                        iconColor={
                          getUser.data.user.plan !== 'free' ? (!!getUser.data?.user.githubUsername ? 'green' : 'red') : undefined
                        }
                        iconIntent={getUser.data.user.plan !== 'free' ? 'primary' : undefined}
                      >
                        <Text
                          color={
                            getUser.data.user.plan !== 'free'
                              ? !!getUser.data?.user.githubUsername
                                ? 'green'
                                : 'red'
                              : undefined
                          }
                          intent={getUser.data.user.plan !== 'free' ? 'primary' : undefined}
                        >
                          {getUser.data.user.plan !== 'free'
                            ? !!getUser.data?.user.githubUsername
                              ? `Connected as ${getUser.data.user.githubUsername}`
                              : 'Not connected'
                            : '-'}
                        </Text>
                      </WithIcon>
                    </Flex.Item>
                    {getUser.data?.user.githubUsername ? (
                      <Link href="https://github.com/orgs/nebula-kit/projects/1" target="_blank">
                        <Button
                          size="xs"
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
        <Box position="relative" blockSize="2xl" drawable variant="solid" intent="muted">
          <Loader centered active color="blue" size="sm" />
        </Box>
      )}
    </Section>
  )
}
