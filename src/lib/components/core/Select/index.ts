import { Select as SelectBase } from './select'
import { SelectOption } from './slots'

export const Select = Object.assign(SelectBase, {
  Option: SelectOption,
})

export * from './constants'
export * from './slots'
export * from './types'
