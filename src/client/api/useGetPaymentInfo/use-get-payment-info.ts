import { useMakeApiRequest } from 'client/hooks'
import { ApiSubscription } from 'client/definitions'
import { useAppStore } from 'client/store'

export type UseGetPaymentInfoSuccess = { subscription: ApiSubscription }
export type UseGetPaymentInfoError = { message: string }

export const useGetPaymentInfo = (enabled: boolean) => {
  const { token } = useAppStore()

  return useMakeApiRequest<UseGetPaymentInfoSuccess, UseGetPaymentInfoError>({
    path: '/payment/info',
    enabled: !!token && !!enabled,
  })
}
