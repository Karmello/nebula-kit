import { useEffect, useState } from 'react'

import { useAppStore } from 'client/store'

type Args = {
  path: string
  method?: string
  headers?: object
  enabled?: boolean
  minLoadingTime?: number
}

export type UseMakeApiRequestRes<TData, TError> = {
  ok: boolean
  data: TData
  error: TError
  code: number
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
  const [code, setCode] = useState<number>(null)
  const [isMakingRequest, setIsMakingRequest] = useState<boolean>(false)

  const { token } = useAppStore()

  const sendRequest = async (body?: object): Promise<UseMakeApiRequestRes<TData, TError>> => {
    setData(null)
    setError(null)
    setCode(null)
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
    setCode(res.status)

    if (res.ok) {
      setData(json)
      setIsMakingRequest(false)
      return { ok: res.ok, data: json, error: null, code: res.status }
    } else {
      setError(json)
      setIsMakingRequest(false)
      return { ok: res.ok, data: null, error: json, code: res.status }
    }
  }

  useEffect(() => {
    if (enabled) {
      sendRequest()
    }
  }, [enabled])

  return { data, error, code, isMakingRequest, sendRequest }
}
