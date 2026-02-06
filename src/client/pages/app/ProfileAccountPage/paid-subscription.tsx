import { useLayoutEffect } from 'react'

import { useGetPaymentDetailsUrl, useGetPaymentInfo } from 'client/api'
import { useAppStore } from 'client/store'
import { Button, Callout, Flex, Loader, Spacer, Table, Text } from 'lib/components'

export default ({ enabled }: { enabled: boolean }) => {
  const user = useAppStore(state => state.user)

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
    <>
      <Table layout="fixed" intent="neutral" color="blue">
        <Table.Header paddingInline="0px">
          <Table.HeaderRow>
            <Table.HeaderCell colSpan={3} blockSize="50px">
              <Flex alignItems="center" columnGap="20px">
                <Text typography="h6" iconName="arrow-right">
                  Subscription
                </Text>
                <Loader active={getPaymentInfo.isMakingRequest} color="blue" size="sm" />
              </Flex>
            </Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
        <Table.Body
          intent={getPaymentInfo.isMakingRequest ? 'muted' : 'tertiary'}
          paddingBlock="10px"
          paddingInline="15px"
        >
          <Table.Row>
            <Table.Cell colSpan={1}>
              <Text>Renews every</Text>
            </Table.Cell>
            <Table.Cell colSpan={2} blockSize="60px">
              <Text bold>{getPaymentInfo.data?.subscription.interval}</Text>
            </Table.Cell>
          </Table.Row>
          {getPaymentInfo.data?.subscription.status &&
          getPaymentInfo.data?.subscription.status !== 'PAST_DUE' ? (
            <Table.Row>
              <Table.Cell colSpan={1}>
                <Text>Amount</Text>
              </Table.Cell>
              <Table.Cell colSpan={2} blockSize="60px">
                <Text bold>{getPaymentInfo.data?.subscription.amount}</Text>
              </Table.Cell>
            </Table.Row>
          ) : null}
          {getPaymentInfo.data?.subscription.status &&
          getPaymentInfo.data?.subscription.status !== 'PAST_DUE' ? (
            <Table.Row>
              <Table.Cell colSpan={1}>
                <Text>Last payment</Text>
              </Table.Cell>
              <Table.Cell colSpan={2} blockSize="60px">
                <Text bold>
                  {getPaymentInfo.data?.subscription.lastPayment
                    ? new Date(getPaymentInfo.data.subscription.lastPayment).toUTCString()
                    : ''}
                </Text>
              </Table.Cell>
            </Table.Row>
          ) : null}
          <Table.Row>
            <Table.Cell colSpan={1}>
              <Text>Status</Text>
            </Table.Cell>
            <Table.Cell colSpan={2} blockSize="60px">
              <Text bold>{getPaymentInfo.data?.subscription.status}</Text>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={3} textAlign={{ base: 'center', md: 'start' }}>
              <Button
                tagAttrs={{
                  onClick: async () => {
                    window.location.href = getPaymentDetailsUrl.data.url
                  },
                }}
                size="sm"
                intent="primary"
                variant="ghost"
                color="blue"
                disabled={!!getPaymentDetailsUrl.error}
              >
                View more details on Stripe
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
      {getPaymentInfo.data?.subscription.status === 'PAST_DUE' ? (
        <>
          <Spacer blockSize="50px" />
          <Callout
            size="sm"
            status="error"
            heading="Payment issue"
            content="Your subscription renewal failed. Please update your
              payment method to avoid any interruption."
          />
        </>
      ) : null}
    </>
  )
}
