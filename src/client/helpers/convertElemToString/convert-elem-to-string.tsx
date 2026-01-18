import { JSX } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'

const jsxToString = (reactElementToJSXString as any)?.default ?? reactElementToJSXString

const FILTER_PROPS = ['key', 'ref']

export const convertElemToString = (elem: JSX.Element) => {
  return jsxToString(elem, {
    maxInlineAttributesLineLength: Infinity,
    sortProps: false,
    filterProps: (value: any, key: any) => !FILTER_PROPS.includes(key),
  }).replaceAll(/(\r?\n[ \t]*<[^/][^>]*>)\s*\r?\n\s*([^<\r\n]+)\s*\r?\n\s*([ \t]*<\/[^>]+>)/g, '$1$2$3')
}
