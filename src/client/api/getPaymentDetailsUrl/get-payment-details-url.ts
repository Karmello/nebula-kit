import { makeApiRequest } from 'client/services'
import { useAppStore } from 'client/store'

export const getPaymentDetailsUrl = (enabled: boolean) => {
  const { token } = useAppStore()

  const { data, isMakingRequest, isError } = makeApiRequest<{ url: string }>({
    path: '/payment/details-url',
    method: 'POST',
    enabled: !!token && !!enabled,
  })

  return {
    data,
    isMakingRequest,
    isError,
  }
}
