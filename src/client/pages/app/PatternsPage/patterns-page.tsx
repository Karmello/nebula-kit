import { useLocation } from 'react-router-dom'

import { useNavigateTo } from 'client/hooks'
import { PATTERNS } from 'client/definitions'
import { Box, Section, SideNav, SplitView, Text } from 'lib/components'

export const PatternsPage = () => {
  const navigateTo = useNavigateTo()

  const { search } = useLocation()
  const patternId = new URLSearchParams(search).get('id')

  const pattern = PATTERNS.find(p => p.id === patternId)

  return (
    <Box paddingTop="sm" paddingInline={{ base: 'md', lg: 'xl' }} maxInlineSize="75rem">
      <Section size="lg" heading="Patterns" iconName="pyramid">
        <SplitView>
          {({ mode, setSideOpen }) => {
            return (
              <>
                <SplitView.Main>
                  <SplitView.MainBar>
                    <Text typography="h5">{pattern?.title}</Text>
                  </SplitView.MainBar>
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
