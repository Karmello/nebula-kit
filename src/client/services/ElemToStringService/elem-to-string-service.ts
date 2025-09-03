import { JSX } from 'react'
import jsxToString from 'react-element-to-jsx-string'

const FILTER_PROPS = ['key', 'ref']

export const elemToStringService = () => {
  return (elem: JSX.Element) => {
    return jsxToString(elem, {
      maxInlineAttributesLineLength: Infinity,
      filterProps: (value, key) => !FILTER_PROPS.includes(key),
    })
  }
}
