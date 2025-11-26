import { useMakeApiRequest } from 'client/hooks'
import { useAppStore } from 'client/store'

export const useGetPaymentDetailsUrl = (enabled: boolean) => {
  const { token } = useAppStore()

  const { data, isMakingRequest, isError } = useMakeApiRequest<{ url: string }>({
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
