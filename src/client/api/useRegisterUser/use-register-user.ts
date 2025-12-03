import { useMakeApiRequest } from 'client/hooks'

export type UseRegisterUserSuccess = {
  message: string
}

export type UseRegisterUserError = {
  errors?: Record<string, string>
  message?: string
}

export const useRegisterUser = () => {
  return useMakeApiRequest<UseRegisterUserSuccess, UseRegisterUserError>({
    path: '/auth/register',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
}
