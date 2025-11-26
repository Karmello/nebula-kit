import { useMakeApiRequest } from 'client/hooks'

export const useLoginUser = () => {
  const { data, isMakingRequest, isError, sendRequest } = useMakeApiRequest({
    path: '/auth/login',
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
