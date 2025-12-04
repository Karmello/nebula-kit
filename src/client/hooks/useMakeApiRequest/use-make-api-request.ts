import { useCallback, useEffect, useState } from 'react'

import { PageKey } from 'client/definitions'

type Args = {
  path: string
  method?: string
  headers?: HeadersInit
  minLoadingTime?: number
  disableAutoLogout?: boolean
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
  minLoadingTime = 350,
  disableAutoLogout = false,
}: Args) => {
  const [data, setData] = useState<TData>(null)
  const [error, setError] = useState<TError>(null)
  const [code, setCode] = useState<number>(null)
  const [isMakingRequest, setIsMakingRequest] = useState<boolean>(false)

  const sendRequest = useCallback(async (body?: object): Promise<UseMakeApiRequestRes<TData, TError>> => {
    setIsMakingRequest(true)
    setCode(null)

    const start = Date.now()

    const res = await fetch(process.env.API_URL + path, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
      credentials: 'include',
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
  }, [])

  useEffect(() => {
    if (code === 401 && !disableAutoLogout) {
      window.location.href = `${PageKey.authLogin}?unauthorized=true`
    }
  }, [code])

  return { data, error, code, isMakingRequest, sendRequest }
}
