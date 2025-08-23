import { Flex, FlexOwnProps, StackAs, StackOwnProps } from 'lib/components'
import { PolymorphicProps } from 'lib/definitions'

export type HStackOwnProps = {
  /** Distribution of items along the main axis, supports responsive values */
  justify?: FlexOwnProps['justify']
} & {
  /** Alignment of items along the cross axis, supports responsive values */
  align?: StackOwnProps['align']
  /** Shorthand spacing between items, supports responsive values */
  gap?: StackOwnProps['gap']
}

export type HStackProps<E extends StackAs = 'div'> = PolymorphicProps<E, HStackOwnProps>

/** HStack is a horizontal layout primitive built on Flex. It arranges items in a row with configurable justification, alignment, and spacing, making it an easy drop-in for horizontal stacks of elements. */
export const HStack = <E extends StackAs = 'div'>({
  justify = 'flex-start',
  align = 'stretch',
  gap = 8,
  ...rest
}: HStackProps<E>) => {
  return <Flex direction="row" justify={justify} align={align} gap={gap} {...(rest as HStackProps<E>)} />
}

HStack.displayName = 'HStack'
