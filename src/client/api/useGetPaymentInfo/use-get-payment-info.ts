import { ApiSubscription } from 'client/definitions'
import { useMakeApiRequest } from 'client/hooks'

export type UseGetPaymentInfoSuccess = { subscription: ApiSubscription }
export type UseGetPaymentInfoError = { message: string }

export const useGetPaymentInfo = () => {
  return useMakeApiRequest<UseGetPaymentInfoSuccess, UseGetPaymentInfoError>({
    path: '/payment/info',
  })
}
