import { BoxOwnProps, Flex, FlexOwnProps } from 'lib/components'
import { ResponsiveProp, PolymorphicProps, StackDirection, StackAs } from 'lib/definitions'

type StackAsType = `${StackAs}`

export type StackOwnProps = {
  as?: StackAsType
  direction?: ResponsiveProp<`${StackDirection}`>
  wrap?: FlexOwnProps['wrap']
  gap?: FlexOwnProps['gap']
  rowGap?: FlexOwnProps['rowGap']
  columnGap?: FlexOwnProps['columnGap']
}

export type StackProps<E extends StackAsType = 'div'> = PolymorphicProps<E, StackOwnProps & BoxOwnProps>

export const Stack = <E extends StackAsType = 'div'>(props: StackProps<E>) => {
  return <Flex {...props} align="stretch" />
}

Stack.displayName = 'Stack'
