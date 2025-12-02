import { useMakeApiRequest, UseMakeApiRequestRes } from 'client/hooks'

export type UseUpdatePasswordSuccess = {
  message: string
}

export type UseUpdatePasswordError = {
  message: string
}

export type UseUpdatePasswordRes = UseMakeApiRequestRes<UseUpdatePasswordSuccess, UseUpdatePasswordError>

export const useUpdatePassword = () => {
  return useMakeApiRequest<UseUpdatePasswordSuccess, UseUpdatePasswordError>({
    path: '/account/update/password',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    enabled: false,
  })
}
