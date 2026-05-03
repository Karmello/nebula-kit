import { CssMargin, LENGTH_VALUES, RespValue, TShirtSize } from 'lib/definitions'

export const resolveMarginValue = (value: RespValue<CssMargin>): RespValue<string> => {
  const resolve = (v: CssMargin) => {
    if (typeof v !== 'string') return v

    // split shorthand
    const parts = v.split(' ')

    return parts.map(part => LENGTH_VALUES[part as TShirtSize] ?? part).join(' ')
  }

  if (typeof value === 'string') {
    return resolve(value)
  }

  return Object.fromEntries(
    Object.entries(value)
      .filter(([, v]) => v !== undefined)
      .map(([bp, v]) => [bp, resolve(v as CssMargin)])
  ) as RespValue<string>
}
