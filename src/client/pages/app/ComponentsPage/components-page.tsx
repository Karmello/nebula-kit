import { useEffect } from 'react'
import { useLocation } from 'react-router'

import { useComponentsPageStore } from 'client/store'
import { CatalogPageTemplate } from 'client/components'
import { COMPONENT_CATEGORIES, PageKey } from 'client/definitions'

export const ComponentsPage = () => {
  const { pathname } = useLocation()

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
    <CatalogPageTemplate
      pageKey={PageKey.components}
      data={COMPONENT_CATEGORIES}
      activeCategoryObj={activeCategoryObj}
      activeItemObj={activeItemObj}
      activeSectionObj={activeSectionObj}
    />
  )
}
