import { useMakeApiRequest, UseMakeApiRequestRes } from 'client/hooks'

export type UseRecoverPasswordSuccess = {
  message: string
}

export type UseRecoverPasswordError = {
  message: string
}

export type UseRecoverPasswordRes = UseMakeApiRequestRes<UseRecoverPasswordSuccess, UseRecoverPasswordError>

export const useRecoverPassword = () => {
  return useMakeApiRequest<UseRecoverPasswordSuccess, UseRecoverPasswordError>({
    path: '/auth/recover',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    enabled: false,
  })
}
