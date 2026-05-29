import { RespValue, LENGTH_SCALE, TShirtSize } from 'lib/definitions'

type ResolveMode = 'single' | 'shorthand'

export const resolveLengthToken = (value: string, mode: ResolveMode = 'single'): string => {
  const resolveToken = (token: string) => LENGTH_SCALE[token as TShirtSize] ?? token

  if (mode === 'shorthand') {
    return value.trim().split(/\s+/).map(resolveToken).join(' ')
  }

  return resolveToken(value)
}

export const resolveLengthValue = (value: RespValue<any>, mode: ResolveMode = 'single'): RespValue<string> => {
  if (typeof value === 'string') {
    return resolveLengthToken(value, mode)
  }

  if (typeof value !== 'object' || value === null) {
    return value
  }

  return Object.fromEntries(
    Object.entries(value)
      .filter(([, v]) => v !== undefined)
      .map(([bp, v]) => [bp, resolveLengthToken(v as string, mode)])
  )
}
