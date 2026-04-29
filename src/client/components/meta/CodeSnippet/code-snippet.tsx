import { useEffect, useRef, useState } from 'react'
import { TokensResult } from 'shiki'

import { Box, Flex, Button, Text } from 'lib/components'
import { useCurrentTheme } from 'lib/hooks'

import { tokenizeCode } from './highlight-tokens'
import { CodeSnippetProps } from './definitions'

export const CodeSnippet = ({
  code,
  lang = 'log',
  borderRadius = true,
  description,
  boldDescription = true,
  descriptionIcon = false,
  fullBg,
}: CodeSnippetProps) => {
  const theme = useCurrentTheme()

  const [data, setData] = useState<TokensResult>(() => tokenizeCode(code, lang, theme))
  const [copied, setCopied] = useState<boolean>(false)

  const timeoutRef = useRef<NodeJS.Timeout>(null)

  useEffect(() => {
    setData(tokenizeCode(code, lang, theme))
  }, [theme])

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
      tagAttrs={{
        style: {
          borderRadius: borderRadius ? 'var(--neb-border-radius)' : undefined,
        },
      }}
    >
      <Box
        drawable
        variant="solid"
        tagAttrs={{
          style: {
            backgroundColor: fullBg ? 'hsl(var(--h) var(--s) var(--main-muted-l))' : undefined,
          },
        }}
      >
        <Flex alignItems="flex-end" columnGap="10px">
          <Flex.Item flex="1">
            {description ? (
              <Box paddingBlock="10px">
                <Text
                  bold={boldDescription}
                  iconName={descriptionIcon ? 'arrow-down' : undefined}
                  intent="neutral"
                  tagAttrs={{ style: { lineHeight: 1.25 } }}
                >
                  {description}
                </Text>
              </Box>
            ) : null}
          </Flex.Item>
          <Button
            iconName={copied ? 'check' : 'copy'}
            size="xs"
            variant="ghost"
            intent="primary"
            color="blue"
            tagAttrs={{ onClick: handleCopy, 'aria-label': copied ? 'Copied' : 'Copy code' }}
          />
        </Flex>
        <Box
          tagAttrs={{
            style: {
              borderRadius: borderRadius ? 'var(--neb-border-radius)' : undefined,
              backgroundColor: 'hsl(var(--h) var(--s) var(--main-muted-l))',
            },
          }}
          overflowY="auto"
          maxBlockSize="350px"
          drawable
          variant="solid"
        >
          <Flex tag="pre">
            <Box tag="code" paddingInline="20px" paddingBlock={fullBg ? '0px' : '14px'} paddingBottom="12px">
              {data.tokens.map((token, i) => {
                const isEmpty = token.length === 0

                return (
                  <Box key={i} tag="span" tagAttrs={{ style: { display: 'block' } }}>
                    {isEmpty
                      ? ' '
                      : token.map(({ content, color }, j) => (
                          <Text key={j} tag="span" tagAttrs={{ style: { display: 'inline', color } }} typography="small">
                            {content}
                          </Text>
                        ))}
                  </Box>
                )
              })}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}
