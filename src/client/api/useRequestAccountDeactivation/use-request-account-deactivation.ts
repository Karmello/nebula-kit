import { useMakeApiRequest } from 'client/hooks'

export type UseRequestAccountDeactivationSuccess = { message: string }
export type UseRequestAccountDeactivationError = { message: string }

export const useRequestAccountDeactivation = () => {
  return useMakeApiRequest<UseRequestAccountDeactivationSuccess, UseRequestAccountDeactivationError>({
    path: '/account/deactivate/request',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
}
