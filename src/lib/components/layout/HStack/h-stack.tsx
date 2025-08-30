import { Stack, StackOwnProps } from 'lib/components'
import { PolymorphicProps, StackAs } from 'lib/definitions'

type StackAsType = `${StackAs}`

export type HStackOwnProps = Omit<StackOwnProps, 'direction' | 'wrap' | 'columnGap'>

export type HStackProps<E extends StackAsType = 'div'> = PolymorphicProps<E, HStackOwnProps>

export const HStack = <E extends StackAsType = 'div'>(props: HStackProps<E>) => {
  return <Stack {...props} direction="row" wrap="nowrap" />
}

HStack.displayName = 'HStack'
