import { useMakeApiRequest } from 'client/hooks'

export const useCancelPaidPlan = () => {
  const { data, isMakingRequest, isError, sendRequest } = useMakeApiRequest({
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
