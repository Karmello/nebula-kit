import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { SidePanelLayout, SideNav, Breadcrumb, Section, Spacer, Box, Text } from 'lib/components'
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
    <SidePanelLayout>
      <SidePanelLayout.Side>
        <SideNav
          groups={COMPONENT_CATEGORIES.map(({ key: categoryKey, label, items }) => ({
            key: categoryKey,
            label,
            items: items.map(({ key: itemKey, label, sections }) => ({
              key: itemKey,
              label,
              elemProps: {
                onClick: () => {
                  const sectionIndex = sections.findIndex(s => s.key === componentsPageStore.sectionKey)
                  navigateTo(
                    `/${PageKey.components}/${categoryKey}/${itemKey}/${sections[sectionIndex > -1 ? sectionIndex : 0].key}`
                  )
                },
              },
            })),
          }))}
          activeKey={componentsPageStore.itemKey}
        />
      </SidePanelLayout.Side>
      <SidePanelLayout.Main paddingLeft={10}>
        <Spacer blockSize={15} />
        <SidePanelLayout sidePosition="right">
          <SidePanelLayout.Side>
            <SideNav
              groups={COMPONENT_CATEGORIES.find(c => c.key === componentsPageStore.categoryKey)
                ?.items.find(i => i.key === componentsPageStore.itemKey)
                ?.sections.map(({ key: sectionKey, label }) => ({
                  key: sectionKey,
                  label,
                  elemProps: {
                    onClick: () => {
                      navigateTo(
                        `/${PageKey.components}/${componentsPageStore.categoryKey}/${componentsPageStore.itemKey}/${sectionKey}`
                      )
                    },
                  },
                }))}
              activeKey={componentsPageStore.sectionKey}
              groupConfig={{
                default: { variant: 'solid' },
                active: { variant: 'solid', intent: 'tertiary' },
              }}
            />
          </SidePanelLayout.Side>
          <SidePanelLayout.Main paddingRight={10}>
            <ComponentsPageRoutes />
          </SidePanelLayout.Main>
          <SidePanelLayout.MainBar>
            <Section heading={<Text typography="h3">{activeItemObj?.label}</Text>}>{null}</Section>
          </SidePanelLayout.MainBar>
        </SidePanelLayout>
      </SidePanelLayout.Main>
      <SidePanelLayout.MainBar>
        <Box marginRight={10}>
          <Breadcrumb
            items={['Components', activeCategoryObj?.label, activeItemObj?.label, activeSectionObj?.label]}
          />
        </Box>
      </SidePanelLayout.MainBar>
    </SidePanelLayout>
  )
}
