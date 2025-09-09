import { useEffect, useState } from 'react'
import { BundledLanguage, TokensResult } from 'shiki'

import { Box, Flex, Text } from 'lib/components'

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
    }
    run()
  }, [])

  if (!data) {
    return null
  }

  return (
    <Box elem="pre" elemProps={{ style: { backgroundColor: data.bg } }} overflowX="auto" maxInlineSize="100%">
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
    </Box>
  )
}
