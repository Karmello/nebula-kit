import { useEffect, useLayoutEffect, useState } from 'react'

import { useAppStore } from 'client/store'
import { User } from 'client/definitions'
import { useSnackbar } from 'lib/components'

export const fetchUser = ({ doMakeRequest, minLoadingTime } = { doMakeRequest: true, minLoadingTime: 0 }) => {
  const [user, setUser] = useState<User>(null)
  const [isFetching, setIsFetching] = useState<boolean>(doMakeRequest)

  const { token, setToken, setPlan } = useAppStore()
  const { show } = useSnackbar()

  const makeRequest = async () => {
    setIsFetching(true)
    const start = Date.now()

    const res = await fetch(process.env.API_URL + '/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (minLoadingTime) {
      const remaining = minLoadingTime - (Date.now() - start)
      if (remaining > 0) {
        await new Promise(resolve => setTimeout(resolve, remaining))
      }
    }

    if (res.ok) {
      const body = await res.json()
      setUser(body.user)
      setPlan(body.user.plan)
      setIsFetching(false)
    } else {
      setUser(null)
      setPlan('')
      setIsFetching(false)
      setToken('')
      show({ status: 'info', content: "You've been logged out." })
    }
  }

  useLayoutEffect(() => {
    if (doMakeRequest && token) {
      makeRequest()
    }
  }, [doMakeRequest, token])

  return { user, isFetching }
}
