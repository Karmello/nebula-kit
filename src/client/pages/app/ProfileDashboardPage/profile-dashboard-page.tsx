import { useEffect, useState } from 'react'

import { useAppStore } from 'client/store'
import { useNavigateTo } from 'client/services'
import { PageKey } from 'client/definitions'
import { Box, Button, Flex, Link, Section, Table, Text, useSnackbar } from 'lib/components'

export const ProfileDashboardPage = () => {
  const [userData, setUserData] = useState<{
    _id: string
    email: string
    plan: string
    licenseKey: string
    verified: true
    createdAt: string
  }>(null)

  const navigateTo = useNavigateTo()
  const { show } = useSnackbar()
  const { token, setToken } = useAppStore()

  const fetchUser = async () => {
    const res = await fetch(process.env.API_URL + '/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (res.ok) {
      const body = await res.json()
      setUserData(body.user)
    } else {
      setToken('')
      show({ status: 'info', content: "You've been logged out." })
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <Box padding={{ base: 20, lg: 50 }}>
      <Section heading="Dashboard" iconName="circle-user">
        {userData ? (
          <Box maxInlineSize={{ base: '100%', md: '400px' }}>
            <Table intent="muted">
              <Table.Body>
                <Table.Row>
                  <Table.Cell textAlign="start">
                    <Text underline>Email</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text bold>{userData.email}</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="start">
                    <Text underline>Registration date</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text bold>{new Date(userData.createdAt).toDateString()}</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="start">
                    <Text underline>Pricing plan</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Flex gap={15} alignItems="center">
                      <Text bold>{userData.plan}</Text>
                      <Link href={`/${PageKey.pricing}`} onClick={() => navigateTo(`/${PageKey.pricing}`)}>
                        <Button size="xs" intent="primary" color="blue">
                          {userData.plan === 'free' ? 'Upgrade' : 'Change'}
                        </Button>
                      </Link>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell textAlign="start">
                    <Text underline>License key</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text bold>{userData.licenseKey || '-'}</Text>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Box>
        ) : null}
      </Section>
    </Box>
  )
}
