import { useEffect } from 'react'

import { ApiUser } from 'client/definitions'
import { useMakeApiRequest } from 'client/hooks'
import { useAppStore } from 'client/store'

export type UseGetUserSuccess = { user: ApiUser }
export type UseGetUserError = { message: string }

export const useGetUser = (disableAutoLogout = false, minLoadingTime?: number) => {
  const setUser = useAppStore(state => state.setUser)

  const { code, data, error, isMakingRequest, sendRequest } = useMakeApiRequest<UseGetUserSuccess, UseGetUserError>({
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
