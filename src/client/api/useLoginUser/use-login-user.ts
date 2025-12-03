import { ApiUser } from 'client/definitions'
import { useMakeApiRequest, UseMakeApiRequestRes } from 'client/hooks'

export type UseLoginUserSuccess = {
  user: ApiUser
}

export type UseLoginUserError = {
  message: string
}

export type UseLoginUserRes = UseMakeApiRequestRes<UseLoginUserSuccess, UseLoginUserError>

export const useLoginUser = () => {
  return useMakeApiRequest<UseLoginUserSuccess, UseLoginUserError>({
    path: '/auth/login',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
}
