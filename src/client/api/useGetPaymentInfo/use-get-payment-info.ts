import { useMakeApiRequest } from 'client/hooks'
import { ApiSubscription } from 'client/definitions'

export type UseGetPaymentInfoSuccess = { subscription: ApiSubscription }
export type UseGetPaymentInfoError = { message: string }

export const useGetPaymentInfo = () => {
  return useMakeApiRequest<UseGetPaymentInfoSuccess, UseGetPaymentInfoError>({
    path: '/payment/info',
  })
}
