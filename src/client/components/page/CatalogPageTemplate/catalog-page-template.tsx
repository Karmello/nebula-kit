import { useLocation } from 'react-router'
import { pascalCase } from 'change-case'

import { useNavigateTo } from 'client/services'
import { Box, Breadcrumb, SideNav, Spacer, SplitView, Text, Divider } from 'lib/components'
import { ComponentsPageRoutes, FoundationsPageRoutes } from 'client/pages'
import { PageKey } from 'client/definitions'

type Props = {
  pageKey: string
  data: {
    key: string
    label: string
    items: { key: string; label: string; sections: { key: string; label: string }[] }[]
  }[]
  activeCategoryObj: { key: string; label: string }
  activeItemObj: { key: string; label: string }
  activeSectionObj: { key: string; label: string }
}

export const CatalogPageTemplate = ({
  pageKey,
  data,
  activeCategoryObj,
  activeItemObj,
  activeSectionObj,
}: Props) => {
  const { pathname } = useLocation()

  const navigateTo = useNavigateTo()

  return (
    <SplitView>
      {({ mode, setSideOpen }) => (
        <>
          <SplitView.Side>
            <SideNav>
              {data.map(({ key: categoryKey, label, items }) => {
                const isCategorySelected = activeCategoryObj?.key === categoryKey
                return (
                  <SideNav.Category
                    key={categoryKey}
                    label={label}
                    variant="ghost"
                    intent={isCategorySelected ? 'primary' : 'neutral'}
                    initiallyExpanded={isCategorySelected}
                  >
                    {items.map(({ key: itemKey, label, sections }) => {
                      const sectionIndex = sections.findIndex(s => s.key === activeSectionObj?.key)
                      const href = `/${pageKey}/${categoryKey}/${itemKey}/${sections[sectionIndex > -1 ? sectionIndex : 0].key}`
                      const isItemSelected = pathname === href
                      return (
                        <SideNav.Item
                          key={itemKey}
                          href={href}
                          onClick={async () => {
                            if (mode === 'overlay') {
                              await setSideOpen(false)
                            }
                            navigateTo(href)
                          }}
                          labelIntent={{ lg: isItemSelected ? 'primary' : 'neutral' }}
                          intent={{
                            base: isItemSelected ? 'primary' : 'secondary',
                            lg: isItemSelected ? 'tertiary' : 'neutral',
                          }}
                        >
                          {label}
                        </SideNav.Item>
                      )
                    })}
                  </SideNav.Category>
                )
              })}
            </SideNav>
          </SplitView.Side>
          <SplitView.Main paddingLeft={10}>
            <SplitView.MainBar>
              <Box marginRight={10}>
                <Breadcrumb
                  items={[
                    pascalCase(pageKey),
                    activeCategoryObj?.label,
                    activeItemObj?.label,
                    activeSectionObj?.label,
                  ]}
                />
              </Box>
            </SplitView.MainBar>
            <Spacer blockSize={15} />
            <SplitView sidePosition="right">
              {({ mode, setSideOpen }) => (
                <>
                  <SplitView.Side>
                    <SideNav>
                      {data
                        .find(c => c.key === activeCategoryObj?.key)
                        ?.items.find(i => i.key === activeItemObj?.key)
                        ?.sections.map(({ key: sectionKey, label }) => {
                          const href = `/${pageKey}/${activeCategoryObj?.key}/${activeItemObj?.key}/${sectionKey}`
                          const isItemSelected = pathname === href
                          return (
                            <SideNav.Item
                              key={sectionKey}
                              href={href}
                              onClick={async () => {
                                if (mode === 'overlay') {
                                  await setSideOpen(false)
                                }
                                navigateTo(href)
                              }}
                              labelIntent={{ lg: isItemSelected ? 'primary' : 'neutral' }}
                              intent={{
                                base: isItemSelected ? 'primary' : 'secondary',
                                lg: isItemSelected ? 'tertiary' : 'neutral',
                              }}
                            >
                              {label}
                            </SideNav.Item>
                          )
                        })}
                    </SideNav>
                  </SplitView.Side>
                  <SplitView.Main paddingRight={10}>
                    <SplitView.MainBar>
                      <Text typography="h3">
                        {pageKey === PageKey.foundations ? activeSectionObj?.label : activeItemObj?.label}
                      </Text>
                      <Divider />
                    </SplitView.MainBar>
                    {pageKey === PageKey.foundations ? <FoundationsPageRoutes /> : null}
                    {pageKey === PageKey.components ? <ComponentsPageRoutes /> : null}
                  </SplitView.Main>
                </>
              )}
            </SplitView>
          </SplitView.Main>
        </>
      )}
    </SplitView>
  )
}
