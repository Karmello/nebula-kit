import { Flex, FlexProps } from 'lib/components'
import { StackElem } from 'lib/definitions'

type StackElemUnion = `${StackElem}`

export type StackProps<E extends StackElemUnion = 'div'> = Omit<FlexProps<E>, 'justifyContent' | 'alignItems'>

export const Stack = <E extends StackElemUnion = 'div'>({
  elem,
  elemProps,
  elemRef,
  flexDirection,
  flexWrap,
  gap,
  rowGap,
  columnGap,
  ...boxProps
}: StackProps<E>) => {
  return (
    <Flex
      elem={elem}
      elemProps={elemProps}
      elemRef={elemRef}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      gap={gap}
      rowGap={rowGap}
      columnGap={columnGap}
      alignItems="stretch"
      {...boxProps}
    />
  )
}

Stack.displayName = 'Stack'

// const Test = () => {
//   return <Stack>stack</Stack>
// }
