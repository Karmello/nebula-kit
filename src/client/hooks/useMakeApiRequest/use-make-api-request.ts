import { useEffect, useState } from 'react'

import { useAppStore } from 'client/store'

type Args = {
  path: string
  method?: string
  headers?: object
  enabled?: boolean
  minLoadingTime?: number
}

export const useMakeApiRequest = <TData, TError>({
  path,
  method = 'GET',
  headers = {},
  enabled = true,
  minLoadingTime = 350,
}: Args) => {
  const [data, setData] = useState<TData>(null)
  const [error, setError] = useState<TError>(null)
  const [isMakingRequest, setIsMakingRequest] = useState<boolean>(false)

  const { token } = useAppStore()

  const sendRequest = async (body?: object): Promise<{ data: TData; error: TError }> => {
    setData(null)
    setError(null)
    setIsMakingRequest(true)

    const start = Date.now()

    const res = await fetch(process.env.API_URL + path, {
      method,
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
    })

    if (minLoadingTime) {
      const remaining = minLoadingTime - (Date.now() - start)
      if (remaining > 0) {
        await new Promise(resolve => setTimeout(resolve, remaining))
      }
    }

    const json = await res.json()

    if (res.ok) {
      setData(json)
      setIsMakingRequest(false)
      return { data: json, error: null }
    } else {
      setError(json)
      setIsMakingRequest(false)
      return { data: null, error: json }
    }
  }

  useEffect(() => {
    if (enabled) {
      sendRequest()
    }
  }, [enabled])

  return { data, error, isMakingRequest, sendRequest }
}
