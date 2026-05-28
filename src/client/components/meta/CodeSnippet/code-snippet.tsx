import { useEffect, useState } from 'react'
import { TokensResult } from 'shiki'

import { Box, Flex, Text, WithIcon } from 'lib/components'
import { useCurrentTheme } from 'lib/hooks'

import { CopyButton } from '../CopyButton'
import { tokenizeCode } from './highlight-tokens'
import { CodeSnippetProps, DEFAULT_MAX_BLOCK_SIZE } from './definitions'

export const CodeSnippet = ({
  code,
  usage,
  lang = 'log',
  borderRadius = true,
  description,
  boldDescription = true,
  descriptionIcon = false,
  fullBg,
  maxBlockSize = DEFAULT_MAX_BLOCK_SIZE,
}: CodeSnippetProps) => {
  const theme = useCurrentTheme()

  const [data, setData] = useState<TokensResult>(() => tokenizeCode(code, lang, theme))

  useEffect(() => {
    setData(tokenizeCode(code + `${usage ? `\n// Render\n${usage}` : ''}`, lang, theme))
  }, [code, lang, theme])

  if (!data) {
    return null
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
        <Flex alignItems="flex-end" columnGap="xs">
          <Flex.Item flex="1">
            {description ? (
              <Box paddingBlock="10px">
                <WithIcon iconName={descriptionIcon ? 'arrow-down' : undefined}>
                  <Text bold={boldDescription} intent="neutral" tagAttrs={{ style: { lineHeight: 1.25 } }}>
                    {description}
                  </Text>
                </WithIcon>
              </Box>
            ) : null}
          </Flex.Item>
          <CopyButton text={code} />
        </Flex>
        <Box
          tagAttrs={{
            style: {
              borderRadius: borderRadius ? 'var(--neb-border-radius)' : undefined,
              backgroundColor: 'hsl(var(--h) var(--s) var(--main-muted-l))',
            },
          }}
          overflowY="auto"
          maxBlockSize={maxBlockSize}
          drawable
          variant="solid"
        >
          <Flex tag="pre">
            <Box tag="code" paddingInline="sm" paddingBlock={fullBg ? '0px' : 'sm'} paddingBottom="sm">
              {data.tokens.map((token, i) => {
                const isEmpty = token.length === 0

                return (
                  <Box key={i} tag="span" tagAttrs={{ style: { display: 'block' } }}>
                    {isEmpty
                      ? ' '
                      : token.map(({ content, color }, j) => (
                          <Text
                            key={j}
                            tag="span"
                            tagAttrs={{
                              style: { display: 'inline', color, fontSize: '13px', letterSpacing: '0px' },
                            }}
                          >
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
