import { BoxProps } from 'lib/index.core'

export type FloatingContentProps = {
  children: BoxProps<'span'>['children']
}

export type FloatingContentInternalProps = {
  // own
  internalOpen: boolean
  setInternalOpen: (internalOpen: boolean) => void
  isOpeningDownwards: boolean
  // Box
  tagRef?: BoxProps<'span'>['tagRef']
  tagAttrs?: BoxProps<'span'>['tagAttrs']
}
