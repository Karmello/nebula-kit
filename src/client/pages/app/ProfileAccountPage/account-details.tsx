import { sentenceCase } from 'change-case'

import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { useGetUser } from 'client/api'
import { Loader, Table, Text, Flex, Link, Button } from 'lib/components'

export default () => {
  const getUser = useGetUser()
  const navigateTo = useNavigateTo()

  const handleCopy = async () => {
    await navigator.clipboard.writeText(getUser.data.user.licenseKey)
  }

  return (
    <Table layout="fixed" intent="neutral" color="blue">
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell blockSize={60}>
            <Flex alignItems="center" columnGap={20}>
              <Text typography="h6" iconName="arrow-right">
                Details
              </Text>
              <Loader active={getUser.isMakingRequest} color="blue" size="sm" />
            </Flex>
          </Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body intent="tertiary" paddingBlock={10} paddingInline={15}>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Email</Text>
          </Table.Cell>
          <Table.Cell colSpan={2} blockSize={50}>
            <Text bold>{getUser.data?.user.email}</Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Registration date</Text>
          </Table.Cell>
          <Table.Cell colSpan={2} blockSize={50}>
            <Text bold>{getUser.data ? new Date(getUser.data.user.createdAt).toDateString() : ''}</Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Pricing plan</Text>
          </Table.Cell>
          <Table.Cell colSpan={2} blockSize={50}>
            <Flex gap={15} alignItems="flex-end">
              <Text bold>{getUser.data ? sentenceCase(getUser.data.user.plan) : ''}</Text>
              {!getUser.isMakingRequest ? (
                <Link
                  href={`/${PageKey.pricing}`}
                  onClick={() => {
                    navigateTo(`/${PageKey.pricing}`)
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
          <Table.Cell colSpan={2} blockSize={50}>
            {getUser.data ? (
              <Flex alignItems="center" gap={10}>
                <Text tagAttrs={{ style: { wordBreak: 'break-all' } }} bold>
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
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={3} blockSize={40}>
            <Text typography="caption" intent="secondary" color="gray">
              For actions not available here such as updating an email address or deleting an account please
              get in touch via email.
            </Text>
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}
