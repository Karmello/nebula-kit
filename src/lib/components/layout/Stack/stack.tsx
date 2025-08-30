import { Flex, FlexOwnProps } from 'lib/components'
import { ResponsiveProp, PolymorphicProps, StackDirection } from 'lib/definitions'

export type StackAs =
  | 'div'
  | 'section'
  | 'article'
  | 'aside'
  | 'main'
  | 'header'
  | 'footer'
  | 'nav'
  | 'ul'
  | 'ol'

export type StackOwnProps = {
  as?: StackAs
  direction?: ResponsiveProp<`${StackDirection}`>
  align?: FlexOwnProps['align']
  gap?: FlexOwnProps['gap']
  rowGap?: FlexOwnProps['rowGap']
  columnGap?: FlexOwnProps['columnGap']
}

export type StackProps<E extends StackAs = 'div'> = PolymorphicProps<E, StackOwnProps>

export const Stack = <E extends StackAs = 'div'>({
  as = 'div' as E,
  direction = 'column',
  align = 'stretch',
  gap,
  ...rest
}: StackProps<E>) => {
  return <Flex as={as} direction={direction} align={align} gap={gap} {...(rest as StackProps<E>)} />
}

Stack.displayName = 'Stack'
