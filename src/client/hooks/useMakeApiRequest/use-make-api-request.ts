import { useEffect, useState } from 'react'

import { useAppStore } from 'client/store'

type Args = {
  path: string
  method?: string
  headers?: object
  enabled?: boolean
  minLoadingTime?: number
}

export const useMakeApiRequest = <TData>({
  path,
  method = 'GET',
  headers = {},
  enabled = true,
  minLoadingTime = 300,
}: Args) => {
  const [data, setData] = useState<TData>(null)
  const [isMakingRequest, setIsMakingRequest] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const { token } = useAppStore()

  const sendRequest = async (body?: object) => {
    setData(null)
    setIsError(false)
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
    } else {
      setIsError(true)
      setData(null)
      setIsMakingRequest(false)
    }

    return {
      ok: res.ok,
      data: json,
    }
  }

  useEffect(() => {
    if (enabled) {
      sendRequest()
    }
  }, [enabled])

  return { data, isMakingRequest, isError, sendRequest }
}
