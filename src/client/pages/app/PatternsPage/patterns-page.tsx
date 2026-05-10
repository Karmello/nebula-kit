import { useNavigateTo } from 'client/hooks'
import { PATTERNS } from 'client/definitions'
import { Box, Section, SideNav, SplitView } from 'lib/components'

export const PatternsPage = () => {
  const navigateTo = useNavigateTo()

  return (
    <Box paddingTop="sm" paddingInline={{ base: 'md', lg: 'xl' }} maxInlineSize="75rem">
      <Section size="lg" heading="Patterns" iconName="pyramid">
        <SplitView>
          <SplitView.Main>
            <SplitView.MainBar>dsfsdfsdf</SplitView.MainBar>
            sdfsdf
          </SplitView.Main>
          <SplitView.Side>
            <SideNav size="xs" intent="muted">
              {PATTERNS.map(({ id, title }) => {
                const href = `/patterns?id=${id}`

                return (
                  <SideNav.Item
                    key={id}
                    href={href}
                    onClick={() => {
                      navigateTo(href)
                    }}
                  >
                    {title}
                  </SideNav.Item>
                )
              })}
            </SideNav>
          </SplitView.Side>
        </SplitView>
      </Section>
    </Box>
  )
}
