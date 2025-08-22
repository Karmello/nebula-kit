import { ElementType } from 'react'

import { Flex, FlexOwnProps } from 'lib-2/components'
import { PolymorphicProps } from 'lib-2/definitions'

export type CenterOwnProps = Omit<FlexOwnProps, 'direction' | 'justify' | 'align'> & {
  fill?: boolean
  screen?: boolean
  grow?: boolean
}

export type CenterProps<E extends ElementType> = PolymorphicProps<E, CenterOwnProps>

export const Center = <E extends ElementType = 'div'>({
  fill,
  screen,
  grow,
  style,
  ...rest
}: CenterProps<E>) => {
  return (
    <Flex
      direction="row"
      justify="center"
      align="center"
      style={{
        ...(fill ? { width: '100%', height: '100%' } : null),
        ...(screen ? { width: '100%', minHeight: '100dvh' } : null),
        ...(grow ? { flex: '1 1 auto' } : null),
        ...style,
      }}
      {...(rest as CenterProps<E>)}
    />
  )
}

Center.displayName = 'Center'
