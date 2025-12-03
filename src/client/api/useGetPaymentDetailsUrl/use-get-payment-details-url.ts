import { useMakeApiRequest } from 'client/hooks'
import { useAppStore } from 'client/store'

export type UseGetPaymentDetailsUrlSuccess = { url: string }
export type UseGetPaymentDetailsUrlError = { message: string }

export const useGetPaymentDetailsUrl = (enabled: boolean) => {
  const { user } = useAppStore()

  return useMakeApiRequest<UseGetPaymentDetailsUrlSuccess, UseGetPaymentDetailsUrlError>({
    path: '/payment/details-url',
    method: 'POST',
    enabled: !!user && !!enabled,
  })
}
