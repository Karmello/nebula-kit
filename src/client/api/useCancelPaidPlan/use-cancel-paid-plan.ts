import { useMakeApiRequest } from 'client/hooks'

export const useCancelPaidPlan = () => {
  const { data, isMakingRequest, isError, sendRequest } = useMakeApiRequest({
    path: '/payment/cancel',
    method: 'POST',
    enabled: false,
    minLoadingTime: 5000,
  })

  return {
    data,
    isMakingRequest,
    isError,
    sendRequest,
  }
}
