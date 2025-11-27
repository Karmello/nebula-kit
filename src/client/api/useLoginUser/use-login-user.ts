import { ApiUser } from 'client/definitions'
import { useMakeApiRequest } from 'client/hooks'

export type UseLoginUserSuccess = {
  token: string
  user: ApiUser
}

export type UseLoginUserError = {
  message: string
}

export const useLoginUser = () => {
  return useMakeApiRequest<UseLoginUserSuccess, UseLoginUserError>({
    path: '/auth/login',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    enabled: false,
  })
}
