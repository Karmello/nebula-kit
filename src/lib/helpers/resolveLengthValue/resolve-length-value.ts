import { RespValue, LENGTH_SCALE, TShirtSize } from 'lib/definitions'

type ResolveMode = 'single' | 'shorthand'

export const resolveLengthValue = (value: RespValue<any>, mode: ResolveMode = 'single'): RespValue<string> => {
  const resolveToken = (token: string) => LENGTH_SCALE[token as TShirtSize] ?? token

  const resolveSingle = (v: string) => {
    if (typeof v !== 'string') return v

    if (mode === 'shorthand') {
      return v.trim().split(/\s+/).map(resolveToken).join(' ')
    }

    return resolveToken(v)
  }

  if (typeof value === 'string') {
    return resolveSingle(value)
  }

  if (typeof value !== 'object' || value === null) {
    return value
  }

  return Object.fromEntries(
    Object.entries(value)
      .filter(([, v]) => v !== undefined)
      .map(([bp, v]) => [bp, resolveSingle(v as any)])
  )
}
