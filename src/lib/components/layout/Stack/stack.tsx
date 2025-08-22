import { Flex, FlexOwnProps } from 'lib/components'
import { ResponsiveProp, PolymorphicProps } from 'lib/definitions'

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

export type StackOwnProps = Pick<FlexOwnProps, 'align' | 'gap' | 'rowGap' | 'columnGap'> & {
  direction?: ResponsiveProp<'column' | 'row'>
}

export type StackProps<E extends StackAs = 'div'> = PolymorphicProps<E, StackOwnProps>

export const Stack = <E extends StackAs = 'div'>({
  direction = 'column',
  align = 'stretch',
  gap = 8,
  ...rest
}: StackProps<E>) => {
  return <Flex direction={direction} align={align} gap={gap} {...(rest as StackProps<E>)} />
}

Stack.displayName = 'Stack'
