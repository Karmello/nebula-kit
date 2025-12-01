import { useMakeApiRequest, UseMakeApiRequestRes } from 'client/hooks'

export type UseRequestEmailUpdateSuccess = {
  message: string
}

export type UseRequestEmailUpdateError = {
  errors?: Record<string, string>
  message?: string
}

export type UseRequestEmailUpdateRes = UseMakeApiRequestRes<
  UseRequestEmailUpdateSuccess,
  UseRequestEmailUpdateError
>

export const useRequestEmailUpdate = () => {
  return useMakeApiRequest<UseRequestEmailUpdateSuccess, UseRequestEmailUpdateError>({
    path: '/account/request-email-update',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    enabled: false,
  })
}
