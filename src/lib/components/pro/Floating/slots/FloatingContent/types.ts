import { BoxProps } from 'lib/components/core/Box'

export type FloatingContentProps = {
  children: BoxProps<'span'>['children']
}

export type FloatingContentInternalProps = {
  // own
  internalOpen: boolean
  setInternalOpen: (internalOpen: boolean) => void
  isOpeningDownwards: boolean
  // Box
  elemRef?: BoxProps<'span'>['elemRef']
  elemAttrs?: BoxProps<'span'>['elemAttrs']
}
