import { useLayoutEffect } from 'react'
import { sentenceCase } from 'change-case'

import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { useGetUser } from 'client/api'
import { useAppStore } from 'client/store'
import { Loader, Table, Text, Flex, Link, Button } from 'lib/components'

export default () => {
  const getUser = useGetUser()
  const navigateTo = useNavigateTo()
  const { user } = useAppStore()

  useLayoutEffect(() => {
    if (user) {
      getUser.sendRequest()
    }
  }, [])

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getUser.data.user.licenseKey)
  }

  return (
    <Table layout="fixed" intent="neutral" color="blue">
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell blockSize="60px">
            <Flex alignItems="center" columnGap="20px">
              <Text typography="h6" iconName="arrow-right">
                Details
              </Text>
              <Loader active={getUser.isMakingRequest} color="blue" size="sm" />
            </Flex>
          </Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body intent="tertiary" paddingBlock="10px" paddingInline="18px">
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Email</Text>
          </Table.Cell>
          <Table.Cell colSpan={2} blockSize="50px">
            <Text bold>{getUser.data?.user.email}</Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Registration date</Text>
          </Table.Cell>
          <Table.Cell colSpan={2} blockSize="50px">
            <Text bold>{getUser.data ? new Date(getUser.data.user.createdAt).toDateString() : ''}</Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Pricing plan</Text>
          </Table.Cell>
          <Table.Cell colSpan={2} blockSize="50px">
            <Flex alignItems="center" flexWrap="wrap" rowGap="10px" columnGap="15px">
              <Text bold>{getUser.data ? sentenceCase(getUser.data.user.plan) : ''}</Text>
              {!getUser.isMakingRequest ? (
                <Link
                  href={PageKey.pricing}
                  onClick={() => {
                    navigateTo(PageKey.pricing)
                  }}
                >
                  <Button size="xs" variant="outline" intent="secondary" color="blue">
                    {getUser.data?.user.plan === 'free' ? 'Upgrade' : 'Details'}
                  </Button>
                </Link>
              ) : null}
            </Flex>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>License key</Text>
          </Table.Cell>
          <Table.Cell colSpan={2} blockSize="50px">
            {getUser.data ? (
              <Flex alignItems="center" gap="10px">
                <Text tagAttrs={{ style: { wordBreak: 'break-all' } }} bold intent="primary" color="blue">
                  {getUser.data.user.licenseKey || '-'}
                </Text>
                {getUser.data.user.licenseKey ? (
                  <Button
                    tagAttrs={{
                      onClick: () => {
                        handleCopy()
                      },
                    }}
                    iconName="copy"
                    size="xs"
                    variant="ghost"
                    intent="primary"
                    color="blue"
                  />
                ) : null}
              </Flex>
            ) : (
              ''
            )}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Discord connection status</Text>
          </Table.Cell>
          <Table.Cell
            colSpan={2}
            blockSize="50px"
            paddingInline={getUser.data?.user.plan !== 'free' ? '15px' : '0px'}
          >
            {getUser.data ? (
              <Text
                iconName={
                  getUser.data.user.plan !== 'free'
                    ? !!getUser.data?.user.discordUserId
                      ? 'check'
                      : 'close'
                    : undefined
                }
                color={!!getUser.data?.user.discordUserId ? 'green' : 'red'}
                intent="primary"
                bold
              >
                {getUser.data.user.plan !== 'free'
                  ? !!getUser.data?.user.discordUserId
                    ? 'Connected'
                    : 'Not connected'
                  : '-'}
              </Text>
            ) : null}
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Github connection status</Text>
          </Table.Cell>
          <Table.Cell
            colSpan={2}
            blockSize="50px"
            paddingInline={getUser.data?.user.plan !== 'free' ? '15px' : '0px'}
          >
            {getUser.data ? (
              <Flex alignItems="center" flexWrap="wrap" rowGap="10px" columnGap="15px">
                <Flex.Item alignSelf="auto">
                  <Text
                    iconName={
                      getUser.data.user.plan !== 'free'
                        ? !!getUser.data?.user.githubUsername
                          ? 'check'
                          : 'close'
                        : undefined
                    }
                    color={!!getUser.data?.user.githubUsername ? 'green' : 'red'}
                    intent="primary"
                    bold
                  >
                    {getUser.data.user.plan !== 'free'
                      ? !!getUser.data?.user.githubUsername
                        ? `Connected as ${getUser.data.user.githubUsername}`
                        : 'Not connected'
                      : '-'}
                  </Text>
                </Flex.Item>
                {getUser.data?.user.githubUsername ? (
                  <Link href="https://github.com/orgs/nebula-kit/projects/1" target="_blank">
                    <Button
                      size="xs"
                      variant="outline"
                      intent="secondary"
                      color="blue"
                      iconName="external-link"
                      iconPosition="right"
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
  )
}
