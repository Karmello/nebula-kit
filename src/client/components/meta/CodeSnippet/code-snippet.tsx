import { useLayoutEffect, useRef, useState } from 'react'
import { BundledLanguage, TokensResult } from 'shiki'

import { Box, Flex, IconButton, Text } from 'lib/components'

import { tokenizeCode } from './highlight-tokens'
import { ScaleValue } from 'lib/definitions'
import { useNebkitStore } from 'lib/state'

export type CodeSnippetProps = {
  code: string
  lang?: BundledLanguage
  borderRadius?: ScaleValue
}

const COLOR_MAP = {
  // background
  bg: { light: 'var(--neb-gray-2)', dark: 'var(--neb-gray-14)' },
  // component name
  '#F78C6C': { light: 'var(--neb-danger-ghost-text)', dark: 'var(--neb-danger-ghost-text)' },
  // prop name
  '#C5E478': { light: 'var(--neb-info-ghost-text)', dark: 'var(--neb-info-ghost-text)' },
  // object name, object key names
  '#D6DEEB': { light: 'var(--neb-gray-8)', dark: 'var(--neb-gray-7)' },
  // value
  '#ECC48D': { light: 'var(--neb-warning-ghost-text)', dark: 'var(--neb-warning-ghost-text)' },
  // param name
  '#D7DBE0': { light: 'var(--neb-warning-ghost-text)', dark: 'var(--neb-warning-ghost-text)' },
  // argument name
  '#FF5874': { light: 'var(--neb-warning-ghost-text)', dark: 'var(--neb-warning-ghost-text)' },
  // called func name
  '#82AAFF': { light: 'var(--neb-info-ghost-text)', dark: 'var(--neb-info-ghost-text)' },
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
}

export const CodeSnippet = ({ code, lang = 'tsx', borderRadius }: CodeSnippetProps) => {
  const [data, setData] = useState<TokensResult>()
  const [copied, setCopied] = useState<boolean>(false)

  const { theme } = useNebkitStore()

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
      tagAttrs={{ style: { backgroundColor: COLOR_MAP.bg[theme], borderRadius } }}
    >
      <Box padding={2} textAlign="end">
        <IconButton
          iconName={copied ? 'check' : 'copy'}
          size="xs"
          variant="ghost"
          intent={copied ? 'success' : 'primary'}
          tagAttrs={{ onClick: handleCopy, 'aria-label': copied ? 'Copied' : 'Copy code' }}
        />
      </Box>
      <Box overflowY="auto" maxBlockSize="350px">
        <Flex tag="pre">
          <Box tag="code" paddingInline={24} paddingBottom={24}>
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
                        typography="secondary"
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
