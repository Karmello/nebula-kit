import { useMakeApiRequest } from 'client/hooks'

export const useRegisterUser = () => {
  const { data, isMakingRequest, isError, sendRequest } = useMakeApiRequest({
    path: '/auth/register',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    enabled: false,
  })

  return {
    data,
    isMakingRequest,
    isError,
    sendRequest,
  }
}
