import { makeApiRequest } from 'client/services'

export const loginUser = () => {
  const { data, isMakingRequest, isError, sendRequest } = makeApiRequest({
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
