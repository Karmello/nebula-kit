import { useEffect } from 'react'

import { useMakeApiRequest } from 'client/hooks'
import { ApiUser } from 'client/definitions'
import { useAppStore } from 'client/store'
import { useSnackbar } from 'lib/components'

export type UseGetUserSuccess = { user: ApiUser }
export type UseGetUserError = { message: string }

export const useGetUser = (enabled?: boolean, minLoadingTime?: number) => {
  const { token, setToken, setUser } = useAppStore()
  const { show } = useSnackbar()

  const { data, error, isMakingRequest, sendRequest } = useMakeApiRequest<UseGetUserSuccess, UseGetUserError>(
    {
      path: '/auth/me',
      enabled: enabled !== undefined ? enabled : !!token,
      minLoadingTime,
    }
  )

  useEffect(() => {
    if (data) {
      setUser(data.user)
    }
  }, [data])

  useEffect(() => {
    if (error) {
      setUser(null)
      setToken('')
      show({ status: 'info', content: "You've been logged out." })
    }
  }, [error])

  return {
    data,
    error,
    isMakingRequest,
    sendRequest,
  }
}
