import { kebabCase } from 'lodash'

import { BoxOwnProps, TextOwnProps, NavLayoutProps, TableOwnProps } from 'lib/components'
import { LIB_PREFIX } from 'lib/definitions'

type DataAttrProps = Pick<BoxOwnProps, 'variant' | 'intent' | 'interactive' | 'disabled'> &
  Pick<TextOwnProps, 'typography'> &
  Pick<TableOwnProps, 'layout' | 'zebra' | 'stickyHeader'> &
  Pick<NavLayoutProps, 'side' | 'open'>

type Prefix = 'box' | 'text' | 'table' | 'nav-layout'

const getDataAttr = (prefix: Prefix, props: DataAttrProps, propName: keyof DataAttrProps) => {
  const propValue = props[propName]
  const dataAttrs: Record<string, typeof propValue> = {}

  if (propValue === undefined) {
    return dataAttrs
  }

  dataAttrs[`data-${LIB_PREFIX}-${prefix}-${kebabCase(propName)}`] = propValue
  return dataAttrs
}

export const getDataAttrs = (prefix: Prefix, props: DataAttrProps) => {
  let dataAttrs = {}

  if (props) {
    const propNames = Object.keys(props) as (keyof DataAttrProps)[]

    propNames.forEach(name => {
      dataAttrs = {
        ...dataAttrs,
        ...getDataAttr(prefix, props, name),
      }
    })
  }

  return dataAttrs
}
