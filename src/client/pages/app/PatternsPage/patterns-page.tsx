import { useLayoutEffect } from 'react'
import { Navigate, useLocation } from 'react-router'

import { Box, Flex, Markup, MultiSelect, Section, SideNav, Spacer, SplitView, Text } from 'lib/components'
import { CodeSnippet } from 'client/components'
import { PATTERN_CATEGORIES, PATTERNS } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { usePatternsStore } from 'client/store'

export const PatternsPage = () => {
  const { pathname, search } = useLocation()
  const navigateTo = useNavigateTo()
  const { patternCategories, setPatternCategories, activePatternId, setActivePatternId } = usePatternsStore()

  const patternIdParam = new URLSearchParams(search).get('id')
  const queryPattern = PATTERNS.find(p => p.id === patternIdParam)
  const activePattern = PATTERNS.find(p => p.id === activePatternId)

  useLayoutEffect(() => {
    if (queryPattern) {
      setActivePatternId(queryPattern.id)
    }
  }, [queryPattern])

  if (!queryPattern) {
    if (activePattern) {
      return <Navigate replace to={{ pathname, search: `?id=${activePatternId}` }} />
    } else {
      return <Navigate replace to={{ pathname, search: `?id=${PATTERNS[0].id}` }} />
    }
  }

  const pattern = queryPattern || activePattern
  const Component = pattern.component

  return (
    <Box paddingTop="sm" paddingInline={{ base: 'md', lg: 'xl' }}>
      <Section size="lg" heading="Patterns" iconName="pyramid">
        <SplitView>
          {({ mode, setSideOpen }) => {
            return (
              <>
                <SplitView.Main>
                  <SplitView.MainBar>
                    <Text typography="h5" noWrap>
                      {pattern.title}
                    </Text>
                    <Spacer blockSize="3xs" />
                    <Markup>
                      <Text intent="primary">{pattern.description}</Text>
                    </Markup>
                  </SplitView.MainBar>
                  <Spacer blockSize="lg" />
                  <Flex gap="md" flexDirection="column" alignItems="stretch">
                    <Flex.Item flex="1">
                      <Box
                        tagAttrs={{ style: { borderStyle: 'dashed' } }}
                        drawable
                        variant="outline"
                        intent="tertiary"
                        maxBlockSize="calc(100dvh - 275px)"
                        padding="sm"
                      >
                        <Component />
                      </Box>
                    </Flex.Item>
                    <Flex.Item flex="1">
                      <CodeSnippet lang="tsx" code={pattern.code} usage={pattern.usage} maxBlockSize="calc(100dvh - 275px)" />
                    </Flex.Item>
                  </Flex>
                </SplitView.Main>
                <SplitView.Side inlineSize="350px" paddingRight={{ lg: 'md' }}>
                  <MultiSelect
                    value={patternCategories}
                    onChange={setPatternCategories}
                    intent={{ base: 'tertiary', lg: 'neutral' }}
                    size="sm"
                  >
                    {PATTERN_CATEGORIES.map(c => (
                      <MultiSelect.Option key={c} value={c}>
                        {c}
                      </MultiSelect.Option>
                    ))}
                  </MultiSelect>
                  <Spacer blockSize="sm" />
                  <SideNav size="xl" gap="3xs" intent={{ base: 'tertiary', lg: 'muted' }}>
                    {PATTERNS.filter(p => patternCategories.includes(p.category)).map(({ id, title, category }) => {
                      const href = `/patterns?id=${id}`

                      return (
                        <SideNav.Item
                          key={id}
                          href={href}
                          onClick={async () => {
                            if (mode === 'overlay') await setSideOpen(false)
                            navigateTo(href)
                          }}
                          selected={pattern.id === id}
                          description={category}
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
