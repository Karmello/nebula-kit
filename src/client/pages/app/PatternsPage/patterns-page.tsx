import { useLayoutEffect } from 'react'
import { useLocation, Navigate } from 'react-router-dom'

import { useNavigateTo } from 'client/hooks'
import { PATTERNS, PATTERN_CATEGORIES } from 'client/definitions'
import { CodeSnippet } from 'client/components'
import { convertElemToString } from 'client/helpers'
import { usePatternsStore } from 'client/store'
import { Box, Flex, Markup, MultiSelect, Section, SideNav, Spacer, SplitView, Text } from 'lib/components'

export const PatternsPage = () => {
  const navigateTo = useNavigateTo()
  const { pathname, search } = useLocation()
  const { patternCategories, setPatternCategories, activePatternId, setActivePatternId } = usePatternsStore()

  const patternIdParam = new URLSearchParams(search).get('id')
  const pattern = PATTERNS.find(p => p.id === patternIdParam)

  useLayoutEffect(() => {
    if (pattern) {
      setActivePatternId(pattern.id)
    }
  }, [pattern])

  if (!pattern) {
    return <Navigate replace to={{ pathname, search: `?id=${activePatternId}` }} />
  }

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
                  {pattern.jsx ? (
                    <Flex key={pattern.id} gap="md" flexDirection="column" alignItems="stretch">
                      <Flex.Item flex="1">
                        <Box
                          tagAttrs={{ style: { borderStyle: 'dashed' } }}
                          drawable
                          variant="outline"
                          intent="tertiary"
                          maxBlockSize="calc(100dvh - 275px)"
                          padding="sm"
                        >
                          {pattern.jsx}
                        </Box>
                      </Flex.Item>
                      <Flex.Item flex="1">
                        <CodeSnippet
                          lang="tsx"
                          code={pattern.code || convertElemToString(pattern.jsx)}
                          maxBlockSize="calc(100dvh - 275px)"
                        />
                      </Flex.Item>
                    </Flex>
                  ) : null}
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
