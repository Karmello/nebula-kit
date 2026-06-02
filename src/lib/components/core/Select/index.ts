import { Select as SelectBase } from './select'
import { SelectOption } from './SelectOption'

export const Select = Object.assign(SelectBase, {
  Option: SelectOption,
})

export * from './constants'
export * from './SelectOption'
export * from './types'
