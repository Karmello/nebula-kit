import { useEffect, useState } from 'react'
import { BundledLanguage, TokensResult } from 'shiki'

import { Box, Text } from 'lib/components'

import { tokenizeCode } from './helpers'

export type CodeSnippetProps = {
  code: string
  lang?: BundledLanguage
}

export const CodeSnippet = ({ code, lang = 'tsx' }: CodeSnippetProps) => {
  const [data, setData] = useState<TokensResult>()

  useEffect(() => {
    const run = async () => {
      const data = await tokenizeCode(code, lang)
      setData(data)
      console.log(data)
    }
    run()
  }, [])

  if (!data) {
    return null
  }

  return (
    <Box as="pre" borderRadius={3} overflowX="auto" style={{ backgroundColor: data.bg }}>
      <Box as="code" px={12} py={10} minInlineSize="400px">
        {data.tokens.map((token, i) => (
          <Box key={i} mb={2}>
            {token.map(({ content, color }, j) => (
              <Text key={j} as="span" fontSize={7} style={{ display: 'inline', color }}>
                {content}
              </Text>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  )
}
