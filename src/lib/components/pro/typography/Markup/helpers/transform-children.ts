import { Children, cloneElement, isValidElement, ReactNode } from 'react'

import { parseString } from './parse-string'
import { renderPart } from './render-part'

export const transformChildren = (children: ReactNode): ReactNode => {
  return Children.map(children, child => {
    if (typeof child === 'string') {
      return parseString(child).map(renderPart)
    }

    if (!isValidElement<{ children?: ReactNode }>(child)) {
      return child
    }

    if (!child.props.children) {
      return child
    }

    return cloneElement(child, {
      children: transformChildren(child.props.children),
    })
  })
}
