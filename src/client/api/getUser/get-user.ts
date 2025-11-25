import { useEffect } from 'react'

import { makeApiRequest } from 'client/services'
import { ApiUser } from 'client/definitions'
import { useAppStore } from 'client/store'
import { useSnackbar } from 'lib/components'

export const getUser = () => {
  const { token, setToken, setPlan } = useAppStore()
  const { show } = useSnackbar()

  const { data, isMakingRequest, isError } = makeApiRequest<{ data: ApiUser }>({
    path: '/auth/me',
    enabled: !!token,
  })

  useEffect(() => {
    if (data) {
      setPlan(data.data.plan)
    }
  }, [data])

  useEffect(() => {
    if (isError) {
      setToken('')
      setPlan('')
      show({ status: 'info', content: "You've been logged out." })
    }
  }, [isError])

  return {
    data,
    isMakingRequest,
  }
}
