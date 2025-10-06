import { useEffect } from 'react'
import { useLocation } from 'react-router'

import { SplitView, SideNav, Breadcrumb, Section, Spacer, Box } from 'lib/components'
import { useComponentsPageStore } from 'client/store'
import { useNavigateTo } from 'client/services'
import { COMPONENT_CATEGORIES, PageKey } from 'client/definitions'
import { ComponentsPageRoutes } from 'client/pages'

export const ComponentsPage = () => {
  const { pathname } = useLocation()

  const navigateTo = useNavigateTo()
  const componentsPageStore = useComponentsPageStore()

  useEffect(() => {
    const [, categoryKey, itemKey, sectionKey] = pathname.split('/').filter(s => s)
    componentsPageStore.setCategoryKey(categoryKey)
    componentsPageStore.setItemKey(itemKey)
    componentsPageStore.setSectionKey(sectionKey)
  }, [pathname])

  const activeCategoryObj = COMPONENT_CATEGORIES?.find(c => c.key === componentsPageStore.categoryKey)
  const activeItemObj = activeCategoryObj?.items.find(i => i.key === componentsPageStore.itemKey)
  const activeSectionObj = activeItemObj?.sections.find(s => s.key === componentsPageStore.sectionKey)

  return (
    <SplitView>
      <SplitView.Side>
        {({ setSideOpen, mode }) => (
          <SideNav intent={{ base: 'secondary', lg: 'neutral' }}>
            {COMPONENT_CATEGORIES.map(({ key: categoryKey, label, items }) => {
              const isCategorySelected = activeCategoryObj?.key === categoryKey
              return (
                <SideNav.Category
                  key={categoryKey}
                  label={label}
                  variant="ghost"
                  intent={isCategorySelected ? 'primary' : 'neutral'}
                >
                  {items.map(({ key: itemKey, label, sections }) => {
                    const sectionIndex = sections.findIndex(s => s.key === componentsPageStore.sectionKey)
                    const href = `/${PageKey.components}/${categoryKey}/${itemKey}/${sections[sectionIndex > -1 ? sectionIndex : 0].key}`
                    const isItemSelected = pathname === href
                    return (
                      <SideNav.Item
                        key={itemKey}
                        tagAttrs={{
                          href,
                          onClick: e => {
                            e.preventDefault()
                            navigateTo(href)
                            if (mode === 'overlay') {
                              setSideOpen(false)
                            }
                          },
                        }}
                        textIntent={{ lg: isItemSelected ? 'primary' : 'neutral' }}
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
        )}
      </SplitView.Side>
      <SplitView.Main paddingLeft={10}>
        <Spacer blockSize={15} />
        <SplitView sidePosition="right">
          <SplitView.Side>
            {({ setSideOpen, mode }) => (
              <SideNav intent={{ base: 'secondary', lg: 'neutral' }}>
                {COMPONENT_CATEGORIES.find(c => c.key === componentsPageStore.categoryKey)
                  ?.items.find(i => i.key === componentsPageStore.itemKey)
                  ?.sections.map(({ key: sectionKey, label }) => {
                    const href = `/${PageKey.components}/${componentsPageStore.categoryKey}/${componentsPageStore.itemKey}/${sectionKey}`
                    const isItemSelected = pathname === href
                    return (
                      <SideNav.Item
                        key={sectionKey}
                        tagAttrs={{
                          href,
                          onClick: e => {
                            e.preventDefault()
                            navigateTo(href)
                            if (mode === 'overlay') {
                              setSideOpen(false)
                            }
                          },
                        }}
                        textIntent={{ lg: isItemSelected ? 'primary' : 'neutral' }}
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
            )}
          </SplitView.Side>
          <SplitView.Main paddingRight={10}>
            <ComponentsPageRoutes />
          </SplitView.Main>
          <SplitView.MainBar>
            <Section heading={activeItemObj?.label} size="xl">
              {null}
            </Section>
          </SplitView.MainBar>
        </SplitView>
      </SplitView.Main>
      <SplitView.MainBar>
        <Box marginRight={10}>
          <Breadcrumb
            items={['Components', activeCategoryObj?.label, activeItemObj?.label, activeSectionObj?.label]}
          />
        </Box>
      </SplitView.MainBar>
    </SplitView>
  )
}
