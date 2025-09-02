import { Stack, StackProps } from 'lib/components'
import { StackElem } from 'lib/definitions'

type StackElemUnion = `${StackElem}`

export type VStackProps<E extends StackElemUnion = 'div'> = Omit<
  StackProps<E>,
  'flexDirection' | 'flexWrap' | 'rowGap'
>

export const VStack = <E extends StackElemUnion = 'div'>(props: VStackProps<E>) => {
  return <Stack {...props} flexDirection="column" flexWrap="nowrap" />
}

VStack.displayName = 'VStack'

// const Test = () => {
//   return <VStack>v-stack</VStack>
// }
