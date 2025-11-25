import { makeApiRequest } from 'client/services'

export const cancelPaidPlan = () => {
  const { data, isMakingRequest, isError, sendRequest } = makeApiRequest({
    path: '/payment/cancel',
    method: 'POST',
    enabled: false,
  })

  return {
    data,
    isMakingRequest,
    isError,
    sendRequest,
  }
}
