import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { pascalCase, sentenceCase } from 'change-case'

import { SidePanelLayout, PageSideNav, Breadcrumb, Text, Divider } from 'lib/components'
import { useDocsPageStore } from 'client/store'
import { useNavigateTo } from 'client/services'
import { DOCS_PAGES } from 'client/definitions'
import { CompDocPage } from '../CompDocPage'

export const DocsPage = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const navigateTo = useNavigateTo()
  const docsPageStore = useDocsPageStore()

  useEffect(() => {
    const [, categoryKey, itemKey] = pathname.split('/').filter(s => s)
    docsPageStore.setCategoryKey(categoryKey)
    docsPageStore.setItemKey(itemKey)
  }, [pathname])

  const isCompDocPage = DOCS_PAGES.findIndex(page => page.key === docsPageStore.categoryKey) >= 2

  return (
    <SidePanelLayout>
      <SidePanelLayout.Header>
        <Breadcrumb
          items={[
            t('common.docs'),
            sentenceCase(docsPageStore.categoryKey),
            pascalCase(docsPageStore.itemKey),
          ]}
        />
      </SidePanelLayout.Header>
      <SidePanelLayout.Main mx={10}>
        <SidePanelLayout sidePosition="right">
          <SidePanelLayout.Header>
            <Text typography="h3">{pascalCase(docsPageStore.itemKey)}</Text>
            <Divider />
          </SidePanelLayout.Header>
          <SidePanelLayout.SideDesktop>side desktop</SidePanelLayout.SideDesktop>
          <SidePanelLayout.Main>{isCompDocPage ? <CompDocPage /> : null}</SidePanelLayout.Main>
        </SidePanelLayout>
      </SidePanelLayout.Main>
      <SidePanelLayout.SideDesktop>
        <PageSideNav
          groups={DOCS_PAGES.map(({ key: categoryKey, label }) => ({
            key: categoryKey,
            label,
            items: DOCS_PAGES.find(obj => obj.key === categoryKey).items.map(({ key: itemKey, label }) => ({
              key: itemKey,
              label,
              onClick: () => {
                navigateTo(`/docs/${categoryKey}/${itemKey}`)
              },
            })),
          }))}
          activeItemKey={docsPageStore.itemKey}
        />
      </SidePanelLayout.SideDesktop>
      <SidePanelLayout.SideMobile>
        {({ setSideOpen }) => (
          <PageSideNav
            groups={DOCS_PAGES.map(({ key: categoryKey, label }) => ({
              key: categoryKey,
              label,
              items: DOCS_PAGES.find(obj => obj.key === categoryKey).items.map(({ key: itemKey, label }) => ({
                key: itemKey,
                label,
                onClick: () => {
                  if (navigateTo(`/docs/${categoryKey}/${itemKey}`)) {
                    setSideOpen(false)
                  }
                },
              })),
            }))}
            activeItemKey={docsPageStore.itemKey}
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
