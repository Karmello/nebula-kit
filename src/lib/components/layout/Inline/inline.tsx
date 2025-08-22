import { ElementType } from 'react'

import { Flex, FlexOwnProps } from 'lib-2/components'
import { PolymorphicProps } from 'lib-2/definitions'

export type InlineOwnProps = {
  block?: boolean
}

export type InlineProps<E extends ElementType = 'div'> = PolymorphicProps<
  E,
  Partial<Pick<FlexOwnProps, 'wrap' | 'justify' | 'align' | 'gap'>> & InlineOwnProps
>

export const Inline = <E extends ElementType = 'div'>({
  block = false,
  wrap = 'wrap',
  justify = 'flex-start',
  align = 'baseline',
  gap = 4,
  style,
  ...rest
}: InlineProps<E>) => {
  return (
    <Flex
      direction="row"
      wrap={wrap}
      justify={justify}
      align={align}
      gap={gap}
      style={{ display: block ? 'flex' : 'inline-flex', ...style }}
      {...(rest as InlineProps<E>)}
    />
  )
}

Inline.displayName = 'Inline'
