import { Stack, StackAs, StackOwnProps } from 'lib/components'
import { PolymorphicProps } from 'lib/definitions'

export type VStackOwnProps = {
  /** Polymorphic prop to change the rendered element type */
  as?: StackAs
  /** Alignment of items along the cross axis, supports responsive values */
  align?: StackOwnProps['align']
  /** Shorthand spacing between items, supports responsive values */
  gap?: StackOwnProps['gap']
}

export type VStackProps<E extends StackAs = 'div'> = PolymorphicProps<E, VStackOwnProps>

/** VStack is a vertical layout primitive built on Stack. It arranges elements in a column with configurable alignment and spacing, providing a simple way to stack items top-to-bottom without managing full flexbox props. */
export const VStack = <E extends StackAs = 'div'>({
  as = 'div' as E,
  align = 'stretch',
  gap = 8,
  ...rest
}: VStackProps<E>) => {
  return <Stack as={as} direction="column" align={align} gap={gap} {...(rest as VStackProps<E>)} />
}

VStack.displayName = 'VStack'
