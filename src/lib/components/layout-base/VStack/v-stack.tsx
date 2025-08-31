import { Stack, StackOwnProps } from 'lib/components'
import { PolymorphicProps, StackAs } from 'lib/definitions'

type StackAsType = `${StackAs}`

export type VStackOwnProps = Omit<StackOwnProps, 'direction' | 'wrap' | 'rowGap'>

export type VStackProps<E extends StackAsType = 'div'> = PolymorphicProps<E, VStackOwnProps>

export const VStack = <E extends StackAsType = 'div'>(props: VStackProps<E>) => {
  return <Stack {...props} direction="column" wrap="nowrap" />
}

VStack.displayName = 'VStack'
