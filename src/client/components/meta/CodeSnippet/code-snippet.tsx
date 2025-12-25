import { useLayoutEffect, useRef, useState } from 'react'
import { TokensResult } from 'shiki'

import { useAppStore } from 'client/store'
import { Box, Flex, Button, Text } from 'lib/components'

import { tokenizeCode } from './highlight-tokens'

export type CodeSnippetProps = {
  code: string
  lang: 'log' | 'bash' | 'tsx'
}

const COLOR_MAP = {
  // background
  bg: { light: 'var(--neb-gray-2)', dark: 'var(--neb-gray-14)' },
  // component name
  '#F78C6C': { light: 'var(--neb-red-8)', dark: 'var(--neb-red-8)' },
  // native html tag name
  '#CAECE6': { light: 'var(--neb-red-8)', dark: 'var(--neb-red-8)' },
  // prop name
  '#C5E478': { light: 'var(--neb-blue-8)', dark: 'var(--neb-blue-8)' },
  // object name, object key names
  '#D6DEEB': { light: 'var(--neb-gray-8)', dark: 'var(--neb-gray-7)' },
  // value
  '#ECC48D': { light: 'var(--neb-amber-9)', dark: 'var(--neb-amber-9)' },
  // param name
  '#D7DBE0': { light: 'var(--neb-amber-9)', dark: 'var(--neb-amber-9)' },
  // argument name
  '#FF5874': { light: 'var(--neb-amber-9)', dark: 'var(--neb-amber-9)' },
  // called func name
  '#82AAFF': { light: 'var(--neb-blue-8)', dark: 'var(--neb-blue-8)' },
  // TS type name
  '#FFCB8B': { light: 'var(--neb-text)', dark: 'var(--neb-text)' },
  // angle brackets, cb curly brackets
  '#7FDBCA': { light: 'var(--neb-gray-15)', dark: 'var(--neb-gray-1)' },
  // prop curly brackets
  '#D3423E': { light: 'var(--neb-gray-15)', dark: 'var(--neb-gray-1)' },
  // equal sign, arrow func sign, dot
  '#C792EA': { light: 'var(--neb-gray-15)', dark: 'var(--neb-gray-1)' },
  // quotes
  '#D9F5DD': { light: 'var(--neb-gray-15)', dark: 'var(--neb-gray-1)' },
  // comments
  '#637777': { light: 'var(--neb-text)', dark: 'var(--neb-text)' },
  // extension
  '#5CA7E4': { light: 'var(--neb-blue-8)', dark: 'var(--neb-blue-8)' },
}

export const CodeSnippet = ({ code, lang = 'log' }: CodeSnippetProps) => {
  const [data, setData] = useState<TokensResult>()
  const [copied, setCopied] = useState<boolean>(false)

  const { theme } = useAppStore()

  const timeoutRef = useRef<NodeJS.Timeout>(null)

  useLayoutEffect(() => {
    setData(tokenizeCode(code, lang))
  }, [code])

  if (!data) {
    return null
  }

  const handleCopy = async () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    await navigator.clipboard.writeText(code)
    setCopied(true)
    timeoutRef.current = setTimeout(() => setCopied(false), 1000)
  }

  return (
    <Flex
      flexDirection="column"
      alignItems="stretch"
      tagAttrs={{ style: { backgroundColor: COLOR_MAP.bg[theme], borderRadius: 'var(--neb-border-radius)' } }}
    >
      <Box padding="2px" textAlign="end">
        <Button
          iconName={copied ? 'check' : 'copy'}
          size="xs"
          variant="ghost"
          intent="primary"
          color="blue"
          tagAttrs={{ onClick: handleCopy, 'aria-label': copied ? 'Copied' : 'Copy code' }}
        />
      </Box>
      <Box overflowY="auto" maxBlockSize="350px">
        <Flex tag="pre">
          <Box tag="code" paddingInline="24px" paddingBottom="24px">
            {data.tokens.map((token, i) => {
              return (
                <Box key={i}>
                  {token.map(({ content, color }, j) => {
                    if (!COLOR_MAP[color as never]) {
                      console.log(color)
                    }
                    return (
                      <Text
                        key={j}
                        tag="span"
                        tagAttrs={{ style: { display: 'inline', color: COLOR_MAP[color as never][theme] } }}
                        typography="small"
                      >
                        {content}
                      </Text>
                    )
                  })}
                </Box>
              )
            })}
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
