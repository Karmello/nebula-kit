import { BoxOwnProps, Flex, FlexOwnProps } from 'lib/components'
import { ResponsiveProp, PolymorphicProps, StackDirection, StackAs, PropsOf } from 'lib/definitions'

type StackAsType = `${StackAs}`

export type StackOwnProps = {
  as?: StackAsType
  flexDirection?: ResponsiveProp<`${StackDirection}`>
  flexWrap?: FlexOwnProps['flexWrap']
  gap?: FlexOwnProps['gap']
  rowGap?: FlexOwnProps['rowGap']
  columnGap?: FlexOwnProps['columnGap']
}

export const Stack = <E extends StackAsType = 'div'>({
  as,
  flexDirection,
  flexWrap,
  gap,
  rowGap,
  columnGap,
  ...rest
}: PolymorphicProps<E, StackOwnProps & BoxOwnProps>) => {
  return (
    <Flex
      as={as}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      gap={gap}
      rowGap={rowGap}
      columnGap={columnGap}
      alignItems="stretch"
      {...(rest as PropsOf<E>)}
    />
  )
}

Stack.displayName = 'Stack'
