import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { SidePanelLayout, SideNav, Breadcrumb, Section, Spacer } from 'lib/components'
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
    <SidePanelLayout>
      <SidePanelLayout.MainBar>
        <Breadcrumb
          items={['Foundations', activeCategoryObj?.label, activeItemObj?.label, activeSectionObj?.label]}
        />
      </SidePanelLayout.MainBar>
      <SidePanelLayout.Main paddingLeft={10}>
        <Spacer size={10} />
        <SidePanelLayout sidePosition="right">
          <SidePanelLayout.MainBar>
            <Section heading={activeSectionObj?.label} headingProps={{ typography: 'h3' }} />
          </SidePanelLayout.MainBar>
          <SidePanelLayout.Side>
            <SideNav
              groups={FOUNDATION_CATEGORIES.find(c => c.key === foundationsPageStore.categoryKey)
                ?.items.find(i => i.key === foundationsPageStore.itemKey)
                ?.sections.map(({ key: sectionKey, label }) => ({
                  key: sectionKey,
                  label,
                  elemProps: {
                    onClick: () => {
                      navigateTo(
                        `/${PageKey.foundations}/${foundationsPageStore.categoryKey}/${foundationsPageStore.itemKey}/${sectionKey}`
                      )
                    },
                  },
                }))}
              activeKey={foundationsPageStore.sectionKey}
              groupConfig={{
                default: { variant: 'solid' },
                active: { variant: 'solid', intent: 'tertiary' },
              }}
            />
          </SidePanelLayout.Side>
          <SidePanelLayout.Main paddingRight={10}>
            <FoundationsPageRoutes />
          </SidePanelLayout.Main>
        </SidePanelLayout>
      </SidePanelLayout.Main>
      <SidePanelLayout.Side>
        <SideNav
          groups={FOUNDATION_CATEGORIES.map(({ key: categoryKey, label, items }) => ({
            key: categoryKey,
            label,
            items: items.map(({ key: itemKey, label, sections }) => ({
              key: itemKey,
              label,
              elemProps: {
                onClick: () => {
                  const sectionIndex = sections.findIndex(s => s.key === foundationsPageStore.sectionKey)
                  navigateTo(
                    `/${PageKey.foundations}/${categoryKey}/${itemKey}/${sections[sectionIndex > -1 ? sectionIndex : 0].key}`
                  )
                },
              },
            })),
          }))}
          activeKey={foundationsPageStore.itemKey}
        />
      </SidePanelLayout.Side>
    </SidePanelLayout>
  )
}
