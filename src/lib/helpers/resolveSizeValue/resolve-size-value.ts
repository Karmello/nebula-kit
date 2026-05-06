import { RespValue, SIZING_SCALE, TShirtSize } from 'lib/definitions'

type ResolveMode = 'default' | 'margin'

export const resolveSizeValue = (value: RespValue<any>, mode: ResolveMode = 'default'): RespValue<string> => {
  const resolveSingle = (v: string) => {
    if (typeof v !== 'string') return v

    if (mode === 'margin') {
      // handle shorthand: "sm md"
      return v
        .trim()
        .split(/\s+/)
        .map(part => SIZING_SCALE[part as TShirtSize] ?? part)
        .join(' ')
    }

    // default: direct mapping
    return SIZING_SCALE[v as TShirtSize] ?? v
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
