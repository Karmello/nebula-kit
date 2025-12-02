import { useEffect } from 'react'

import { useMakeApiRequest } from 'client/hooks'
import { ApiUser } from 'client/definitions'
import { useAppStore } from 'client/store'

export type UseGetUserSuccess = { user: ApiUser }
export type UseGetUserError = { message: string }

export const useGetUser = (enabled?: boolean, minLoadingTime?: number) => {
  const { token, setUser } = useAppStore()

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

  return {
    data,
    error,
    isMakingRequest,
    sendRequest,
  }
}
