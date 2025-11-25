import { makeApiRequest } from 'client/services'
import { ApiPaymentInfo } from 'client/definitions'
import { useAppStore } from 'client/store'

export const getPaymentInfo = (enabled: boolean) => {
  const { token } = useAppStore()

  const { data, isMakingRequest, isError } = makeApiRequest<{ data: ApiPaymentInfo }>({
    path: '/payment/info',
    enabled: !!token && !!enabled,
  })

  return {
    data,
    isMakingRequest,
    isError,
  }
}
