import { kebabCase } from 'lodash'

import { BoxOwnProps, TextOwnProps, NavLayoutProps } from 'lib/components'
import { TableOwnProps } from 'lib/components/primitive/Table'

type DataAttrProps = Pick<BoxOwnProps, 'variant' | 'intent' | 'interactive' | 'disabled'> &
  Pick<TextOwnProps, 'typography'> &
  Pick<TableOwnProps, 'layout' | 'zebra' | 'bordered' | 'stickyHeader'> &
  Pick<NavLayoutProps, 'side' | 'open'>

type Prefix = 'box' | 'text' | 'table' | 'nav-layout'

const getDataAttr = (prefix: Prefix, props: DataAttrProps, propName: keyof DataAttrProps) => {
  const propValue = props[propName]
  const dataAttrs: Record<string, typeof propValue> = {}

  if (propValue === undefined) {
    return dataAttrs
  }

  dataAttrs[`data-${prefix}-${kebabCase(propName)}`] = propValue
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
