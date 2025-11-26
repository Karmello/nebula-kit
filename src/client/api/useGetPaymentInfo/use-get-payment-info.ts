import { useMakeApiRequest } from 'client/hooks'
import { ApiPaymentInfo } from 'client/definitions'
import { useAppStore } from 'client/store'

export const useGetPaymentInfo = (enabled: boolean) => {
  const { token } = useAppStore()

  const { data, isMakingRequest, isError } = useMakeApiRequest<{ data: ApiPaymentInfo }>({
    path: '/payment/info',
    enabled: !!token && !!enabled,
  })

  return {
    data,
    isMakingRequest,
    isError,
  }
}
