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
    <Flex flexDirection="column" alignItems="stretch" tagAttrs={{ style: { backgroundColor: data.bg } }}>
      <Box padding={1}>
        <IconButton
          iconName={copied ? 'check' : 'copy'}
          size="xs"
          variant="ghost"
          intent={copied ? 'success' : 'primary'}
          tagAttrs={{ onClick: handleCopy, 'aria-label': copied ? 'Copied' : 'Copy code' }}
        />
      </Box>
      <Box maxBlockSize="350px" overflowY="auto">
        <Flex tag="pre">
          <Box tag="code" paddingInline={12} paddingBottom={7}>
            {data.tokens.map((token, i) => (
              <Box key={i}>
                {token.map(({ content, color }, j) => (
                  <Text
                    key={j}
                    tag="span"
                    tagAttrs={{ style: { display: 'inline', color } }}
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
    </Flex>
  )
}
