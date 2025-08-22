import { BoxOwnProps, TextOwnProps, NavLayoutOwnProps } from 'lib-2/components'

type DataAttrProps = Pick<BoxOwnProps, 'variant' | 'intent' | 'interactive' | 'disabled'> &
  Pick<TextOwnProps, 'typography'> &
  Pick<NavLayoutOwnProps, 'side' | 'open'>

type Prefix = 'box' | 'text' | 'nav-layout'

const getDataAttr = (prefix: Prefix, props: DataAttrProps, propName: keyof DataAttrProps) => {
  const propValue = props[propName]
  const dataAttrs: Record<string, typeof propValue> = {}

  if (propValue === undefined) {
    return dataAttrs
  }

  dataAttrs[`data-${prefix}-${propName}`] = propValue
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
