import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { sentenceCase } from 'change-case'

import { getPaymentInfo, getUser, getPaymentDetailsUrl } from 'client/api'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/services'
import { Box, Button, Flex, Link, Loader, Section, Spacer, Table, Text, useSnackbar } from 'lib/components'

export const ProfileAccountPage = () => {
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false)

  const { search } = useLocation()
  const { show } = useSnackbar()
  const navigateTo = useNavigateTo()

  const user = getUser()

  const {
    data: paymentInfoData,
    isMakingRequest: isFetchingPaymentInfo,
    isError: isPaymentInfoError,
  } = getPaymentInfo(user.data && user.data.data.plan !== 'free')

  const paymentDetailsUrl = getPaymentDetailsUrl(user.data && user.data.data.plan !== 'free')

  useEffect(() => {
    const params = new URLSearchParams(search)
    if (params.get('checkout') === 'success') {
      show({ status: 'success', content: 'All done ! You are on a new subscription plan.' })
      window.history.replaceState({}, '', `/${PageKey.profileAccount}`)
    }
  }, [search])

  return (
    <Box padding={{ base: 20, lg: 50 }} maxInlineSize="85rem">
      <Section heading="Account" iconName="circle-user">
        <Spacer blockSize={25} />
        <Section size="sm" variant="soft-outline" heading="Details">
          {!user || user.isMakingRequest ? (
            <Box blockSize="100px" position="relative">
              <Loader size="lg" color="blue" centered />
            </Box>
          ) : (
            <>
              <Table intent="neutral" inlineSize="700px">
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Text>Email</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text bold intent="primary" color="blue">
                        {user.data?.data.email || '...'}
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Text>Registration date</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text bold intent="primary" color="blue">
                        {new Date(user.data?.data.createdAt).toDateString()}
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Text>Pricing plan</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Flex gap={15} alignItems="center">
                        <Text bold intent="primary" color="blue">
                          {user.data ? sentenceCase(user.data.data.plan) : '-'}
                        </Text>
                        <Link
                          href={`/${PageKey.pricing}`}
                          onClick={() => {
                            navigateTo(`/${PageKey.pricing}`)
                          }}
                        >
                          <Button size="xs" variant="outline" intent="primary" color="blue">
                            {user.data?.data.plan === 'free' ? 'Upgrade' : 'Details'}
                          </Button>
                        </Link>
                      </Flex>
                    </Table.Cell>
                  </Table.Row>
                  {user.data?.data.licenseKey ? (
                    <Table.Row>
                      <Table.Cell textAlign="start">
                        <Text underline>License key</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text bold>{user.data.data.licenseKey}</Text>
                      </Table.Cell>
                    </Table.Row>
                  ) : null}
                </Table.Body>
              </Table>
              <Spacer />
              <Text typography="secondary">
                For actions not available here such as updating an email address or deleting an account please
                get in touch via email.
              </Text>
            </>
          )}
        </Section>
        <Spacer blockSize={50} />
        {user.data && user.data.data.plan !== 'free' ? (
          <Section size="sm" variant="soft-outline" heading="Paid subscription">
            {(!paymentInfoData || isFetchingPaymentInfo) && !isPaymentInfoError ? (
              <Box blockSize="100px" position="relative">
                <Loader size="lg" color="blue" centered />
              </Box>
            ) : isPaymentInfoError ? (
              <Text intent="primary" color="red">
                Something went wrong.
              </Text>
            ) : (
              <>
                <Table intent="neutral" inlineSize="700px">
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Text>Status</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text bold intent="primary" color="blue">
                          {paymentInfoData.data.status}
                        </Text>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Text>Last payment</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text bold intent="primary" color="blue">
                          {paymentInfoData.data.lastPayment
                            ? new Date(paymentInfoData.data.lastPayment).toUTCString()
                            : '-'}
                        </Text>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Text>Amount</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text bold intent="primary" color="blue">
                          {paymentInfoData.data.amount}
                        </Text>
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Text>Renews every</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text bold intent="primary" color="blue">
                          {paymentInfoData.data.interval}
                        </Text>
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
                <Spacer blockSize={30} />
                <Flex justifyContent="center">
                  <Button
                    tagAttrs={{
                      onClick: async () => {
                        setIsRedirecting(true)
                        window.location.href = paymentDetailsUrl.data.url
                      },
                    }}
                    size="sm"
                    intent="primary"
                    color="blue"
                    loading={isRedirecting || paymentDetailsUrl.isMakingRequest}
                    disabled={paymentDetailsUrl.isError}
                  >
                    View details on Stripe
                  </Button>
                </Flex>
                <Spacer blockSize={20} />
              </>
            )}
          </Section>
        ) : null}
      </Section>
    </Box>
  )
}
