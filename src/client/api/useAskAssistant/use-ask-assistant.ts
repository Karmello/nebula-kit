import { useMakeApiRequest, UseMakeApiRequestRes } from 'client/hooks'

export type UseAskAssistantSuccess = { answer: string }
export type UseAskAssistantError = { error: string }

export type UseAskAssistantRes = UseMakeApiRequestRes<UseAskAssistantSuccess, UseAskAssistantError>

export const useAskAssistant = () => {
  const { code, data, error, isMakingRequest, sendRequest } = useMakeApiRequest<UseAskAssistantSuccess, UseAskAssistantError>({
    path: '/assistant',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })

  return {
    code,
    data,
    error,
    isMakingRequest,
    sendRequest,
  }
}
