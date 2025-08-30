import { Flex, FlexOwnProps, StackAs, StackOwnProps } from 'lib/components'
import { PolymorphicProps } from 'lib/definitions'

export type HStackOwnProps = {
  as?: StackAs
  justify?: FlexOwnProps['justify']
} & {
  align?: StackOwnProps['align']
  gap?: StackOwnProps['gap']
}

export type HStackProps<E extends StackAs = 'div'> = PolymorphicProps<E, HStackOwnProps>

export const HStack = <E extends StackAs = 'div'>({
  as = 'div' as E,
  justify = 'flex-start',
  align = 'stretch',
  gap = 8,
  ...rest
}: HStackProps<E>) => {
  return (
    <Flex as={as} direction="row" justify={justify} align={align} gap={gap} {...(rest as HStackProps<E>)} />
  )
}

HStack.displayName = 'HStack'
