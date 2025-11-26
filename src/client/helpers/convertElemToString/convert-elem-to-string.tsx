import { JSX } from 'react'
import jsxToString from 'react-element-to-jsx-string'

const FILTER_PROPS = ['key', 'ref']

export const convertElemToString = (elem: JSX.Element) => {
  return jsxToString(elem, {
    maxInlineAttributesLineLength: Infinity,
    sortProps: false,
    filterProps: (value, key) => !FILTER_PROPS.includes(key),
  }).replaceAll(/(\r?\n[ \t]*<[^/][^>]*>)\s*\r?\n\s*([^<\r\n]+)\s*\r?\n\s*([ \t]*<\/[^>]+>)/g, '$1$2$3')
}
