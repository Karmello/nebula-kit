import { useEffect } from 'react'
import { useLocation } from 'react-router'

import { useCorePageStore } from 'client/store'
import { CatalogPageTemplate } from 'client/components'
import { CORE_PAGE_CATEGORIES, PageKey } from 'client/definitions'

export const CorePage = () => {
  const { pathname } = useLocation()

  const corePageStore = useCorePageStore()

  useEffect(() => {
    const [, categoryKey, itemKey, sectionKey] = pathname.split('/').filter(s => s)
    corePageStore.setCategoryKey(categoryKey)
    corePageStore.setItemKey(itemKey)
    corePageStore.setSectionKey(sectionKey)
  }, [pathname])

  const activeCategoryObj = CORE_PAGE_CATEGORIES?.find(c => c.key === corePageStore.categoryKey)
  const activeItemObj = activeCategoryObj?.items.find(i => i.key === corePageStore.itemKey)
  const activeSectionObj = activeItemObj?.sections.find(s => s.key === corePageStore.sectionKey)

  return (
    <CatalogPageTemplate
      pageKey={PageKey.core}
      data={CORE_PAGE_CATEGORIES}
      activeCategoryObj={activeCategoryObj}
      activeItemObj={activeItemObj}
      activeSectionObj={activeSectionObj}
    />
  )
}
