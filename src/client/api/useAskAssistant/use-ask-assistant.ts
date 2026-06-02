import { useEffect } from 'react'

import { useSnackbar } from 'lib/components'
import { useMakeApiRequest, UseMakeApiRequestRes } from 'client/hooks'

export type UseAskAssistantSuccess = { answer: string }
export type UseAskAssistantError = { error: string }

export type UseAskAssistantRes = UseMakeApiRequestRes<UseAskAssistantSuccess, UseAskAssistantError>

export const useAskAssistant = () => {
  const { code, data, error, isMakingRequest, sendRequest, cancelRequest } = useMakeApiRequest<
    UseAskAssistantSuccess,
    UseAskAssistantError
  >({
    path: '/assistant',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    minLoadingTime: 1000,
    timeout: 60_000,
  })

  const { show } = useSnackbar()

  useEffect(() => {
    if (error) {
      show({ status: 'error', content: 'Something went wrong.' })
    }
  }, [error])

  return {
    code,
    data,
    error,
    isMakingRequest,
    sendRequest,
    cancelRequest,
  }
}
