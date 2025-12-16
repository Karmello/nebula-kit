import { RespValue } from 'lib/definitions'

export type PropValue = string | number | boolean
export type PropValues = Record<string, RespValue<PropValue> | undefined>
export type Bucket = Record<string, string>

export const isBlank = (v: unknown): v is '' => typeof v === 'string' && v === ''
