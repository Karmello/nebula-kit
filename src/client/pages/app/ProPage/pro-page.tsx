import { useEffect } from 'react'
import { useLocation } from 'react-router'

import { useProPageStore } from 'client/store'
import { CatalogPageTemplate } from 'client/components'
import { PRO_PAGE_CATEGORIES, PageKey } from 'client/definitions'

export const ProPage = () => {
  const { pathname } = useLocation()

  const proPageStore = useProPageStore()

  useEffect(() => {
    const [, categoryKey, itemKey, sectionKey] = pathname.split('/').filter(s => s)
    proPageStore.setCategoryKey(categoryKey)
    proPageStore.setItemKey(itemKey)
    proPageStore.setSectionKey(sectionKey)
  }, [pathname])

  const activeCategoryObj = PRO_PAGE_CATEGORIES?.find(c => c.key === proPageStore.categoryKey)
  const activeItemObj = activeCategoryObj?.items.find(i => i.key === proPageStore.itemKey)
  const activeSectionObj = activeItemObj?.sections.find(s => s.key === proPageStore.sectionKey)

  return (
    <CatalogPageTemplate
      pageKey={PageKey.pro}
      data={PRO_PAGE_CATEGORIES}
      activeCategoryObj={activeCategoryObj}
      activeItemObj={activeItemObj}
      activeSectionObj={activeSectionObj}
    />
  )
}
