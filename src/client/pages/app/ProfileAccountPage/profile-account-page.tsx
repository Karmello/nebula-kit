import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { sentenceCase } from 'change-case'

import { fetchUser } from 'client/api'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/services'
import { useAppStore } from 'client/store'
import { Box, Button, Flex, Link, Loader, Section, Spacer, Table, Text, useSnackbar } from 'lib/components'

export const ProfileAccountPage = () => {
  const { search } = useLocation()
  const { show } = useSnackbar()
  const navigateTo = useNavigateTo()
  const { token } = useAppStore()
  const { user, isFetching } = fetchUser({ doMakeRequest: !!token, minLoadingTime: 250 })

  useEffect(() => {
    const params = new URLSearchParams(search)
    if (params.get('checkout') === 'success') {
      show({ status: 'success', content: 'All done ! You are on a new subscription plan.' })
    }
  }, [search])

  return (
    <Box padding={{ base: 20, lg: 50 }} maxInlineSize="85rem">
      <Section heading="Account" iconName="circle-user">
        {isFetching ? (
          <Box position="relative" blockSize={160}>
            <Loader centered size="lg" color="blue" />
          </Box>
        ) : token ? (
          <>
            <Spacer blockSize={25} />
            <Section size="sm" variant="soft-outline" heading="Details">
              <Table intent="neutral" inlineSize="700px">
                <Table.Body>
                  <Table.Row>
                    <Table.Cell textAlign="start">
                      <Text>Email</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text bold intent="primary" color="blue">
                        {user?.email || '...'}
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign="start">
                      <Text>Registration date</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Text bold intent="primary" color="blue">
                        {user ? new Date(user.createdAt).toDateString() : '...'}
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign="start">
                      <Text>Pricing plan</Text>
                    </Table.Cell>
                    <Table.Cell>
                      <Flex gap={15} alignItems="center">
                        <Text bold intent="primary" color="blue">
                          {user ? sentenceCase(user.plan) : '...'}
                        </Text>
                        {user && user.plan && user.plan !== 'free' ? (
                          <Link
                            href={`/${PageKey.pricing}`}
                            onClick={() => {
                              navigateTo(`/${PageKey.pricing}`)
                            }}
                          >
                            <Button size="xs" variant="outline" intent="primary" color="blue">
                              Details
                            </Button>
                          </Link>
                        ) : null}
                      </Flex>
                    </Table.Cell>
                  </Table.Row>
                  {user?.licenseKey ? (
                    <Table.Row>
                      <Table.Cell textAlign="start">
                        <Text underline>License key</Text>
                      </Table.Cell>
                      <Table.Cell>
                        <Text bold>{user.licenseKey}</Text>
                      </Table.Cell>
                    </Table.Row>
                  ) : null}
                </Table.Body>
              </Table>
            </Section>
            <Spacer blockSize={50} />
            <Section size="sm" variant="soft-outline" heading="Payment">
              ...
            </Section>
          </>
        ) : null}
      </Section>
    </Box>
  )
}
