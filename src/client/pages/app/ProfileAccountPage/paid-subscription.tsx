import { useState } from 'react'

import { getPaymentDetailsUrl, getPaymentInfo } from 'client/api'
import { Button, Flex, Loader, Spacer, Table, Text } from 'lib/components'

export default ({ enabled }: { enabled: boolean }) => {
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false)

  const paymentInfo = getPaymentInfo(enabled)
  const paymentDetailsUrl = getPaymentDetailsUrl(enabled)

  if (!enabled) return null

  return (
    <Table layout="fixed" intent="neutral" color="blue">
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell>
            <Flex alignItems="center" columnGap={20}>
              <Text typography="h6" iconName="arrow-right">
                Subscription
              </Text>
              <Loader active={paymentInfo.isMakingRequest} color="blue" size="sm" />
            </Flex>
            <Spacer blockSize={8} />
          </Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body intent="tertiary">
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Status</Text>
          </Table.Cell>
          <Table.Cell colSpan={2}>
            <Text bold>{paymentInfo.data?.data.status}</Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Last payment</Text>
          </Table.Cell>
          <Table.Cell colSpan={2}>
            <Text bold>
              {paymentInfo.data?.data.lastPayment
                ? new Date(paymentInfo.data.data.lastPayment).toUTCString()
                : ''}
            </Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Amount</Text>
          </Table.Cell>
          <Table.Cell colSpan={2}>
            <Text bold>{paymentInfo.data?.data.amount}</Text>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={1}>
            <Text>Renews every</Text>
          </Table.Cell>
          <Table.Cell colSpan={2}>
            <Text bold>{paymentInfo.data?.data.interval}</Text>
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
                  window.location.href = paymentDetailsUrl.data.url
                },
              }}
              size="sm"
              intent="primary"
              variant="ghost"
              color="blue"
              loading={isRedirecting || !paymentDetailsUrl.data || paymentDetailsUrl.isMakingRequest}
              disabled={paymentDetailsUrl.isError}
            >
              View more details on Stripe
            </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}
