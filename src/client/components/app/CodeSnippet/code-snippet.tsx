import { useEffect, useState } from 'react'
import { BundledLanguage, TokensResult } from 'shiki'

import { Box, Flex, IconButton, Text } from 'lib/components'

import { tokenizeCode } from './helpers'

export type CodeSnippetProps = {
  code: string
  lang?: BundledLanguage
}

export const CodeSnippet = ({ code, lang = 'tsx' }: CodeSnippetProps) => {
  const [data, setData] = useState<TokensResult>()
  const [copied, setCopied] = useState<boolean>(false)

  useEffect(() => {
    const run = async () => {
      const data = await tokenizeCode(code, lang)
      setData(data)
    }
    run()
  }, [])

  if (!data) {
    return null
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <Box
      elem="pre"
      elemProps={{ style: { backgroundColor: data.bg } }}
      position="relative"
      overflowX="auto"
      maxInlineSize="100%"
    >
      <Flex>
        <Box elem="code" padding={10}>
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
      <Box position="absolute" top={3} right={3}>
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
