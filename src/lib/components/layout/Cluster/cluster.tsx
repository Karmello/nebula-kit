import { ElementType } from 'react'
import classNames from 'classnames'

import { Flex, FlexOwnProps } from 'lib/components'
import { withPrefix, getCssVars } from 'lib/helpers'
import { CLUSTER_CSS_VARS, PolymorphicProps, ResponsiveProp, ScaleValue } from 'lib/definitions'

import './cluster.scss'

export type ClusterOwnProps = {
  minItemWidth?: ResponsiveProp<ScaleValue | string>
}

export type ClusterProps<E extends ElementType> = PolymorphicProps<
  E,
  Omit<FlexOwnProps, 'direction'> & ClusterOwnProps
>

export const Cluster = <E extends ElementType = 'div'>({
  wrap = 'wrap',
  align = 'center',
  justify = 'flex-start',
  gap = 4,
  minItemWidth = CLUSTER_CSS_VARS.minItemWidth,
  className,
  style,
  ...rest
}: ClusterProps<E>) => {
  return (
    <Flex
      direction="row"
      wrap={wrap}
      align={align}
      justify={justify}
      gap={gap}
      className={classNames(withPrefix('cluster'), className)}
      style={{
        ...(minItemWidth !== undefined ? getCssVars('cluster', { minItemWidth }) : {}),
        ...style,
      }}
      {...(rest as ClusterProps<E>)}
    />
  )
}

Cluster.displayName = 'Cluster'
