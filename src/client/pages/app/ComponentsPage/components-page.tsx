import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { SidePanelLayout, SideNav, Breadcrumb, Section, Spacer } from 'lib/components'
import { useComponentsPageStore } from 'client/store'
import { useNavigateTo } from 'client/services'
import { COMPONENT_CATEGORIES, PageKey } from 'client/definitions'

import { ComponentsPageRoutes } from './ComponentsPageRoutes'

export const ComponentsPage = () => {
  const { t } = useTranslation()
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
      <SidePanelLayout.Header>
        <Breadcrumb
          items={[
            t('common.components'),
            activeCategoryObj?.label,
            activeItemObj?.label,
            activeSectionObj?.label,
          ]}
        />
      </SidePanelLayout.Header>
      <SidePanelLayout.Main>
        <Spacer size={10} />
        <SidePanelLayout sidePosition="right">
          <SidePanelLayout.Header>
            <Section heading={activeItemObj?.label} headingProps={{ typography: 'h3' }} />
          </SidePanelLayout.Header>
          <SidePanelLayout.SideDesktop>
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
          </SidePanelLayout.SideDesktop>
          <SidePanelLayout.SideMobile>
            {({ setSideOpen }) => (
              <SideNav
                groups={COMPONENT_CATEGORIES.find(c => c.key === componentsPageStore.categoryKey)
                  ?.items.find(i => i.key === componentsPageStore.itemKey)
                  ?.sections.map(({ key: sectionKey, label }) => ({
                    key: sectionKey,
                    label,
                    elemProps: {
                      onClick: () => {
                        if (
                          navigateTo(
                            `/${PageKey.components}/${componentsPageStore.categoryKey}/${componentsPageStore.itemKey}/${sectionKey}`
                          )
                        ) {
                          setSideOpen(false)
                        }
                      },
                    },
                  }))}
                activeKey={componentsPageStore.sectionKey}
                groupConfig={{
                  default: { variant: 'solid', intent: 'secondary' },
                  active: { variant: 'solid', intent: 'tertiary' },
                }}
              />
            )}
          </SidePanelLayout.SideMobile>
          <SidePanelLayout.Main>
            <Spacer size={10} />
            <ComponentsPageRoutes />
          </SidePanelLayout.Main>
        </SidePanelLayout>
      </SidePanelLayout.Main>
      <SidePanelLayout.SideDesktop>
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
      </SidePanelLayout.SideDesktop>
      <SidePanelLayout.SideMobile>
        {({ setSideOpen }) => (
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
                    if (
                      navigateTo(
                        `/${PageKey.components}/${categoryKey}/${itemKey}/${sections[sectionIndex > -1 ? sectionIndex : 0].key}`
                      )
                    ) {
                      setSideOpen(false)
                    }
                  },
                },
              })),
            }))}
            activeKey={componentsPageStore.itemKey}
            itemConfig={{
              default: { intent: 'secondary' },
              active: { intent: 'tertiary' },
            }}
          />
        )}
      </SidePanelLayout.SideMobile>
    </SidePanelLayout>
  )
}
