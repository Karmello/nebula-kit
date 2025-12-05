import { useMakeApiRequest, UseMakeApiRequestRes } from 'client/hooks'

export type UseSendFeedbackSuccess = {
  message: string
}

export type UseSendFeedbackError = {
  message: string
}

export type UseSendFeedbackRes = UseMakeApiRequestRes<UseSendFeedbackSuccess, UseSendFeedbackError>

export const useSendFeedback = () => {
  return useMakeApiRequest<UseSendFeedbackSuccess, UseSendFeedbackError>({
    path: '/feedback',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
}
