import { useEffect } from 'react'

import { useMakeApiRequest } from 'client/hooks'

export type UseCheckoutPaidPlanSuccess = { url: string }
export type UseCheckoutPaidPlanError = { message: string }

export const useCheckoutPaidPlan = () => {
  const { data, error, isMakingRequest, sendRequest } = useMakeApiRequest<
    UseCheckoutPaidPlanSuccess,
    UseCheckoutPaidPlanError
  >({
    path: '/payment/checkout',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })

  useEffect(() => {
    if (data) {
      window.location.href = data.url
    }
  }, [data])

  return {
    data,
    error,
    isMakingRequest,
    sendRequest,
  }
}
