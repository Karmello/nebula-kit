import { useState } from 'react'
import { useLocation, Navigate } from 'react-router-dom'

import { useNavigateTo } from 'client/hooks'
import { PATTERNS } from 'client/definitions'
import { Box, Button, Flex, Section, Segment, SideNav, Spacer, SplitView, Text } from 'lib/components'
import { CodeSnippet } from 'client/components'
import { convertElemToString } from 'client/helpers'

export const PatternsPage = () => {
  const [viewMode, setViewMode] = useState<'code' | 'preview'>('code')

  const navigateTo = useNavigateTo()
  const { pathname, search } = useLocation()
  let patternId = new URLSearchParams(search).get('id')

  if (patternId == null) {
    return <Navigate replace to={{ pathname, search: `?id=${encodeURIComponent(PATTERNS[0].id)}` }} />
  }

  const pattern = PATTERNS.find(p => p.id === patternId)

  return (
    <Box paddingTop="sm" paddingInline={{ base: 'md', lg: 'xl' }}>
      <Section size="lg" heading="Patterns" iconName="pyramid">
        <SplitView>
          {({ mode, setSideOpen }) => {
            return (
              <>
                <SplitView.Main>
                  <SplitView.MainBar>
                    <Flex alignItems="center" flexWrap="wrap" columnGap="md" rowGap="2xs">
                      <Flex.Item flex="1">
                        <Text typography="h5">{pattern?.title}</Text>
                      </Flex.Item>
                      <Segment>
                        <Segment.Item>
                          <Button
                            size="xs"
                            selected={viewMode === 'code'}
                            bold={viewMode === 'code'}
                            inlineSize="85px"
                            onClick={() => setViewMode('code')}
                          >
                            Code
                          </Button>
                        </Segment.Item>
                        <Segment.Item>
                          <Button
                            size="xs"
                            selected={viewMode === 'preview'}
                            bold={viewMode === 'preview'}
                            inlineSize="85px"
                            onClick={() => setViewMode('preview')}
                          >
                            Preview
                          </Button>
                        </Segment.Item>
                      </Segment>
                    </Flex>
                  </SplitView.MainBar>
                  <Spacer />
                  {pattern?.jsx ? (
                    viewMode === 'code' ? (
                      <CodeSnippet lang="tsx" code={convertElemToString(pattern.jsx)} maxBlockSize="calc(100dvh - 275px)" />
                    ) : (
                      <Box drawable variant="outline" intent="muted" maxBlockSize="calc(100dvh - 275px)" padding="sm">
                        {pattern.jsx}
                      </Box>
                    )
                  ) : null}
                </SplitView.Main>
                <SplitView.Side paddingRight={{ lg: 'md' }}>
                  <SideNav size="xl" gap="2xs" intent={{ base: 'tertiary', lg: 'muted' }}>
                    {PATTERNS.map(({ id, title, description }) => {
                      const href = `/patterns?id=${id}`

                      return (
                        <SideNav.Item
                          key={id}
                          href={href}
                          onClick={async () => {
                            if (mode === 'overlay') await setSideOpen(false)
                            navigateTo(href)
                          }}
                          selected={patternId === id}
                          description={description}
                          bold
                          align="start"
                        >
                          {title}
                        </SideNav.Item>
                      )
                    })}
                  </SideNav>
                </SplitView.Side>
              </>
            )
          }}
        </SplitView>
      </Section>
    </Box>
  )
}
