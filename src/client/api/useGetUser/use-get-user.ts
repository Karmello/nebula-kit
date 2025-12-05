import { useEffect } from 'react'

import { useMakeApiRequest } from 'client/hooks'
import { ApiUser } from 'client/definitions'
import { useAppStore } from 'client/store'

export type UseGetUserSuccess = { user: ApiUser }
export type UseGetUserError = { message: string }

export const useGetUser = (disableAutoLogout = false, minLoadingTime?: number) => {
  const { setUser } = useAppStore()

  const { code, data, error, isMakingRequest, sendRequest } = useMakeApiRequest<
    UseGetUserSuccess,
    UseGetUserError
  >({
    path: '/auth/me',
    disableAutoLogout,
    minLoadingTime,
  })

  useEffect(() => {
    if (code === 200) {
      setUser(data.user)
    }
  }, [code])

  return {
    code,
    data,
    error,
    isMakingRequest,
    sendRequest,
  }
}
