import { Flex, FlexOwnProps, StackAs, StackOwnProps } from 'lib-2/components'
import { PolymorphicProps } from 'lib-2/definitions'

export type HStackOwnProps = Omit<StackOwnProps, 'direction' | 'rowGap' | 'columnGap'> &
  Pick<FlexOwnProps, 'justify'>

export type HStackProps<E extends StackAs = 'div'> = PolymorphicProps<E, HStackOwnProps>

export const HStack = <E extends StackAs = 'div'>(props: HStackProps<E>) => {
  return <Flex direction="row" gap={props.gap} {...props} />
}

HStack.displayName = 'HStack'
