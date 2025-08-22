import { Stack, StackAs, StackOwnProps } from 'lib-2/components'
import { PolymorphicProps } from 'lib-2/definitions'

export type VStackOwnProps = Omit<StackOwnProps, 'direction' | 'rowGap' | 'columnGap'>

export type VStackProps<E extends StackAs = 'div'> = PolymorphicProps<E, VStackOwnProps>

export const VStack = <E extends StackAs = 'div'>(props: VStackProps<E>) => (
  <Stack direction="column" {...props} />
)

VStack.displayName = 'VStack'
