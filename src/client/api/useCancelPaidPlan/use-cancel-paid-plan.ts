import { useMakeApiRequest } from 'client/hooks'

export type UseCancelPaidPlanSuccess = { message: string }
export type UseCancelPaidPlanError = { message: string }

export const useCancelPaidPlan = () => {
  return useMakeApiRequest<UseCancelPaidPlanSuccess, UseCancelPaidPlanError>({
    path: '/payment/cancel',
    method: 'POST',
    minLoadingTime: 5000,
  })
}
