import { useMakeApiRequest, UseMakeApiRequestRes } from 'client/hooks'

export type UseRecoverPasswordConfirmSuccess = {
  message: string
}

export type UseRecoverPasswordConfirmError = {
  message: string
}

export type UseRecoverPasswordConfirmRes = UseMakeApiRequestRes<
  UseRecoverPasswordConfirmSuccess,
  UseRecoverPasswordConfirmError
>

export const useRecoverPasswordConfirm = () => {
  return useMakeApiRequest<UseRecoverPasswordConfirmSuccess, UseRecoverPasswordConfirmError>({
    path: '/auth/recover/confirm',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    enabled: false,
  })
}
