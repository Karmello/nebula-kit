import { useMakeApiRequest } from 'client/hooks'

export type UseGetPaymentDetailsUrlSuccess = { url: string }
export type UseGetPaymentDetailsUrlError = { message: string }

export const useGetPaymentDetailsUrl = () => {
  return useMakeApiRequest<UseGetPaymentDetailsUrlSuccess, UseGetPaymentDetailsUrlError>({
    path: '/payment/details-url',
    method: 'POST',
  })
}
