import { useLayoutEffect } from 'react'

import {
  Box,
  Button,
  Callout,
  Link,
  Loader,
  NEB_LENGTH,
  Section,
  Spacer,
  Table,
  Text,
} from 'lib/components'
import { useGetPaymentDetailsUrl, useGetPaymentInfo } from 'client/api'
import { useAppStore } from 'client/store'

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
    <Section heading="Subscription" size="sm" intent="primary" color="blue">
      <Spacer blockSize={NEB_LENGTH.px_008} />
      {!getPaymentInfo.isMakingRequest ? (
        <>
          <Table layout="fixed" intent="neutral">
            <Table.Body
              intent="muted"
              paddingBlock={NEB_LENGTH.px_012}
              paddingInline={NEB_LENGTH.px_012}
            >
              <Table.Row>
                <Table.Cell colSpan={1}>
                  <Text lineHeight={1.2}>Renews every</Text>
                </Table.Cell>
                <Table.Cell colSpan={2}>
                  <Text lineHeight={1.2} wordBreak="break-all">
                    {getPaymentInfo.data?.subscription.interval}
                  </Text>
                </Table.Cell>
              </Table.Row>
              {getPaymentInfo.data?.subscription.status &&
              getPaymentInfo.data?.subscription.status !== 'PAST_DUE' ? (
                <Table.Row>
                  <Table.Cell colSpan={1}>
                    <Text lineHeight={1.2}>Amount</Text>
                  </Table.Cell>
                  <Table.Cell colSpan={2}>
                    <Text lineHeight={1.2} wordBreak="break-all">
                      {getPaymentInfo.data?.subscription.amount}
                    </Text>
                  </Table.Cell>
                </Table.Row>
              ) : null}
              {getPaymentInfo.data?.subscription.status &&
              getPaymentInfo.data?.subscription.status !== 'PAST_DUE' ? (
                <Table.Row>
                  <Table.Cell colSpan={1}>
                    <Text lineHeight={1.2}>Last payment</Text>
                  </Table.Cell>
                  <Table.Cell colSpan={2}>
                    <Text lineHeight={1.2} wordBreak="break-all">
                      {getPaymentInfo.data?.subscription.lastPayment
                        ? new Date(getPaymentInfo.data.subscription.lastPayment).toUTCString()
                        : ''}
                    </Text>
                  </Table.Cell>
                </Table.Row>
              ) : null}
              <Table.Row>
                <Table.Cell colSpan={1}>
                  <Text lineHeight={1.2}>Status</Text>
                </Table.Cell>
                <Table.Cell colSpan={2}>
                  <Text lineHeight={1.2} wordBreak="break-all" bold>
                    {getPaymentInfo.data?.subscription.status}
                  </Text>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Spacer blockSize={NEB_LENGTH.px_016} />
          <Link href={getPaymentDetailsUrl.data?.url} target="_blank">
            <Button
              scale="xs"
              intent="primary"
              color="blue"
              disabled={!!getPaymentDetailsUrl.error}
              iconName="external-link"
              iconPlacement="right"
            >
              View details on Stripe
            </Button>
          </Link>
          {getPaymentInfo.data?.subscription.status === 'PAST_DUE' ? (
            <>
              <Spacer blockSize={NEB_LENGTH.px_048} />
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
      ) : (
        <Box position="relative" blockSize={NEB_LENGTH.px_064} drawable bg="filled" intent="muted">
          <Loader centered active color="blue" size={NEB_LENGTH.px_024} />
        </Box>
      )}
    </Section>
  )
}
