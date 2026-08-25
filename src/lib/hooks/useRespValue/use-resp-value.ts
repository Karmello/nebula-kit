import { BREAKPOINTS } from 'lib/constants'
import type { Breakpoint, RespValue } from 'lib/types'

import { useScreen } from '../useScreen'

export const useRespValue = <T>(respValue: RespValue<T>): T | undefined => {
  const { bp } = useScreen()

  const isObjectValue = respValue !== null && typeof respValue === 'object'

  if (!isObjectValue) {
    return respValue as T
  }

  const valuesByBp = respValue as Partial<Record<Breakpoint, T>>

  let resolved: T | undefined

  for (const currentBp of BREAKPOINTS) {
    if (valuesByBp[currentBp] !== undefined) {
      resolved = valuesByBp[currentBp]
    }

    if (currentBp === bp) break
  }

  return resolved
}
