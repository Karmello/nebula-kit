import { useEffect } from 'react'

import { useAppStore } from 'client/store'
import { Box } from 'lib/components'

export const DashboardPage = () => {
  const { token } = useAppStore()

  const fetchUser = async () => {
    const res = await fetch(process.env.API_URL + '/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (res.ok) {
      const body = await res.json()
      console.log(body)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return <Box padding={{ base: 20, lg: 50 }}>DashboardPage</Box>
}
