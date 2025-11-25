import { makeApiRequest } from 'client/services'

export const registerUser = () => {
  const { data, isMakingRequest, isError, sendRequest } = makeApiRequest({
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
