import { useEffect, useState } from 'react'

import { useAppStore } from 'client/store'
import { Box, Section, Text } from 'lib/components'

export const ProfileOverviewPage = () => {
  const [userData, setUserData] = useState<{
    _id: string
    email: string
    verified: true
    createdAt: string
  }>(null)

  const { token } = useAppStore()

  const fetchUser = async () => {
    const res = await fetch(process.env.API_URL + '/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (res.ok) {
      const body = await res.json()
      setUserData(body.user)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <Box padding={{ base: 20, lg: 50 }}>
      <Section heading="Overview" iconName="user">
        {userData ? (
          <>
            <Text iconName="check" iconPosition="right">
              {userData.email}
            </Text>
            <Text>{`Registed on: ${new Date(userData.createdAt).toDateString()}`}</Text>
          </>
        ) : null}
      </Section>
    </Box>
  )
}
