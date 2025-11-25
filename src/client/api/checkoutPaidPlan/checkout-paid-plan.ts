import { useEffect } from 'react'

import { makeApiRequest } from 'client/services'

export const checkoutPaidPlan = () => {
  const { data, isMakingRequest, isError, sendRequest } = makeApiRequest<{ url: string }>({
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
