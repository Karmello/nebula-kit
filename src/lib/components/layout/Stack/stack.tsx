import { Flex, FlexOwnProps } from 'lib/components'
import { ResponsiveProp, PolymorphicProps } from 'lib/definitions'

type StackDirection = 'column' | 'row'

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
  /** Polymorphic prop to change the rendered element type */
  as?: StackAs
  /** Alignment of items along the cross axis, supports responsive values */
  align?: FlexOwnProps['align']
  /** Shorthand spacing between items, supports responsive values */
  gap?: FlexOwnProps['gap']
  /** Vertical spacing between rows, overrides gap on block axis */
  rowGap?: FlexOwnProps['rowGap']
  /** Horizontal spacing between columns, overrides gap on inline axis */
  columnGap?: FlexOwnProps['columnGap']
  /** Main axis direction, supports responsive values */
  direction?: ResponsiveProp<StackDirection>
}

export type StackProps<E extends StackAs = 'div'> = PolymorphicProps<E, StackOwnProps>

/** Stack is a convenience wrapper around Flex for building one-dimensional layouts. It defaults to a vertical flow (direction="column"), with configurable alignment and spacing between items, and supports responsive values. Use it when you just need a simple stack of elements without dealing with the full flexbox API. */
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
