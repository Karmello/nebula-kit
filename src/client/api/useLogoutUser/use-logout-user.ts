import { useEffect } from 'react'

import { useMakeApiRequest } from 'client/hooks'
import { useAppStore } from 'client/store'

export const useLogoutUser = () => {
  const { code, data, error, isMakingRequest, sendRequest } = useMakeApiRequest({
    path: '/auth/logout',
    method: 'POST',
  })

  const { setUser } = useAppStore()

  useEffect(() => {
    if (code === 200) {
      setUser(null)
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
