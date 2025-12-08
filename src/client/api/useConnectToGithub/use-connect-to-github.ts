import { useMakeApiRequest } from 'client/hooks'

export type UseConnectToGithubSuccess = { url: string }

export const useConnectToGithub = () => {
  return useMakeApiRequest<UseConnectToGithubSuccess, unknown>({
    path: '/github/connect',
  })
}
