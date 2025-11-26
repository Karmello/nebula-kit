import { useEffect } from 'react'

import { useMakeApiRequest } from 'client/hooks'

export const useCheckoutPaidPlan = () => {
  const { data, isMakingRequest, isError, sendRequest } = useMakeApiRequest<{ url: string }>({
    path: '/payment/checkout',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    enabled: false,
  })

  useEffect(() => {
    if (data && !isError) {
      window.location.href = data.url
    }
  }, [data])

  return {
    data,
    isMakingRequest,
    isError,
    sendRequest,
  }
}
