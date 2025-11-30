import { useMakeApiRequest } from 'client/hooks'

export type UseConnectToDiscordSuccess = { url: string }

export const useConnectToDiscord = () => {
  return useMakeApiRequest<UseConnectToDiscordSuccess, unknown>({
    path: '/discord/connect',
    enabled: false,
  })
}
