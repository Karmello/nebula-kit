import { JSX } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'

const jsxToString = (reactElementToJSXString as any)?.default ?? reactElementToJSXString

const FILTER_PROPS = ['key', 'ref']

const inlineSimpleObjectProps = (str: string) => {
  return str.replace(/(\w+)=\{\{([\s\S]*?)\n\s*\}\}/g, (match, prop, body) => {
    if (body.includes('{') || body.includes('}') || body.includes('=>')) {
      return match
    }

    const inlineBody = body
      .split('\n')
      .map((line: string) => line.trim())
      .filter(Boolean)
      .join(' ')
      .replace(/\s+/g, ' ')

    return `${prop}={{ ${inlineBody} }}`
  })
}

export const convertElemToString = (elem: JSX.Element) => {
  const raw = jsxToString(elem, {
    maxInlineAttributesLineLength: Infinity,
    sortProps: false,
    filterProps: (value: any, key: any) => !FILTER_PROPS.includes(key),
  })

  return inlineSimpleObjectProps(raw).replaceAll(
    /(\r?\n[ \t]*<[^/][^>]*>)\s*\r?\n\s*([^<\r\n]+)\s*\r?\n\s*([ \t]*<\/[^>]+>)/g,
    '$1$2$3'
  )
}
