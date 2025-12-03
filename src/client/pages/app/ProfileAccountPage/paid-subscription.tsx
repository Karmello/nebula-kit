import { useLayoutEffect, useState } from 'react'

import { useGetPaymentDetailsUrl, useGetPaymentInfo } from 'client/api'
import { useAppStore } from 'client/store'
import { Button, Flex, Loader, Table, Text } from 'lib/components'

export default ({ enabled }: { enabled: boolean }) => {
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false)

  const { user } = useAppStore()

  const getPaymentInfo = useGetPaymentInfo()
  const getPaymentDetailsUrl = useGetPaymentDetailsUrl()

  useLayoutEffect(() => {
    if (user && user.plan !== 'free') {
      getPaymentInfo.sendRequest()
      getPaymentDetailsUrl.sendRequest()
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <Table layout="fixed" intent="neutral" color="blue">
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell blockSize={60}>
            <Flex alignItems="center" columnGap={20}>
              <Text typography="h6" iconName="arrow-right">
                Subscription
              </Text>
              <Loader active={getPaymentInfo.isMakingRequest} color="blue" size="sm" />
            </Flex>
          </Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body intent="tertiary" paddingBlock={10} paddingInline={15}>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Status</Text>
          </Table.Cell>
          <Table.Cell colSpan={2} blockSize={50}>
            <Text bold>{getPaymentInfo.data?.subscription.status}</Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Last payment</Text>
          </Table.Cell>
          <Table.Cell colSpan={2} blockSize={50}>
            <Text bold>
              {getPaymentInfo.data?.subscription.lastPayment
                ? new Date(getPaymentInfo.data.subscription.lastPayment).toUTCString()
                : ''}
            </Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Amount</Text>
          </Table.Cell>
          <Table.Cell colSpan={2} blockSize={50}>
            <Text bold>{getPaymentInfo.data?.subscription.amount}</Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Renews every</Text>
          </Table.Cell>
          <Table.Cell colSpan={2} blockSize={50}>
            <Text bold>{getPaymentInfo.data?.subscription.interval}</Text>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.Cell colSpan={3} textAlign={{ base: 'center', md: 'start' }}>
            <Button
              tagAttrs={{
                onClick: async () => {
                  setIsRedirecting(true)
                  window.location.href = getPaymentDetailsUrl.data.url
                },
              }}
              size="sm"
              intent="primary"
              variant="ghost"
              color="blue"
              loading={isRedirecting || !getPaymentDetailsUrl.data || getPaymentDetailsUrl.isMakingRequest}
              disabled={!!getPaymentDetailsUrl.error}
            >
              View more details on Stripe
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}
