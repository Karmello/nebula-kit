import { Stack, StackProps } from 'lib/components'
import { StackElem } from 'lib/definitions'

type StackElemUnion = `${StackElem}`

export type HStackProps<E extends StackElemUnion = 'div'> = Omit<
  StackProps<E>,
  'flexDirection' | 'flexWrap' | 'columnGap'
>

export const HStack = <E extends StackElemUnion = 'div'>(props: HStackProps<E>) => {
  return <Stack {...props} flexDirection="row" flexWrap="nowrap" />
}

HStack.displayName = 'HStack'
