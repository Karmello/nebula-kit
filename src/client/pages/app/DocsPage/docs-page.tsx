import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { pascalCase, sentenceCase } from 'change-case'

import { SidePanelLayout, SideNav, Breadcrumb, Section } from 'lib/components'
import { useDocsPageStore } from 'client/store'
import { useNavigateTo } from 'client/services'
import { DOCS_CATEGORIES } from 'client/definitions'

import { DocPage } from './DocPage'

export const DocsPage = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const navigateTo = useNavigateTo()
  const docsPageStore = useDocsPageStore()

  useEffect(() => {
    const [, categoryKey, itemKey, sectionKey] = pathname.split('/').filter(s => s)
    docsPageStore.setCategoryKey(categoryKey || DOCS_CATEGORIES[0].key)
    docsPageStore.setItemKey(itemKey || DOCS_CATEGORIES[0].items[0].key)
    docsPageStore.setSectionKey(sectionKey || DOCS_CATEGORIES[0].items[0].sections[0].key)
  }, [pathname])

  return (
    <SidePanelLayout>
      <SidePanelLayout.Header>
        <Breadcrumb
          items={[
            t('common.docs'),
            sentenceCase(docsPageStore.categoryKey),
            pascalCase(docsPageStore.itemKey),
            sentenceCase(docsPageStore.sectionKey),
          ]}
        />
      </SidePanelLayout.Header>
      <SidePanelLayout.Main mx={10}>
        <SidePanelLayout sidePosition="right">
          <SidePanelLayout.Header>
            <Section heading={pascalCase(docsPageStore.itemKey)} headingProps={{ typography: 'h3' }} />
          </SidePanelLayout.Header>
          <SidePanelLayout.SideDesktop>
            <SideNav
              groups={DOCS_CATEGORIES.find(c => c.key === docsPageStore.categoryKey)
                ?.items.find(i => i.key === docsPageStore.itemKey)
                ?.sections.map(({ key: sectionKey, label }) => ({
                  key: sectionKey,
                  label,
                  onClick: () => {
                    navigateTo(`/docs/${docsPageStore.categoryKey}/${docsPageStore.itemKey}/${sectionKey}`)
                  },
                }))}
              activeKey={docsPageStore.sectionKey}
              groupConfig={{
                default: { variant: 'solid' },
                active: { variant: 'solid', intent: 'tertiary' },
              }}
            />
          </SidePanelLayout.SideDesktop>
          <SidePanelLayout.SideMobile>
            {({ setSideOpen }) => (
              <SideNav
                groups={DOCS_CATEGORIES.find(c => c.key === docsPageStore.categoryKey)
                  ?.items.find(i => i.key === docsPageStore.itemKey)
                  ?.sections.map(({ key: sectionKey, label }) => ({
                    key: sectionKey,
                    label,
                    onClick: () => {
                      if (
                        navigateTo(
                          `/docs/${docsPageStore.categoryKey}/${docsPageStore.itemKey}/${sectionKey}`
                        )
                      ) {
                        setSideOpen(false)
                      }
                    },
                  }))}
                activeKey={docsPageStore.sectionKey}
                groupConfig={{
                  default: { variant: 'solid', intent: 'secondary' },
                  active: { variant: 'solid', intent: 'tertiary' },
                }}
              />
            )}
          </SidePanelLayout.SideMobile>
          <SidePanelLayout.Main mx={10}>
            <DocPage />
          </SidePanelLayout.Main>
        </SidePanelLayout>
      </SidePanelLayout.Main>
      <SidePanelLayout.SideDesktop>
        <SideNav
          groups={DOCS_CATEGORIES.map(({ key: categoryKey, label, items }) => ({
            key: categoryKey,
            label,
            items: items.map(({ key: itemKey, label, sections }) => ({
              key: itemKey,
              label,
              onClick: () => {
                const sectionIndex = sections.findIndex(s => s.key === docsPageStore.sectionKey)
                navigateTo(
                  `/docs/${categoryKey}/${itemKey}/${sections[sectionIndex > -1 ? sectionIndex : 0].key}`
                )
              },
            })),
          }))}
          activeKey={docsPageStore.itemKey}
        />
      </SidePanelLayout.SideDesktop>
      <SidePanelLayout.SideMobile>
        {({ setSideOpen }) => (
          <SideNav
            groups={DOCS_CATEGORIES.map(({ key: categoryKey, label, items }) => ({
              key: categoryKey,
              label,
              items: items.map(({ key: itemKey, label, sections }) => ({
                key: itemKey,
                label,
                onClick: () => {
                  const sectionIndex = sections.findIndex(s => s.key === docsPageStore.sectionKey)
                  if (
                    navigateTo(
                      `/docs/${categoryKey}/${itemKey}/${sections[sectionIndex > -1 ? sectionIndex : 0].key}`
                    )
                  ) {
                    setSideOpen(false)
                  }
                },
              })),
            }))}
            activeKey={docsPageStore.itemKey}
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
