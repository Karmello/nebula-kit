import { useEffect } from 'react'
import { useLocation } from 'react-router'

import { SplitView, SideNav, Breadcrumb, Section, Spacer, Box } from 'lib/components'
import { useFoundationsPageStore } from 'client/store'
import { useNavigateTo } from 'client/services'
import { FOUNDATION_CATEGORIES, PageKey } from 'client/definitions'
import { FoundationsPageRoutes } from 'client/pages'

export const FoundationsPage = () => {
  const { pathname } = useLocation()

  const navigateTo = useNavigateTo()
  const foundationsPageStore = useFoundationsPageStore()

  useEffect(() => {
    const [, categoryKey, itemKey, sectionKey] = pathname.split('/').filter(s => s)
    foundationsPageStore.setCategoryKey(categoryKey)
    foundationsPageStore.setItemKey(itemKey)
    foundationsPageStore.setSectionKey(sectionKey)
  }, [pathname])

  const activeCategoryObj = FOUNDATION_CATEGORIES?.find(c => c.key === foundationsPageStore.categoryKey)
  const activeItemObj = activeCategoryObj?.items.find(i => i.key === foundationsPageStore.itemKey)
  const activeSectionObj = activeItemObj?.sections.find(s => s.key === foundationsPageStore.sectionKey)

  return (
    <SplitView>
      <SplitView.Side>
        <SideNav>
          {FOUNDATION_CATEGORIES.map(({ key: categoryKey, label, items }) => (
            <SideNav.Category
              key={categoryKey}
              label={label}
              variant={activeCategoryObj?.key === categoryKey ? 'ghost' : 'solid'}
              intent={activeCategoryObj?.key === categoryKey ? 'primary' : 'neutral'}
            >
              {items.map(({ key: itemKey, label, sections }) => {
                const sectionIndex = sections.findIndex(s => s.key === foundationsPageStore.sectionKey)
                const href = `/${PageKey.foundations}/${categoryKey}/${itemKey}/${sections[sectionIndex > -1 ? sectionIndex : 0].key}`
                const isSelected = pathname === href
                return (
                  <SideNav.Item
                    key={itemKey}
                    tagAttrs={{
                      href,
                      onClick: e => {
                        e.preventDefault()
                        navigateTo(href)
                      },
                    }}
                    intent={isSelected ? 'tertiary' : 'neutral'}
                  >
                    {label}
                  </SideNav.Item>
                )
              })}
            </SideNav.Category>
          ))}
        </SideNav>
      </SplitView.Side>
      <SplitView.Main paddingLeft={10}>
        <Spacer blockSize={15} />
        <SplitView sidePosition="right">
          <SplitView.Side>
            <SideNav>
              {FOUNDATION_CATEGORIES.find(c => c.key === foundationsPageStore.categoryKey)
                ?.items.find(i => i.key === foundationsPageStore.itemKey)
                ?.sections.map(({ key: sectionKey, label }) => {
                  const href = `/${PageKey.foundations}/${foundationsPageStore.categoryKey}/${foundationsPageStore.itemKey}/${sectionKey}`
                  const isSelected = pathname === href
                  return (
                    <SideNav.Item
                      key={sectionKey}
                      tagAttrs={{
                        href,
                        onClick: e => {
                          e.preventDefault()
                          navigateTo(href)
                        },
                      }}
                      intent={isSelected ? 'tertiary' : 'neutral'}
                    >
                      {label}
                    </SideNav.Item>
                  )
                })}
            </SideNav>
          </SplitView.Side>
          <SplitView.Main paddingRight={10}>
            <FoundationsPageRoutes />
          </SplitView.Main>
          <SplitView.MainBar>
            <Section heading={activeSectionObj?.label} size="xl">
              {null}
            </Section>
          </SplitView.MainBar>
        </SplitView>
      </SplitView.Main>
      <SplitView.MainBar>
        <Box marginRight={10}>
          <Breadcrumb
            items={['Foundations', activeCategoryObj?.label, activeItemObj?.label, activeSectionObj?.label]}
          />
        </Box>
      </SplitView.MainBar>
    </SplitView>
  )
}
