import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { SidePanelLayout, SideNav, Breadcrumb, Section, Spacer } from 'lib/components'
import { useFoundationsPageStore } from 'client/store'
import { useNavigateTo } from 'client/services'
import { FOUNDATION_CATEGORIES, PageKey } from 'client/definitions'

import { FoundationsPageRoutes } from './FoundationsPageRoutes'

export const FoundationsPage = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const navigateTo = useNavigateTo()
  const foundationsPageStore = useFoundationsPageStore()

  useEffect(() => {
    const [, categoryKey, itemKey, sectionKey] = pathname.split('/').filter(s => s)
    foundationsPageStore.setCategoryKey(categoryKey)
    foundationsPageStore.setItemKey(itemKey)
    foundationsPageStore.setSectionKey(sectionKey)
  }, [pathname])

  const activeCategoryObj = FOUNDATION_CATEGORIES.find(c => c.key === foundationsPageStore.categoryKey)
  const activeItemObj = activeCategoryObj?.items.find(i => i.key === foundationsPageStore.itemKey)
  const activeSectionObj = activeItemObj?.sections.find(s => s.key === foundationsPageStore.sectionKey)

  return (
    <SidePanelLayout>
      <SidePanelLayout.Header>
        <Breadcrumb
          items={[
            t('common.foundations'),
            activeCategoryObj?.label,
            activeItemObj?.label,
            activeSectionObj?.label,
          ]}
        />
      </SidePanelLayout.Header>
      <SidePanelLayout.Main marginInline={10}>
        <Spacer size={10} />
        <SidePanelLayout sidePosition="right">
          <SidePanelLayout.Header>
            <Section heading={activeSectionObj?.label} headingProps={{ typography: 'h3' }} />
          </SidePanelLayout.Header>
          <SidePanelLayout.SideDesktop>
            <SideNav
              groups={FOUNDATION_CATEGORIES.find(c => c.key === foundationsPageStore.categoryKey)
                ?.items.find(i => i.key === foundationsPageStore.itemKey)
                ?.sections.map(({ key: sectionKey, label }) => ({
                  key: sectionKey,
                  label,
                  onClick: () => {
                    navigateTo(
                      `/${PageKey.foundations}/${foundationsPageStore.categoryKey}/${foundationsPageStore.itemKey}/${sectionKey}`
                    )
                  },
                }))}
              activeKey={foundationsPageStore.sectionKey}
              groupConfig={{
                default: { variant: 'solid' },
                active: { variant: 'solid', intent: 'tertiary' },
              }}
            />
          </SidePanelLayout.SideDesktop>
          <SidePanelLayout.SideMobile>
            {({ setSideOpen }) => (
              <SideNav
                groups={FOUNDATION_CATEGORIES.find(c => c.key === foundationsPageStore.categoryKey)
                  ?.items.find(i => i.key === foundationsPageStore.itemKey)
                  ?.sections.map(({ key: sectionKey, label }) => ({
                    key: sectionKey,
                    label,
                    onClick: () => {
                      if (
                        navigateTo(
                          `/${PageKey.foundations}/${foundationsPageStore.categoryKey}/${foundationsPageStore.itemKey}/${sectionKey}`
                        )
                      ) {
                        setSideOpen(false)
                      }
                    },
                  }))}
                activeKey={foundationsPageStore.sectionKey}
                groupConfig={{
                  default: { variant: 'solid', intent: 'secondary' },
                  active: { variant: 'solid', intent: 'tertiary' },
                }}
              />
            )}
          </SidePanelLayout.SideMobile>
          <SidePanelLayout.Main marginInline={10}>
            <FoundationsPageRoutes />
          </SidePanelLayout.Main>
        </SidePanelLayout>
      </SidePanelLayout.Main>
      <SidePanelLayout.SideDesktop>
        <SideNav
          groups={FOUNDATION_CATEGORIES.map(({ key: categoryKey, label, items }) => ({
            key: categoryKey,
            label,
            items: items.map(({ key: itemKey, label, sections }) => ({
              key: itemKey,
              label,
              onClick: () => {
                const sectionIndex = sections.findIndex(s => s.key === foundationsPageStore.sectionKey)
                navigateTo(
                  `/${PageKey.foundations}/${categoryKey}/${itemKey}/${sections[sectionIndex > -1 ? sectionIndex : 0].key}`
                )
              },
            })),
          }))}
          activeKey={foundationsPageStore.itemKey}
        />
      </SidePanelLayout.SideDesktop>
      <SidePanelLayout.SideMobile>
        {({ setSideOpen }) => (
          <SideNav
            groups={FOUNDATION_CATEGORIES.map(({ key: categoryKey, label, items }) => ({
              key: categoryKey,
              label,
              items: items.map(({ key: itemKey, label, sections }) => ({
                key: itemKey,
                label,
                onClick: () => {
                  const sectionIndex = sections.findIndex(s => s.key === foundationsPageStore.sectionKey)
                  if (
                    navigateTo(
                      `/${PageKey.foundations}/${categoryKey}/${itemKey}/${sections[sectionIndex > -1 ? sectionIndex : 0].key}`
                    )
                  ) {
                    setSideOpen(false)
                  }
                },
              })),
            }))}
            activeKey={foundationsPageStore.itemKey}
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
