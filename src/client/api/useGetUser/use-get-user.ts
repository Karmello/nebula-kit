import { useEffect } from 'react'

import { useMakeApiRequest } from 'client/hooks'
import { ApiUser } from 'client/definitions'
import { useAppStore } from 'client/store'
import { useSnackbar } from 'lib/components'

export const useGetUser = (enabled?: boolean, minLoadingTime?: number) => {
  const { token, setToken, setPlan } = useAppStore()
  const { show } = useSnackbar()

  const { data, isMakingRequest, isError, sendRequest } = useMakeApiRequest<{ data: ApiUser }>({
    path: '/auth/me',
    enabled: enabled !== undefined ? enabled : !!token,
    minLoadingTime,
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
    sendRequest,
  }
}
