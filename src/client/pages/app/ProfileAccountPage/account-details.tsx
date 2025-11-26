import { sentenceCase } from 'change-case'

import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { useGetUser } from 'client/api'
import { Loader, Table, Text, Flex, Link, Button, Box, Spacer } from 'lib/components'

export default () => {
  const user = useGetUser()
  const navigateTo = useNavigateTo()

  return (
    <Table layout="fixed" intent="neutral" color="blue">
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell>
            <Flex alignItems="center" columnGap={20}>
              <Text typography="h6" iconName="arrow-right">
                Details
              </Text>
              <Loader active={user.isMakingRequest} color="blue" size="sm" />
            </Flex>
            <Spacer blockSize={8} />
          </Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body intent="tertiary">
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Email</Text>
          </Table.Cell>
          <Table.Cell colSpan={2}>
            <Text bold>{user.data?.data.email}</Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Registration date</Text>
          </Table.Cell>
          <Table.Cell colSpan={2}>
            <Text bold>{user.data ? new Date(user.data.data.createdAt).toDateString() : ''}</Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Pricing plan</Text>
          </Table.Cell>
          <Table.Cell colSpan={2}>
            <Box blockSize={30}>
              <Flex gap={15} alignItems="flex-end">
                <Text bold>{user.data ? sentenceCase(user.data.data.plan) : ''}</Text>
                {!user.isMakingRequest ? (
                  <Link
                    href={`/${PageKey.pricing}`}
                    onClick={() => {
                      navigateTo(`/${PageKey.pricing}`)
                    }}
                  >
                    <Button size="xs" variant="outline" intent="secondary" color="blue">
                      {user.data?.data.plan === 'free' ? 'Upgrade' : 'Details'}
                    </Button>
                  </Link>
                ) : null}
              </Flex>
            </Box>
          </Table.Cell>
        </Table.Row>
        {user.data?.data.licenseKey ? (
          <Table.Row>
            <Table.Cell colSpan={1}>
              <Text>License key</Text>
            </Table.Cell>
            <Table.Cell colSpan={2}>
              <Text bold>{user.data.data.licenseKey}</Text>
            </Table.Cell>
          </Table.Row>
        ) : null}
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={3}>
            <Text typography="secondary" color="gray">
              For actions not available here such as updating an email address or deleting an account please
              get in touch via email.
            </Text>
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}
