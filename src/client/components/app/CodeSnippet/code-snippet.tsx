import { useLayoutEffect, useRef, useState } from 'react'
import { BundledLanguage, TokensResult } from 'shiki'

import { Box, Flex, IconButton, Text } from 'lib/components'

import { tokenizeCode } from './highlight-tokens'

export type CodeSnippetProps = {
  code: string
  lang?: BundledLanguage
}

export const CodeSnippet = ({ code, lang = 'tsx' }: CodeSnippetProps) => {
  const [data, setData] = useState<TokensResult>()
  const [copied, setCopied] = useState<boolean>(false)

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
    <Box position="relative">
      <Box
        elem="pre"
        elemProps={{ style: { backgroundColor: data.bg } }}
        overflowX="auto"
        maxInlineSize="100%"
      >
        <Flex>
          <Box elem="code" padding={13}>
            {data.tokens.map((token, i) => (
              <Box key={i}>
                {token.map(({ content, color }, j) => (
                  <Text
                    key={j}
                    elem="span"
                    elemProps={{ style: { display: 'inline', color } }}
                    typography="secondary"
                  >
                    {content}
                  </Text>
                ))}
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>
      <Box position="absolute" top={0} right={0}>
        <IconButton
          iconName={copied ? 'check' : 'copy'}
          size="xs"
          variant="ghost"
          intent={copied ? 'success' : 'primary'}
          elemProps={{ onClick: handleCopy, 'aria-label': copied ? 'Copied' : 'Copy code' }}
        />
      </Box>
    </Box>
  )
}
